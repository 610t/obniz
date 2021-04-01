/**
 * @packageDocumentation
 * @module Parts.LM35DZ
 */
import ObnizPartsInterface, { ObnizPartsInfo } from "../../../../obniz/ObnizPartsInterface";
import AnalogTemperatureSensor, { AnalogTemperatureSensorOptions } from "../AnalogTemperatureSensor";
export interface LM35DZOptions extends AnalogTemperatureSensorOptions {
}
export default class LM35DZ extends AnalogTemperatureSensor implements ObnizPartsInterface {
    static info(): ObnizPartsInfo;
    private temperature;
    private tempArray;
    private sum;
    private init_count;
    private count;
    calc(voltage: any): number;
}