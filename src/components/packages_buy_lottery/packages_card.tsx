import { FaStar } from "react-icons/fa";
import loadingGif from '../../assets/git.gif';
import crown from '../../assets/crown.png';

interface PackagesCardProps {
  title: string;
  price: string;
  badge: string;
  status: string;
  position?: string;
  originalPrice?: string;
  date?: string;
  onClick?: () => void;
}

const getGradientClass = (status: string) => {
  switch (status) {
    case "Gold":
      return "from-[#FFE8A5] to-[#FFFFFF]";
    case "Diamond":
      return "from-[#BFDAFF] to-[#FFFFFF]";
    case "Silver":
      return "from-[#DADDE4] to-[#FFFFFF]";
    default:
      return "from-[#FFE8A5] to-[#FFFFFF]";
  }
};

const getBorderClass = (status: string) => {
  switch (status) {
    case "Gold":
      return "border-[#C59354]";
    case "Diamond":
      return "border-[#096EF9]";
    case "Silver":
      return "border-[#DADDE4]";
    default:
      return "border-[#FFE8A5]";
  }
};

const getButtonClass = (status: string) => {
  switch (status) {
    case "Gold":
      return "from-[#E6AF16] to-[#F7D472]";
    case "Diamond":
      return "from-[#BFDAFF] to-[#DDDFE6]";
    case "Silver":
      return "from-[#37474F] to-[#DDDFE6]";
    default:
      return "from-[#FFE8A5] to-[#FFFFFF]";
  }
};

const PackagesCard = ({
  title,
  price,
  badge,
  status,
  position,
  originalPrice,
  date,
  onClick
}: PackagesCardProps) => {
  const gradientClass = getGradientClass(status);
  const borderClass = getBorderClass(status);
  const buttonClass = getButtonClass(status);

  return (
    <div className="relative w-full ">
      {status === "Diamond" && position && (
        <div className="absolute -top-3 -left-3 z-10">
          <div className="w-8 h-8 bg-[#F15C5C] text-white text-[10px] font-semibold flex items-center justify-center rounded-full shadow-md">
            {position}
          </div>

        </div>

      )}
      {status === "Silver" && (
        <div className="absolute -top-2 right-3 z-20">
          <div className="w-10 h-5 bg-[#F15C5C] text-white text-[10px] font-semibold flex items-center justify-center rounded-full shadow-md">
            Hot
          </div>
        </div>
      )}

      {status === "Silver" && (
        <div className="absolute -top-4 right-3 z-20">
          <img src={crown} alt="Hot Icon" className="w-4 h-4" />
        </div>
      )}



      <div
        onClick={onClick}
        className={`relative bg-gradient-to-b ${gradientClass} rounded-2xl p-5 border ${borderClass} overflow-hidden`}
      >
        {status === 'Gold' && (
          <div className="absolute top-4 right-4 text-xl">
            <img src={loadingGif} alt="Loading" className="w-10 h-10 animate-spin" />
          </div>
        )}


        <div className="mb-10 ml-5">
          <h3 className="text-gray-800 font-medium mb-1 text-lg">ແພັກແກັດ {title}</h3>

          {originalPrice && (
            <div className="text-sm text-red-400 line-through mb-1">{originalPrice}</div>
          )}

          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            <span className=" text-gray-700 text-lg">/ {date}</span>
          </div>
        </div>


        <div className={`bg-gradient-to-b ${buttonClass} ${status === "Gold" ? 'text-black' : 'text-white'} py-3 absolute bottom-0 left-0 right-0`}>
          <div className="flex justify-center items-center gap-2">
            <FaStar />
            <span className="text-lg font-medium ">{badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
