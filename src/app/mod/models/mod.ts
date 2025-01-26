export interface Mod {
  id: number;
  name: string;
  description: string;
  isFree: boolean;
  modType: ModType;
}

export interface ModType {
  key: number;
  value: string;
}
