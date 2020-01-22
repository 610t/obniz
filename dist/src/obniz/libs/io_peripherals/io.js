"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PeripheralIO {
    constructor(obniz, id) {
        this.Obniz = obniz;
        this.id = id;
        this._reset();
    }
    _reset() {
        this.value = false;
        this.observers = [];
    }
    addObserver(callback) {
        if (callback) {
            this.observers.push(callback);
        }
    }
    output(value) {
        value = !!value;
        const obj = {};
        obj["io" + this.id] = value;
        this.value = value;
        this.Obniz.send(obj);
    }
    drive(drive) {
        if (typeof drive !== "string") {
            throw new Error("please specify drive methods in string");
        }
        let output_type = "";
        switch (drive) {
            case "5v":
                output_type = "push-pull5v";
                break;
            case "3v":
                output_type = "push-pull3v";
                break;
            case "open-drain":
                output_type = "open-drain";
                break;
            default:
                throw new Error("unknown drive method");
        }
        const obj = {};
        obj["io" + this.id] = {
            output_type,
        };
        this.Obniz.send(obj);
    }
    pull(updown) {
        if (typeof updown !== "string" && updown !== null) {
            throw new Error("please specify pull methods in string");
        }
        let pull_type = "";
        switch (updown) {
            case "5v":
                pull_type = "pull-up5v";
                break;
            case "3v":
                pull_type = "pull-up3v";
                break;
            case "0v":
                pull_type = "pull-down";
                break;
            case null:
                pull_type = "float";
                break;
            default:
                throw new Error("unknown pull_type method");
        }
        const obj = {};
        obj["io" + this.id] = {
            pull_type,
        };
        this.Obniz.send(obj);
    }
    input(callback) {
        this.onchange = callback;
        const obj = {};
        obj["io" + this.id] = {
            direction: "input",
            stream: true,
        };
        this.Obniz.send(obj);
        return this.value;
    }
    inputWait() {
        const self = this;
        return new Promise((resolve, reject) => {
            self.addObserver(resolve);
            const obj = {};
            obj["io" + self.id] = {
                direction: "input",
                stream: false,
            };
            self.Obniz.send(obj);
        });
    }
    end() {
        const obj = {};
        obj["io" + this.id] = null;
        this.Obniz.send(obj);
    }
    notified(obj) {
        if (typeof obj === "boolean") {
            this.value = obj;
            const callback = this.observers.shift();
            if (callback) {
                callback(obj);
            }
            if (typeof this.onchange === "function") {
                this.onchange(obj);
            }
        }
        else if (obj && typeof obj === "object") {
            if (obj.warning) {
                this.Obniz.warning({
                    alert: "warning",
                    message: `io${this.id}: ${obj.warning.message}`,
                });
            }
            if (obj.error) {
                this.Obniz.error({
                    alert: "error",
                    message: `io${this.id}: ${obj.error.message}`,
                });
            }
        }
    }
}
exports.default = PeripheralIO;

//# sourceMappingURL=io.js.map