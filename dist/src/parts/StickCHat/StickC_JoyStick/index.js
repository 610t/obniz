"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StickC_JoyStick {
    constructor() {
        this.keys = ["vcc", "gnd", "sda", "scl", "i2c", "grove"];
        this.requiredKeys = [];
    }
    static info() {
        return {
            name: "StickC_JoyStick",
        };
    }
    wired(obniz) {
        this.obniz = obniz;
        this.obniz = obniz;
        this.obniz.setVccGnd(this.params.vcc, this.params.gnd, "5v");
        this.obniz.wait(100); // wait for booting of STM32F030F4
        this.params.mode = "master";
        this.params.clock = 100000;
        this.params.pull = "5v";
        this.i2c = this.obniz.getI2CWithConfig(this.params);
    }
    async getXWait() {
        const ret = await this.getXYWait();
        let val = ret[0];
        if (val > 0x7F) {
            val = val - 0x100;
        }
        return val;
    }
    async getYWait() {
        const ret = await this.getXYWait();
        let val = ret[1];
        if (val > 0x7F) {
            val = val - 0x100;
        }
        return val;
    }
    async isPressedWait() {
        this.i2c.write(0x38, [0x02]);
        const ret = await this.i2c.readWait(0x38, 3);
        return !Boolean(ret[2]);
    }
    async getXYWait() {
        this.i2c.write(0x38, [0x02]);
        const ret = await this.i2c.readWait(0x38, 3);
        return ret;
    }
}
exports.default = StickC_JoyStick;

//# sourceMappingURL=index.js.map
