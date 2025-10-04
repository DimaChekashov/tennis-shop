import LogoutButton from "@/features/logout";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-1 items-center gap-4 border-border border-b-1 p-6 mb-6 md:grid-cols-3">
        <div className="text-2xl text-center md:col-start-2">TENNIS STORE</div>
        <div className="flex items-center justify-end gap-6">
          <Navigation />
          <LogoutButton />
        </div>
      </div>
    </header>
  );
};
