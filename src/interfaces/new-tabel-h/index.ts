import { GetQueryInterface } from 'interfaces';

export interface NewTabelHInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NewTabelHGetQueryInterface extends GetQueryInterface {
  id?: string;
}
