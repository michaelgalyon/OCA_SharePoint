import { SPHttpClient } from '@microsoft/sp-http';

export interface IAnnouncementsProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}