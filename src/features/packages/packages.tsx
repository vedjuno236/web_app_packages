import { useEffect, useState } from "react";
import PackagesCard from "../../components/packages_buy_lottery/packages_card.tsx";
import MyPackages from "../my_packages/my_packages.tsx";
import BottomSheet from "../../components/bottonsheet/bottomsheet.tsx";
import PackageCard from "../../components/package_cardprops/package_cardprops.tsx";
import Appbar from "../../components/appbar/appbar.tsx";
import PaymentComponent from "../../components/payment/payment_componen.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatLaoKip } from "../../../utils/format_number.tsx";
import { AnimatePresence, motion } from "framer-motion";
import MotionButtonSheet from "../../components/animation/motion_buttone_sheet.tsx";
import MotionWrapper from "../../components/animation/motion_wrapper.tsx";


interface MockPackage {
  title: string;
  price: number;
  badge: string;
  status: string;
  date: string;
}

interface PackageOption {
  price: number;
  costPerUnit: number;
  Discount: string;
  isHot: boolean;
}


const mockData: MockPackage[] = [
  { title: "Gold", price: 50000, badge: "Most Popular", status: "Gold", date: "ອາທິດ" },
  { title: "Silver", price: 300000, badge: "Most Popular", status: "Silver", date: "ເດືອນ" },
  { title: "Diamond", price: 500000, badge: "Most Popular", status: "Diamond", date: "ປີ" },
];

const packages: PackageOption[] = [
  { price: 5000, costPerUnit: 1000, Discount: "", isHot: false },
  { price: 10000, costPerUnit: 2000, Discount: "", isHot: false },
  { price: 15000, costPerUnit: 3000, Discount: "", isHot: false },
  { price: 20000, costPerUnit: 5000, Discount: "125,000", isHot: false },
  { price: 25000, costPerUnit: 5000, Discount: "15,000", isHot: true },
  { price: 50000, costPerUnit: 12000, Discount: "12,000", isHot: false },
];


const useCountdown = (initialHours: number, initialMinutes: number, initialSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState({ hours: initialHours, minutes: initialMinutes, seconds: initialSeconds });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};


const Packages = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ແພັກເກັດຊື້ຫວຍ");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageOption | null>(null);
  const [selectedItem, setSelectedItem] = useState<MockPackage | null>(null);
  const [shouldOpenPayment, setShouldOpenPayment] = useState(false);

  const timeLeft = useCountdown(5, 32, 34);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
    setSelectedPackage(packages[index]);
    toast.dismiss();
  };

  const handleOpenBottomSheet = (item: MockPackage) => {
    setSelectedItem(item);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  useEffect(() => {
    if (!isBottomSheetOpen && shouldOpenPayment) {
      setIsPaymentOpen(true);
      setShouldOpenPayment(false);
    }
  }, [isBottomSheetOpen, shouldOpenPayment]);

  const formatTime = (time: number): string => time.toString().padStart(2, "0");

  return (
    <div className="relative" >
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
      <div className={`transition-all duration-300 ${isBottomSheetOpen ? "blur-xs" : ""}`}>
        <Appbar />


        <div className="flex bg-white shadow-md">
          {["ແພັກເກັດຊື້ຫວຍ", "ແພັກເກັດຂອງຂ້ອຍ"].map(tab => (
            <button
              key={tab}
              className={`flex-1 py-3 px-4 text-lg font-medium ${activeTab === tab ? "bg-white border-b-2 border-yellow-400 text-gray-900" : "text-gray-500"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">

          {activeTab === "ແພັກເກັດຊື້ຫວຍ" && (
            <MotionWrapper motionKey="buy-lottery">

              <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockData.map((item, index) => (
                  <PackagesCard
                    key={index}
                    title={item.title}
                    price={formatLaoKip(item.price)}
                    badge={item.badge}
                    status={item.status}
                    date={item.date}
                    position="-15%"
                    onClick={() => handleOpenBottomSheet(item)}
                  />
                ))}
              </div>


              <div className="px-4 pb-6 text-center">
                <p className="text-gray-600 text-sm mb-4">Offer ends in</p>
                <div className="flex justify-center gap-6">
                  {["Hours", "Minutes", "Seconds"].map((label, i) => {
                    const value = [timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
                    return (
                      <div key={label}>
                        <div className="text-2xl font-bold text-gray-900">{formatTime(value)}</div>
                        <div className="text-xs text-gray-500 uppercase">{label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </MotionWrapper>
          )}

          {activeTab === "ແພັກເກັດຂອງຂ້ອຍ" && (
            <motion.div
              key="my-packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#F8F9FA] min-h-screen w-full flex justify-center">
                <div className="flex flex-col gap-7 p-2 w-full max-w-5xl">
                  <MyPackages />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <AnimatePresence mode="wait">
        {isBottomSheetOpen && (
          <MotionButtonSheet
            motionKey="buy-lottery"
          >
            <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
              <div className="p-4">
                <p className="text-1xl">ກະລຸນາກົດເລືອກວົງເງິນທີ່ທ່ານຕ້ອງການ/ອາທິດ</p>


                <div className="grid gap-6 p-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {packages.map((pkg, index) => (
                    <PackageCard
                      key={index}
                      price={pkg.price}
                      discount={pkg.Discount}
                      costPerUnit={pkg.costPerUnit}
                      isHot={pkg.isHot}
                      isSelected={selectedIndex === index}
                      onClick={() => handleCardClick(index)}
                    />
                  ))}
                </div>

                <div className="mt-4">
                  <div className="text-center text-gray-600 text-sm">
                    Offer ends in {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
                  </div>
                  <button
                    className={`w-full py-3 mt-3 rounded-lg transition-colors ${selectedIndex === null
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#FDDD7A] text-gray-600"
                      }`}
                    onClick={() => {
                      if (selectedIndex === null) {
                        toast.error("ກະລຸນາເລືອກແພັກເກັດກ່ອນ", {
                          position: "top-center",
                          style: { fontFamily: "Noto Sans Lao, sans-serif" },
                        });
                        return;
                      }
                      setShouldOpenPayment(true);
                      handleCloseBottomSheet();
                    }}
                  >
                    Get Naga Gold
                  </button>
                </div>
              </div>
            </BottomSheet>
          </MotionButtonSheet>
        )}
      </AnimatePresence>


      <PaymentComponent
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        selectedPackage={selectedPackage}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Packages;
