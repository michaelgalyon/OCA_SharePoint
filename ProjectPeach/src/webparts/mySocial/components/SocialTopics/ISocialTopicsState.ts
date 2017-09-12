import { IListItem } from './IListItem';

export interface ISocialTopicsState {
  status?: string;
  items?: IListItem[];
  showModal?: boolean;
  modalTitle?: string;
  modalBody?: string;
  error?: boolean;
}