import { useQuery } from "@apollo/client";
import SearchMenu from "@/components/search/SearchMenu";
import Slider from "./partials/Slider";
import SectionRepair from "./partials/SectionRepair";
import FeaturesCards from "@/components/cards/FeaturesCards";
import Title from "@/shared/Title";
import { GET_ALL_QUERIES } from "@/graphql/queries/car.queries";
import { ICar } from "shared";
import Loading from "@/components/Loading";
import Sidebar from "./partials/Sidebar";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const variables = {
    query,
  };

  const { data, loading } = useQuery(GET_ALL_QUERIES, { variables });

  if (loading) {
    return <Loading fullScreen={true} size={60} />;
  }

  return (
    <div className="w-full select-none">
      {/* HERO */}
      <Slider />
      {/* SEARCH MENU */}
      <div className="relative">
        <SearchMenu />
      </div>
      {/* SECTION REPAIR */}
      <SectionRepair />
      {/* SECTION CARD */}
      <div className="container mx-auto min-h-screen ">
        <Title title="Car's" />
        <div className="flex gap-4">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            {data?.getAllCars?.car?.map((cars: ICar) => (
              <FeaturesCards cars={cars} key={cars?.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
