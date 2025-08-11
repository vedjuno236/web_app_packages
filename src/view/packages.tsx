import { useEffect, useState } from "react";
import PackagesCard from "../components/packages_buy_lottery/packages_card.tsx";
import MyPackages from "../my_packages/my_packages.tsx";
import BottomSheet from "../components/bottomsheet.tsx";
import PackageCard from "../components/package_cardprops.tsx";
import Appbar from "../components/appbar.tsx";
import PaymentComponent from "../components/payment_componen.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatLaoKip } from "../../utils/format_number.tsx";

const mockData = [
  { title: "Gold", price: 50000, badge: "Most Popular", status: "Gold", date: 'ອາທິດ' },
  { title: "Silver", price: 300000, badge: "Most Popular", status: "Silver", date: 'ເດືອນ' },
  { title: "Diamond", price: 500000, badge: "Most Popular", status: "Diamond", date: 'ປີ' },
];

const packages = [
  { price: 5000, costPerUnit: 1000, Discount: "", isHot: false },
  { price: 10000, costPerUnit: 2000, Discount: "", isHot: false },
  { price: 15000, costPerUnit: 3000, Discount: "", isHot: false },
  { price: 20000, costPerUnit: 5000, Discount: "125,000", isHot: false },
  { price: 25000, costPerUnit: 5000, Discount: "15,000", isHot: true },
  { price: 50000, costPerUnit: 12000, Discount: "12,000", isHot: false },
];

const Packages = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ແພັກເກັດຊື້ຫວຍ");
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 34 });
  const [selectedPackage, setSelectedPackage] = useState<{
    price: number;
    costPerUnit: number;
    Discount: string;
    isHot: boolean;
  } | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof mockData[0] | null>(null);
  const [shouldOpenPayment, setShouldOpenPayment] = useState(false);

  const handleCardClick = (index: number, item: typeof mockData[0] | null) => {
    setSelectedIndex(index);
    setSelectedPackage(packages[index]);
    toast.dismiss();
  };;
  const handleOpenBottomSheet = (item: typeof mockData[0]) => {
    setSelectedItem(item);
    setIsBottomSheetOpen(true);
  };
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };



  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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

  useEffect(() => {
    if (!isBottomSheetOpen && shouldOpenPayment) {
      setIsPaymentOpen(true);
      setShouldOpenPayment(false);
    }
  }, [isBottomSheetOpen, shouldOpenPayment]);







  const formatTime = (time: number): string => time.toString().padStart(2, "0");

  return (
    <div className="relative">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
      <div className={`transition-all duration-300 ${isBottomSheetOpen ? "blur-xs" : ""}`}>
        <Appbar />
        <div className="flex bg-white shadow-md">
          <button
            className={`flex-1 py-3 px-4 text-lg font-medium ${activeTab === "ແພັກເກັດຊື້ຫວຍ"
              ? "bg-white border-b-2 border-yellow-400 text-gray-900"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("ແພັກເກັດຊື້ຫວຍ")}
          >
            ແພັກເກັດຊື້ຫວຍ
          </button>
          <button
            className={`flex-1 py-3 px-4 text-lg font-medium ${activeTab === "ແພັກເກັດຂອງຂ້ອຍ"
              ? "bg-white border-b-2 border-yellow-400 text-gray-900"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("ແພັກເກັດຂອງຂ້ອຍ")}
          >
            ແພັກເກັດຂອງຂ້ອຍ
          </button>
        </div>

        {activeTab === "ແພັກເກັດຊື້ຫວຍ" && (
          <div>
            <div className="    grid gap-6 p-4
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
  ">
              {mockData.map((item, index) => (
                <PackagesCard
                  key={index}
                  title={item.title}
                  price={formatLaoKip(item.price)}
                  badge={item.badge}
                  status={item.status}
                  date={item.date}
                  position="-15%"
                  onClick={() => handleOpenBottomSheet(item)

                  }
                />
              ))}
            </div>
            <div className="px-4 pb-6">
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm">Offer ends in</p>
              </div>
              <div className="flex justify-center gap-6">
                {["Hours", "Minutes", "Seconds"].map((label, i) => {
                  const value = [timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
                  return (
                    <div className="text-center" key={label}>
                      <div className="text-2xl font-bold text-gray-900">{formatTime(value)}</div>
                      <div className="text-xs text-gray-500 uppercase">{label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "ແພັກເກັດຂອງຂ້ອຍ" && (
          <div className="bg-[#F8F9FA] min-h-screen w-full flex justify-center">
            <div className="flex flex-col gap-7 p-2 w-full max-w-5xl">
              <MyPackages />
            </div>
          </div>
        )}
      </div>

      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <div className="p-4">
          <p className="text-xs">ກະລຸນາກົດເລືອກວົງເງິນທີ່ທ່ານຕ້ອງການ/ອາທິດ</p>
          {/* {selectedItem && (
            <div className="mb-4">
              <h2 className="text-lg font-bold">{selectedItem.title}</h2>
              <p>Price: {formatLaoKip(selectedItem.price)}</p>
              <p>Status: {selectedItem.status}</p>
              <p>Date: {selectedItem.date}</p>
            </div>
          )} */}
          <div className="    grid gap-6 p-4
    grid-cols-2
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-5
  ">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                price={pkg.price}
                discount={pkg.Discount}
                costPerUnit={pkg.costPerUnit}
                isHot={pkg.isHot}
                isSelected={selectedIndex === index}
                onClick={() => handleCardClick(index, selectedItem)}
              />
            ))}
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Offer ends in {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
            </p>
          </div>

          <div className="mt-3 pt-2 border-dashed rounded-xl border-gray-300">
            <button

              className={`w-full py-2 rounded-lg transition-colors duration-200
                   ${selectedIndex === null || selectedIndex === undefined
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#FDDD7A] text-gray-600"
                }`}
              onClick={() => {
                if (selectedIndex === null || selectedIndex === undefined) {
                  toast.error("ກະລຸນາເລືອກແພັກເກັດກ່ອນ", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    style: { fontFamily: "Noto Sans Lao, sans-serif", },
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




// import { useEffect, useState } from "react";
// import { atom, useAtom } from "jotai";
// import { atomWithStorage } from "jotai/utils"; 
// import PackagesCard from "../components/packages_buy_lottery/packages_card.tsx";
// import MyPackages from "../my_packages/my_packages.tsx";
// import BottomSheet from "../components/bottomsheet.tsx";
// import PackageCard from "../components/package_cardprops.tsx";
// import Appbar from "../components/appbar.tsx";
// import PaymentComponent from "../components/payment_componen.tsx";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Mock data
// const mockData = [
//   { title: "Gold", price: "50,000", badge: "Most Popular", status: "Gold", date: "ອາທິດ" },
//   { title: "Silver", price: "300,000", badge: "Most Popular", status: "Silver", date: "ເດືອນ" },
//   { title: "Diamond", price: "500,000", badge: "Most Popular", status: "Diamond", date: "ປີ" },
// ];

// const packages = [
//   { price: 5000, costPerUnit: 1000, Discount: "", isHot: false },
//   { price: 10000, costPerUnit: 2000, Discount: "", isHot: false },
//   { price: 15000, costPerUnit: 3000, Discount: "", isHot: false },
//   { price: 20000, costPerUnit: 5000, Discount: "125,000", isHot: false },
//   { price: 25000, costPerUnit: 5000, Discount: "15,000", isHot: true },
//   { price: 50000, costPerUnit: 12000, Discount: "12,000", isHot: false },
// ];


// const isPaymentOpenAtom = atomWithStorage("isPaymentOpen", false);
// const isBottomSheetOpenAtom = atomWithStorage("isBottomSheetOpen", false);
// const activeTabAtom = atomWithStorage("activeTab", "ແພັກເກັດຊື້ຫວຍ");

// const Packages = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 34 });
//   const [selectedPackage, setSelectedPackage] = useState<{
//     price: number;
//     costPerUnit: number;
//     Discount: string;
//     isHot: boolean;
//   } | null>(null);
//   const [shouldOpenPayment, setShouldOpenPayment] = useState(false);


//   const [isPaymentOpen, setIsPaymentOpen] = useAtom(isPaymentOpenAtom);
//   const [isBottomSheetOpen, setIsBottomSheetOpen] = useAtom(isBottomSheetOpenAtom);
//   const [activeTab, setActiveTab] = useAtom(activeTabAtom);

//   const handleCardClick = (index: number) => {
//     setSelectedIndex(index);
//     setSelectedPackage(packages[index]);
//     toast.dismiss();
//   };

//   const handleOpenBottomSheet = () => {
//     setIsBottomSheetOpen(true);
//   };

//   const handleCloseBottomSheet = () => {
//     setIsBottomSheetOpen(false);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { hours, minutes, seconds } = prev;

//         if (seconds > 0) {
//           seconds--;
//         } else if (minutes > 0) {
//           minutes--;
//           seconds = 59;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//           seconds = 59;
//         }

//         return { hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (!isBottomSheetOpen && shouldOpenPayment) {
//       setIsPaymentOpen(true);
//       setShouldOpenPayment(false);
//     }
//   }, [isBottomSheetOpen, shouldOpenPayment, setIsPaymentOpen]);

//   const formatTime = (time: number): string => time.toString().padStart(2, "0");

//   return (
//     <div className="relative">
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
//       <div className={`transition-all duration-300 ${isBottomSheetOpen ? "blur-xs" : ""}`}>
//         <Appbar />
//         <div className="flex bg-white shadow-md">
//           <button
//             className={`flex-1 py-3 px-4 text-lg font-medium ${activeTab === "ແພັກເກັດຊື້ຫວຍ"
//                 ? "bg-white border-b-2 border-yellow-400 text-gray-900"
//                 : "text-gray-500"
//               }`}
//             onClick={() => setActiveTab("ແພັກເກັດຊື້ຫວຍ")}
//           >
//             ແພັກເກັດຊື້ຫວຍ
//           </button>
//           <button
//             className={`flex-1 py-3 px-4 text-lg font-medium ${activeTab === "ແພັກເກັດຂອງຂ້ອຍ"
//                 ? "bg-white border-b-2 border-yellow-400 text-gray-900"
//                 : "text-gray-500"
//               }`}
//             onClick={() => setActiveTab("ແພັກເກັດຂອງຂ້ອຍ")}
//           >
//             ແພັກເກັດຂອງຂ້ອຍ
//           </button>
//         </div>

//         {activeTab === "ແພັກເກັດຊື້ຫວຍ" && (
//           <div>
//             <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {mockData.map((item, index) => (
//                 <PackagesCard
//                   key={index}
//                   title={item.title}
//                   price={item.price}
//                   badge={item.badge}
//                   status={item.status}
//                   date={item.date}
//                   position="-15%"
//                   onClick={handleOpenBottomSheet}
//                 />
//               ))}
//             </div>
//             <div className="px-4 pb-6">
//               <div className="text-center mb-4">
//                 <p className="text-gray-600 text-sm">Offer ends in</p>
//               </div>
//               <div className="flex justify-center gap-6">
//                 {["Hours", "Minutes", "Seconds"].map((label, i) => {
//                   const value = [timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
//                   return (
//                     <div className="text-center" key={label}>
//                       <div className="text-2xl font-bold text-gray-900">{formatTime(value)}</div>
//                       <div className="text-xs text-gray-500 uppercase">{label}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "ແພັກເກັດຂອງຂ້ອຍ" && (
//           <div className="bg-[#F8F9FA] min-h-screen w-full flex justify-center">
//             <div className="flex flex-col gap-7 p-2 w-full max-w-5xl">
//               <MyPackages />
//             </div>
//           </div>
//         )}
//       </div>

//       <BottomSheet isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
//         <div className="p-4">
//           <p className="text-xs">ກະລຸນາກົດເລືອກວົງເງິນທີ່ທ່ານຕ້ອງການ/ອາທິດ</p>
//           <div className="grid gap-6 p-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//             {packages.map((pkg, index) => (
//               <PackageCard
//                 key={index}
//                 price={pkg.price}
//                 discount={pkg.Discount}
//                 costPerUnit={pkg.costPerUnit}
//                 isHot={pkg.isHot}
//                 isSelected={selectedIndex === index}
//                 onClick={() => handleCardClick(index)}
//               />
//             ))}
//           </div>

//           <div className="text-center mt-4">
//             <p className="text-gray-600 text-sm">
//               Offer ends in {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
//             </p>
//           </div>

//           <div className="mt-3 pt-2 border-dashed rounded-xl border-gray-300">
//             <button
//               className="w-full py-2 bg-[#FDDD7A] text-gray-600 rounded-lg transition-colors duration-200"
//               onClick={() => {
//                 if (selectedIndex === null || selectedIndex === undefined) {
//                   toast.error("ກະລຸນາເລືອກແພັກເກັດກ່ອນ", {
//                     position: "top-center",
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     style: { fontFamily: "Noto Sans Lao, sans-serif" },
//                   });
//                   return;
//                 }
//                 setShouldOpenPayment(true);
//                 handleCloseBottomSheet();
//               }}
//             >
//               Get Naga Gold
//             </button>
//           </div>
//         </div>
//       </BottomSheet>

//       <PaymentComponent
//         isOpen={isPaymentOpen}
//         onClose={() => setIsPaymentOpen(false)}
//         selectedPackage={selectedPackage}
//       />
//     </div>
//   );
// };

// export default Packages;

