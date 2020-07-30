export interface Frontend {
  TITLE: string;
  POLLING_TIMEOUT: number;
  PAGE_SIZE: number;
  BASIC_ROUTES: {
    LANDING: string;
    LOGIN: string;
    HOME: string;
  };
}
