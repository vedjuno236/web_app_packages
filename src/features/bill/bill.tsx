import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/naga_logo.png';
import { Watermark } from 'antd';
import '../../features/bill/bill.css'

const mockData = {
    fields: [
        { label: "Package", value: "Gold" },
        { label: "Duration", value: "5 Draws" },
        { label: "Start draw", value: "081" },
        { label: "End draw", value: "085" },
        { label: "Total amount", value: "5,000" },
        { label: "Status", value: "successful", valueClass: "text-green-600" },
        { label: "Date/Time", value: "22-10-2024 15:30" },
        { label: "BillNo", value: "123456789XXXXXX" },
        { label: "REF", value: "001LNMT6928237149" },
    ],
    selectedPaymentMethod: {
        logo: "https://bcel.la:8083/img/logo.png",
        name: "Visa",
    },
};

const Bill: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className=''>
            <Watermark
                content="250,000"
                gap={[30, 10]}
                font={{ color: '#8888881A' }}
                rotate={-40}
            >
                <div className='min-h-screen  bg-[#E7E7E9] items-center justify-center p-4 pt-10'>
                    <div className="paper"
                    >

                        <div
                            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-3 pointer-events-none"
                            style={{ backgroundImage: `url(${logo})`, backgroundSize: '480px' }}
                        ></div>

                        <div className="absolute -top-8 z-10 left-1/2 transform -translate-x-1/2 ">
                            <div className="w-16 h-16 bg-[#22B07D] rounded-3xl flex items-center justify-center shadow-lg">
                                <div className="w-8 h-8 rounded-full border-4 border-white flex items-center justify-center bg-white">
                                    <Check className="w-8 h-8 text-green-500 stroke-[3]" />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-green-600 text-center mb-3 pt-4">
                            Payment successful!
                        </h1>

                        <p className="text-gray-600 text-center mb-5">
                            Your lottery package has been activated. Good luck!
                        </p>

                        <div className="space-y-2 mb-1 mt-3 pt-3 border-t border-dashed border-gray-300">
                            {mockData.fields.map((field, index) => (
                                <div key={index} className="flex justify-between items-center py-1">
                                    <span className="text-gray-700 font-medium">{field.label}:</span>
                                    <span className={`font-semibold ${field.valueClass || "text-gray-900"}`}>
                                        {field.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center pt-1">
                            <span className="text-gray-700 font-medium">Payment Channel:</span>
                            {mockData.selectedPaymentMethod && (
                                <div>
                                    <img
                                        src={mockData.selectedPaymentMethod.logo}
                                        alt={mockData.selectedPaymentMethod.name}
                                        className="w-7 h-7 rounded-full"
                                    />
                                </div>
                            )}
                        </div>
                    </div>


                    <button
                        className="w-full mt-6 py-3 bg-[#FDD154] text-black rounded-lg  transition-colors duration-200 relative z-10"
                        onClick={() => navigate('/')}
                    >
                        ສຳເລັດແລ້ວ!
                    </button>
                </div>
            </Watermark >
        </div >
    );
};

export default Bill;
