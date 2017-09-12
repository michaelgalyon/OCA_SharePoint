import { IListItem } from './IListItem';

export interface IMyRequestsState {
  status?: string;
  items?: IListItem[];
  showModal?: boolean;
  modalTitle?: string;
  modalBody?: string;
  error?: boolean;
}