import { SPHttpClient } from '@microsoft/sp-http';

export interface IRecentDocsProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}