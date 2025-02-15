import SearchMenu from "@/components/search/SearchMenu";
import Slider from "./partials/Slider";

const HomePage = () => {
  return (
    <div className="w-full relative  select-none">
      {/* HERO */}
      <Slider />
      {/* SEARCH MENU */}
      <SearchMenu/>
    </div>
  );
};

export default HomePage;
