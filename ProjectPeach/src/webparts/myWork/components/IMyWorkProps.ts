import { SPHttpClient } from '@microsoft/sp-http';

export interface IMyWorkProps {
  description: string;
  requestsListName: string;
  requestsSiteUrl: string;
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}
