import { SPHttpClient } from '@microsoft/sp-http';

export interface ISocialCollabsProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}