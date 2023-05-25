import { Namespace as NS } from './namespace';

declare global {
  var GlobalNamespace: typeof NS;

  export interface Window {
    WindowNamespace: typeof NS;
  }
}
