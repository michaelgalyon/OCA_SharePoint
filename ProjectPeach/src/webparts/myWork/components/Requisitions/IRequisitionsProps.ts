import { SPHttpClient } from '@microsoft/sp-http';

export interface IRequisitionsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}