import { SPHttpClient } from '@microsoft/sp-http';

export interface IFeaturedPostProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}