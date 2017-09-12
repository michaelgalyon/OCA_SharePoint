import { SPHttpClient } from '@microsoft/sp-http';

export interface IHRItemsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}