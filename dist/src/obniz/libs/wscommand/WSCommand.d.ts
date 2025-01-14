/**
 * @packageDocumentation
 * @ignore
 */
/// <reference types="tv4" />
import WSSchema from './WSSchema';
declare type WSCommandConstructor = new () => WSCommand;
export default abstract class WSCommand {
    static get schema(): WSSchema.TV4;
    static get CommandClasses(): {
        [key: string]: WSCommandConstructor;
    };
    get WSCommandNotFoundError(): typeof WSCommandNotFoundError;
    static addCommandClass(name: string, classObj: WSCommandConstructor): void;
    static framed(module: any, func: any, payload: any): Uint8Array;
    static dequeueOne(buf: any): {
        module: any;
        func: any;
        payload: any;
        next: any;
    } | null;
    static compress(wscommands: any, json: any): Uint8Array | null;
    _hw: any;
    ioNotUsed: number;
    COMMAND_FUNC_ID_ERROR: number;
    abstract module: number;
    private parsed?;
    constructor();
    setHw(obj: any): void;
    sendCommand(func: any, payload: any): void;
    parseFromJson(json: any): void;
    notifyFromBinary(objToSend: any, func: any, payload: any): void;
    envelopWarning(objToSend: any, module_key: any, obj: any): void;
    envelopError(objToSend: any, module_key: any, obj: any): void;
    isValidIO(io: any): boolean;
    getSchema(uri: any): WSSchema.JsonSchema;
    validateCommandSchema(uriList: any, json: any, rootPath: any, customArg: any): any;
    validate(commandUri: any, json: any): WSSchema.MultiResult;
    fastValidate(commandUri: any, json: any): boolean;
    onlyTypeErrorMessage(validateError: any, rootPath: any): any;
    filter(commandUri: any, json: any): any;
    _filterSchema(schema: any, json: any): any;
}
declare class WSCommandNotFoundError extends Error {
}
export {};
