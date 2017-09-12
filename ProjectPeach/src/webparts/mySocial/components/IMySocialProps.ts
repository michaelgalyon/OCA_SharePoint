import { SPHttpClient } from '@microsoft/sp-http';

export interface IMySocialProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}
