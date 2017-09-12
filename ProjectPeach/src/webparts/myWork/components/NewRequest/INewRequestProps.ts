import { SPHttpClient } from '@microsoft/sp-http';

export interface INewRequestProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}