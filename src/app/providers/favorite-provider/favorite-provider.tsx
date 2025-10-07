"use client";

import { RacketType } from "@/shared/lib/types";
import { createContext, PropsWithChildren, useCallback, useState } from "react";

type SetFavoriteParams = {
  id: RacketType["id"];
  isFavorite: boolean;
};

interface FavoriteContextType {
  favorites: Record<RacketType["id"], boolean>;
  setFavorite: (params: SetFavoriteParams) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: {},
  setFavorite: () => {},
});

export const FavoriteProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<FavoriteContextType["favorites"]>(
    []
  );

  const setFavorite = useCallback(({ id, isFavorite }: SetFavoriteParams) => {
    setFavorites((prev) => {
      if (prev[id] === isFavorite) {
        return prev;
      }

      return {
        ...prev,
        [id]: isFavorite,
      };
    });
  }, []);

  return (
    <FavoriteContext value={{ favorites, setFavorite }}>
      {children}
    </FavoriteContext>
  );
};
