import { SPHttpClient } from '@microsoft/sp-http';

export interface ITimesheetsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}