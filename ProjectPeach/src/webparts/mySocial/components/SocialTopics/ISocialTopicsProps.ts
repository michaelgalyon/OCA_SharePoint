import { SPHttpClient } from '@microsoft/sp-http';

export interface ISocialTopicsProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}