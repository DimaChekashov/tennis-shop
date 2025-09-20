import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 items-center border-border border-b-1 p-6">
        <div className="text-2xl text-center col-start-2">TENNIS STORE</div>
        <Navigation />
      </div>
    </header>
  );
};
