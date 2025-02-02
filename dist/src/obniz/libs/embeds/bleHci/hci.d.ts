/**
 * @packageDocumentation
 * @module ObnizCore.Components.Ble.Hci
 */
/// <reference types="node" />
export declare type EventHandler = (...args: any) => any;
export default class ObnizBLEHci {
    Obniz: any;
    timeout: number;
    hciProtocolOnSocketData: any;
    protected _eventHandlerQueue: {
        [key: string]: EventHandler[];
    };
    constructor(Obniz: any);
    /**
     * @ignore
     * @private
     */
    _reset(): void;
    /**
     * Initialize BLE HCI module
     */
    init(): void;
    /**
     * Deinitalize BLE HCI module
     */
    end(): void;
    /**
     * write HCI command to HCI module
     *
     * @param hciCommand
     */
    write(hciCommand: number[]): void;
    /**
     * @ignore
     * @param obj
     */
    notified(obj: any): void;
    /**
     * Callback on HCI command received.
     *
     * @param data
     */
    onread(data: any): void;
    /**
     * @ignore
     * @private
     * @param promise
     * @param option
     * @param option.timeout Timeout number in seconds. If not specified. default timeout is applied. If null specified, never timeout.
     * @param option.waitingFor Readable description of command for waiting. Printed when Error or timeout occured.
     */
    timeoutPromiseWrapper<T>(promise: Promise<T>, option?: any): Promise<T>;
    readWait(binaryFilter: number[], option?: any): Promise<Buffer>;
    protected onceQueue(binaryFilter: number[], func: EventHandler): void;
    protected validate(str: string, json: any): boolean;
    protected encodeBinaryFilter(binary: number[]): string;
    protected decodeBinaryFilter(str: string): number[];
}
