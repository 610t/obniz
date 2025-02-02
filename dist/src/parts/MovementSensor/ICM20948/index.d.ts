/**
 * @packageDocumentation
 * @module Parts.ICM20948
 */
import Obniz from '../../../obniz';
import ObnizPartsInterface, { ObnizPartsInfo } from '../../../obniz/ObnizPartsInterface';
import i2cParts, { I2cInfo, I2cPartsAbstractOptions } from '../../i2cParts';
export interface ICM20948Options extends I2cPartsAbstractOptions {
}
export default class ICM20948 extends i2cParts implements ObnizPartsInterface {
    static info(): ObnizPartsInfo;
    g: number;
    i2cinfo: I2cInfo;
    protected obniz: Obniz;
    private _ADDR;
    private _ak09916?;
    private _WHO_AM_I;
    private _GYRO_CONFIG;
    private _ACCEL_CONFIG;
    private _ACCEL_CONFIG2;
    private _INT_PIN_CFG;
    private _ACCEL_XOUT_H;
    private _ACCEL_XOUT_L;
    private _ACCEL_YOUT_H;
    private _ACCEL_YOUT_L;
    private _ACCEL_ZOUT_H;
    private _ACCEL_ZOUT_L;
    private _GYRO_XOUT_H;
    private _GYRO_XOUT_L;
    private _GYRO_YOUT_H;
    private _GYRO_YOUT_L;
    private _GYRO_ZOUT_H;
    private _GYRO_ZOUT_L;
    private _ACCEL_FS_SEL_2G;
    private _ACCEL_FS_SEL_4G;
    private _ACCEL_FS_SEL_8G;
    private _ACCEL_FS_SEL_16G;
    private _ACCEL_SO_2G;
    private _ACCEL_SO_4G;
    private _ACCEL_SO_8G;
    private _ACCEL_SO_16G;
    private _GYRO_FS_MASK;
    private _GYRO_FS_SEL_250DPS;
    private _GYRO_FS_SEL_500DPS;
    private _GYRO_FS_SEL_1000DPS;
    private _GYRO_FS_SEL_2000DPS;
    private _GYRO_SO_250DPS;
    private _GYRO_SO_500DPS;
    private _GYRO_SO_1000DPS;
    private _GYRO_SO_2000DPS;
    private _I2C_BYPASS_MASK;
    private _I2C_BYPASS_EN;
    private _I2C_BYPASS_DIS;
    private _SF_G;
    private _SF_MG;
    private _SF_M_S2;
    private _SF_DEG_S;
    private _SF_RAD_S;
    private _accel_sf;
    private _accel_so;
    private _gyro_sf;
    private _gyro_so;
    constructor();
    wired(obniz: Obniz): void;
    initWait(): Promise<void>;
    accelFs(value: string): void;
    accelSf(value: string): void;
    accelerationWait(): Promise<[number, number, number]>;
    gyroWait(): Promise<[number, number, number]>;
    magneticWait(): Promise<[number, number, number]>;
    calibrateWait(): Promise<{
        offset: [number, number, number];
        scale: [number, number, number];
    }>;
    whoamiWait(): Promise<number>;
    gyroFs(value: string): void;
    gyroSf(value: string): void;
    private _gyroDlpfWait;
    private _accelFs;
    private _gyroFs;
}
