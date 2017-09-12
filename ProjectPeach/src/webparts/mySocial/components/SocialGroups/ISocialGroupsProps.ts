import { SPHttpClient } from '@microsoft/sp-http';

export interface ISocialGroupsProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}