import hotGif from '../assets/hot.gif';


interface PackageCardProps {
  price: number;
  discount?: string;
  costPerUnit: number;
  isHot?: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ price, costPerUnit, isHot = false, isSelected = false, onClick, discount }) => {


  const cardClass = `
    relative rounded-lg shadow-sm flex flex-col items-start justify-center text-left p-3
    cursor-pointer transition-all duration-300 border-1
    ${isSelected
      ? "bg-gradient-to-b from-[#FFE8A5] to-[#FFFFFF] border-[#C59354] "
      : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
    }
  `;


  return (
    <div className="relative">
      {isHot && (
        <div className="absolute -top-2 -right-2 z-10">

          <img src={hotGif} alt="Hot Icon" className="w-6 h-6" />


        </div>
      )}

      <div onClick={onClick} className={cardClass}>
        <div className="w-full">
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">
            {costPerUnit.toLocaleString()}/ບິນ
          </div>
        </div>


        <div className="absolute top-2 right-5 text-xs text-red-500" style={{ textDecoration: 'line-through' }}>
          {discount}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

