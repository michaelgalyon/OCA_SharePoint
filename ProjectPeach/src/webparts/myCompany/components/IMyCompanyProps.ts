import { SPHttpClient } from '@microsoft/sp-http';

export interface IMyCompanyProps {
  newsLibraryName: string;
  newsSiteUrl: string;
  announcementsListName: string;
  announcementsSiteUrl: string;
  weatherDefaultLocation: string;  
  complianceUrl: string;
  cafeMenuUrl: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
  renderedOnce: boolean;
}
