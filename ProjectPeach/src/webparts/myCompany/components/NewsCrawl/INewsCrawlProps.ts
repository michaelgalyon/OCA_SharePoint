import { SPHttpClient } from '@microsoft/sp-http';

export interface INewsCrawlProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}