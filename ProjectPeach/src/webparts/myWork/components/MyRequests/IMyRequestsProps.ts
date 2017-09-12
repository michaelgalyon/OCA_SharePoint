import { SPHttpClient } from '@microsoft/sp-http';

export interface IMyRequestsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}