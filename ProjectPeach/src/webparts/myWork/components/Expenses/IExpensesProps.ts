import { SPHttpClient } from '@microsoft/sp-http';

export interface IExpensesProps {
  listName: string;
  spHttpClient: SPHttpClient;
  siteUrl: string;
  domElement: HTMLElement;
}