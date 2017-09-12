import { IListItem } from './IListItem';

export interface INewsCrawlState {
  status?: string;
  items?: IListItem[];
  error?: boolean;
}