import { IListItem } from './IListItem';

export interface ISocialCollabsState {
  status?: string;
  items?: IListItem[];
  showModal?: boolean;
  modalTitle?: string;
  modalBody?: string;
  error?: boolean;
}