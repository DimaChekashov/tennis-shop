export const CURRENT_YEAR = new Date().getFullYear();

export const BRANDS_ALL = "All";

const ROOT_ROUTES = {
  rackets: "/rackets",
} as const;

export const ROUTES = {
  home: "/",
  racket: (id: number) => `/racket/${id}`,
  rackets: ROOT_ROUTES.rackets,
  topTen: `${ROOT_ROUTES.rackets}/top-ten`,
} as const;
