import { useQuery } from "@apollo/client";
import SearchMenu from "@/components/custom/Search";
import Slider from "./partials/Slider";
import SectionRepair from "./partials/SectionRepair";
import FeaturesCards from "@/components/cards/FeaturesCards";
import Title from "@/shared/Title";
import { GET_ALL_QUERIES } from "@/graphql/queries/car.queries";
import { ICar } from "shared";
import Loading from "@/components/custom/Loading";
import Sidebar from "./partials/Sidebar";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/components/custom/Pagination";
import { useEffect } from "react";
import { toastNotification } from "@/helpers/helpers";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const transmission = searchParams.get("transmission");
  const page = parseInt(searchParams.get("page") || "1", 10);

  const filters = {
    status: "Active",
    ...(category && { category }),
    ...(brand && { brand }),
    ...(transmission && { transmission }),
  };

  const variables = {
    page,
    filters,
    query,
  };

  const { data, loading, error } = useQuery(GET_ALL_QUERIES, { variables });

  useEffect(() => {
    if (error) {
      toastNotification(error);
    }
  }, [error]);

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
        {data?.getAllCars?.pagination?.totalCount >
          data?.getAllCars?.pagination?.resPerPage && (
          <Pagination
            totalCount={data?.getAllCars?.pagination?.totalCount}
            resPerPage={data?.getAllCars?.pagination?.resPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
