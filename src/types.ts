export interface Photo {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}
