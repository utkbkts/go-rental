import img from "/welcome-hero/welcome-banner.jpg";
import { FaLightbulb, FaChartLine, FaUsers, FaCogs } from "react-icons/fa"; // İkonları import ediyoruz

const sectionData = [
  {
    id: 1,
    title: "Results Driven",
    description:
      "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium. Totam aperiam, eaque ipsa quae ai.",
    icon: <FaLightbulb />,
  },
  {
    id: 2,
    title: "Proven Technology",
    description:
      "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium. Totam aperiam, eaque ipsa quae ai.",
    icon: <FaChartLine />,

  },
  {
    id: 3,
    title: "Winning Culture",
    description:
      "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium. Totam aperiam, eaque ipsa quae ai.",
    icon: <FaUsers />,

  },
  {
    id: 4,
    title: "Top Performance",
    description:
      "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium. Totam aperiam, eaque ipsa quae ai.",
    icon: <FaCogs />,

  },
];

const SectionInformation = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={img}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#F5F5F5] opacity-40 "></div>
      {/* Content Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto  z-10">
        {sectionData.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-lg shadow-sm hover:scale-102 transition-transform duration-200 flex items-center justify-center flex-col"
          >
            <span className="font-semibold text-[#333333]  text-4xl  mb-4">{item.icon}</span>
            <h2 className="text-xl font-semibold text-[#333333]">
              {item.title}
            </h2>
            <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionInformation;
