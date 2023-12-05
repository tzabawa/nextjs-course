export type Route = {
  displayName: string;
  name?: string;
  subRoutes?: Route[];
  value: string;
};
