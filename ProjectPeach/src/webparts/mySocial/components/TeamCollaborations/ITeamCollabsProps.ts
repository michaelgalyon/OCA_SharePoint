import { SPHttpClient } from '@microsoft/sp-http';

export interface ITeamCollabsProps {
  spHttpClient: SPHttpClient;
  domElement: HTMLElement;
}