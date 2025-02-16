import Title from "@/shared/Title";
import Checklist from "/svg/car-1.svg";
import Checklist2 from "/svg/car-2.svg";
import Checklist3 from "/svg/car-3.svg";

const data = [
  {
    icon: <Checklist />,
    title: "Wide Selection of Rental Cars",
    desc: "Choose from a variety of vehicles to suit your needs, from economy to luxury models.",
  },
  {
    icon: <Checklist2 />,
    title: "Affordable Pricing & Discounts",
    desc: "Enjoy competitive rates and special discounts for long-term rentals.",
  },
  {
    icon: <Checklist3 />,
    title: "Comprehensive Insurance Coverage",
    desc: "Drive with peace of mind with our full insurance support and roadside assistance.",
  },
];

const SectionRepair = () => {
  return (
    <div className="w-full container mx-auto mt-72 min-h-screen">
      <Title title="Features" />
      <div className="grid xl:grid-cols-3 md:grid-cols-2  gap-8 place-items-center">
        {data.map((car, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center text-center gap-4 w-[400px] h-[400px] border border-gray-200 shadow-md rounded-md p-2 hover:bg-blue-400 hover:text-white duration-300 transition-all"
          >
            <img src={car.icon.type} alt="images" className="w-20 h-20" />
            <h1>{car.title}</h1>
            <p className="text-gray-400 group-hover:text-white">{car.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionRepair;
