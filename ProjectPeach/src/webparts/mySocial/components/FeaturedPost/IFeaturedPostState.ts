import { IListItem } from './IListItem';

export interface IFeaturedPostState {
  status?: string;
  items?: IListItem[];
  showModal?: boolean;
  modalTitle?: string;
  modalBody?: string;
  error?: boolean;
}