// Type definitions for bleRemoteDescriptor
// Project: [LIBRARY_URL_HERE]
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 *
 */
declare interface BleRemoteDescriptor {

  /**
   *
   */
  parentName: string;

  /**
   *
   * @param params
   */
  new(params: any): BleRemoteDescriptor;

  /**
   *
   */
  read(): void;

  /**
   *
   * @param array
   * @param needResponse
   */
  write(array: any, needResponse: boolean): void;
}

declare module "bleRemoteDescriptor" {

  export default bleRemoteDescriptor;    // es6 style module export
}
