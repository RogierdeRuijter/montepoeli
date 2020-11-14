export interface Frontend {
  title: string;
  rollingTimeout: number;
  pageSize: number;
  basicRoutes: {
    landing: string;
    login: string;
    home: string;
  };
}
