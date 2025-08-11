import { useState, useEffect } from "react";
import BottomSheet from "./bottomsheet";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { formatLaoKip } from '../../utils/format_number'

interface PaymentComponentProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPackage: {
        price: number;
        costPerUnit: number;
        Discount: string;
        isHot: boolean;
    } | null;
    selectedItem: {
        title: string;
        price: number;
        badge: string;
        status: string;
        date: string;
    } | null;
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ isOpen, onClose, selectedPackage, selectedItem }) => {
    const defaultLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtL4NI_DFWjnOZDO_ILGI8bUEDsfVn6t6TaQ&s";
    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<number | null>(() => {
        const savedMethod = localStorage.getItem("selectedMethod");
        return savedMethod ? Number(savedMethod) : null;
    });
    const [selectedLogo, setSelectedLogo] = useState<string>(() => {
        const savedLogo = localStorage.getItem("selectedLogo");
        return savedLogo || defaultLogo;
    });

    useEffect(() => {
        if (selectedMethod !== null) {
            localStorage.setItem("selectedMethod", selectedMethod.toString());
        }
        localStorage.setItem("selectedLogo", selectedLogo);
    }, [selectedMethod, selectedLogo]);

    const toggleExpanded = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering parent div's onClick
        setIsExpanded(!isExpanded);
    };

    const paymentMethods = [
        {
            id: 1,
            name: "BCEL",
            logo: "https://bcel.la:8083/img/logo.png",
            discount: "15%",
            bgColor: "from-blue-400 to-blue-600",
            available: true
        },
        {
            id: 2,
            name: "JDB Bank",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtL4NI_DFWjnOZDO_ILGI8bUEDsfVn6t6TaQ&s",
            discount: "",
            bgColor: "from-green-400 to-green-600",
            available: true
        },
        {
            id: 3,
            name: "LDB Bank",
            logo: "https://www.ldblao.la/ldb2021-01-01.png",
            discount: "",
            bgColor: "from-purple-400 to-purple-600",
            available: true
        },
        {
            id: 4,
            name: "LPB Bank",
            logo: "https://stmt.apblao.com:8002/static/media/apb-logo.10263cc3b2608adb0fa1.png",
            discount: "",
            bgColor: "from-purple-400 to-purple-600",
            available: true
        },
        {
            id: 5,
            name: "TH Bank",
            logo: "https://stmt.apblao.com:8002/static/media/apb-logo.10263cc3b2608adb0fa1.png",
            discount: "",
            bgColor: "from-purple-400 to-purple-600",
            available: false
        },
    ];

    const handleSelectMethod = (method: { id: number; logo: string; name: string; discount: string; bgColor: string; available: boolean }) => {
        if (method.available) {
            setSelectedMethod(method.id);
            setSelectedLogo(method.logo);
            setIsExpanded(false);
            navigate('/bill', { state: { selectedPaymentMethod: method } });
        }
    };

    const handleHeaderClick = () => {

        const method = paymentMethods.find(m => m.id === selectedMethod && m.available) || paymentMethods.find(m => m.available);
        if (method) {
            setSelectedMethod(method.id);
            setSelectedLogo(method.logo);
            navigate('/bill', { state: { selectedPaymentMethod: method } });
        }
    };

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <div className="p-4 relative w-full bg-[#EDEEF0] h-[95vh]">
                <div className="relative w-full bg-white rounded-2xl p-6 ">
                    <div className="absolute rounded-bl-2xl rounded-tr-2xl top-0 right-0 bg-red-400 text-white px-4 py-1 text-lg font-semibold">
                        +15%
                    </div>
                    <h2 className="text-1xl font-bold text-gray-800 mb-6">ແພັກເກັດ {selectedItem?.title} </h2>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700 text-1xl">ສຸ່ມມົ້ວເລກ 2 ໂຕ</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700 text-1xl">ຈໍານວນ 5 ງວດ: 082-086 </span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700 text-1xl">ໄລຍະເວລາ 1 ອາທິດ</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700 text-1xl">ງວດລະ 1,000/ບິນ</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-gray-700 text-1xl">ຮັບເງິນເພີ່ມໃນບັດສະມາຊິກ + 750 </span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-tr from-[#FDD247] to-[#FDE5B7] p-2 text-center ">
                        <div className="text-1xl font-bold text-gray-800">
                            {selectedPackage && (
                                <div className="col-span-2 flex items-center justify-center gap-2 text-2xl">
                                    {selectedPackage.price ? formatLaoKip(selectedPackage.price) : ''}
                                    <p className="text-sm ">/ 1 {selectedItem?.date}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-2 mt-3 bg-white rounded-lg ">
                    <div
                        className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={() => setIsChecked(!isChecked)}
                    >
                        <div className={`
                            w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-200
                            ${isChecked
                                ? 'bg-yellow-400 border-2 border-yellow-400'
                                : 'bg-white border-2 border-gray-300 hover:border-gray-400'
                            }
                        `}>
                            {isChecked && (
                                <svg
                                    className="w-5 h-5 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>
                        <span className="text-gray-800 text-lg select-none">
                            ຕໍ່ແພັກເກັດແບບອັດຕະໂນມັດ
                        </span>
                    </div>
                </div>
                <div className="p-2 rounded-lg ">
                    <div className="flex items-center">
                        <div className="w-1 h-8 bg-yellow-400 rounded-full mr-4"></div>
                        <span className="text-gray-800 text-lg font-medium">
                            ຊຳລະຜ່ານແອັບທະນາຄານ
                        </span>
                    </div>
                </div>
                <div className="relative bg-white rounded-lg overflow-hidden">
                    <div className="cursor-pointer hover:shadow-2xl transition-shadow" onClick={handleHeaderClick}>
                        <div className="absolute top-0 left-0 w-0 h-0 border-l-[80px] border-l-red-400 border-b-[80px] border-b-transparent">
                            <span className="absolute top-2 left-[-70px] text-white text-lg font-bold transform ">
                                15%
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-2 pl-24">
                            <div className="flex items-center">
                                <img
                                    src={selectedLogo}
                                    alt="Selected Logo"
                                    style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                                />
                            </div>
                            <div className="border-l border-gray-300 pl-2">
                                <div className="bg-[#EDEEF0] rounded-md" onClick={toggleExpanded}>
                                    <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                        <svg className="w-10 h-12 text-gray-600" fill="currentColor" viewBox="0 0 15 15">
                                            <IoMdArrowDropdown />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-2 pt-0 bg-gray-50 border-t border-gray-200">
                            <div className="grid gap-2 p-4 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {paymentMethods.filter(method => method.available).map((method) => (
                                    <div
                                        key={method.id}
                                        className={`
                                            relative bg-white rounded-xl p-2 shadow-lg transition-all duration-200
                                            ${method.available ? 'cursor-pointer hover:shadow-md hover:scale-[1.02]' : 'opacity-50 cursor-not-allowed'}
                                            ${selectedMethod === method.id ? 'border-1 border-[#FECF07]' : 'border-1 border-transparent'}
                                        `}
                                        onClick={() => handleSelectMethod(method)}
                                    >
                                        {method.available && method.discount && method.discount.includes('%') && (
                                            <div
                                                className="absolute top-0 right-0 bg-[#F15C5C] text-white rounded-full text-xs font-semibold z-5"
                                                style={{ transform: 'translate(10%, -50%)', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                {method.discount}
                                            </div>
                                        )}
                                        <div>
                                            <img
                                                src={method.logo}
                                                alt={method.name}
                                                className="w-5 h-5"
                                                style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BottomSheet>
    );
};

export default PaymentComponent;