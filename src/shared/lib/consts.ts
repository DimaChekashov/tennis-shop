export const CURRENT_YEAR = new Date().getFullYear();

export const BRANDS_ALL = "All";

export const ROUTES = {
  home: "/",
  racket: (id: number) => `/racket/${id}`,
  rackets: "/rackets",
  topTen: "/top-ten",
};
