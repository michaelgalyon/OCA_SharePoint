import { IListItem } from './IListItem';

export interface INewRequestState {
  status?: string;
  items?: IListItem[];
  showModal?: boolean;
  modalTitle?: string;
  modalBody?: string;
  error?: boolean;
}