import { IListItem } from './IListItem';

export interface IHRItemsState {
  status?: string;
  items?: IListItem[];
  showModal?: boolean;
  modalTitle?: string;
  modalBody?: string;
  error?: boolean;
}