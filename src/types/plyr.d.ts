declare module 'plyr' {
  export interface PlyrOptions {
    [key: string]: unknown;
  }

  export default class Plyr {
    constructor(target: string | Element, options?: PlyrOptions);
    destroy(): void;
  }
}
