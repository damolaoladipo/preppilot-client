export interface IStorage {
  keepData(key: string, data: object | string): void;
  fetchData(key: string): string | null;
  getJSON(key: string): Promise<string | null>;
  exists(key: string): Promise<boolean>;
  updateData(key: string, newData: object | string): Promise<void>;
  //mergeData(key: string, newData: object): Promise<void>;
  removeData(key: string): Promise<void>;
  clearAll(): Promise<void>;
  multiKeep(items: { key: string; data: object | string }[]): Promise<void>;
  multiFetch(keys: string[]): Promise<{ [key: string]: string | null }>;
  multiRemove(keys: string[]): Promise<void>;
}

export interface IModal {
  title: string,
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  hiddenHeader?: boolean;
}

export interface ILogin {
  setCurrentPage?: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISignup {
  setCurrentPage?: React.Dispatch<React.SetStateAction<string>>;
}
