

export const ShimmerCard = () => {
    return (
        <div className="relative w-full animate-pulse">
            <div className="relative bg-gray-200 rounded-2xl p-5 border border-gray-300 overflow-hidden">
                <div className="absolute -top-4 right-3 z-20">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <div className="mb-10 ml-5">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-1"></div>
                </div>
                <div className="bg-gray-300 py-3 absolute bottom-0 left-0 right-0">
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
                        <div className="h-4 bg-gray-400 rounded w-1/3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export const ShimmerMoney = () => {
    return (
        <div className="relative animate-pulse">



            <div className="relative rounded-lg shadow-2xs flex flex-col items-start justify-center text-left p-3 border border-gray-200 bg-gray-200">
                <div className="w-full">

                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>

                    <div className="h-2 bg-gray-300 rounded w-1/3"></div>
                </div>

                <div className="absolute top-2 right-5">
                    <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
            </div>
        </div>



    );
};


export const ShimmerButton = () => {
    return (
        <div>
            <div className="flex justify-center mt-4 animate-pulse">
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
            </div>


            <div className="mt-3 pt-2 border-dashed rounded-xl border-gray-300">
                <div className="w-full h-10 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
        </div>
    );


}
export const ShimmerPayment = () => {
    return (
        <div className="p-4 relative w-full bg-[#EDEEF0] h-[95vh] animate-pulse">

            {/* Package Card */}
            <div className="relative w-full bg-white rounded-2xl p-6 mb-4">
                <div className="w-32 h-5 bg-gray-300 rounded mb-6"></div>

                <div className="space-y-4 mb-8">
                    {Array(5).fill(null).map((_, i) => (
                        <div key={i} className="flex items-center">
                            <div className="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
                            <div className="w-40 h-4 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gray-200 p-2 text-center">
                    <div className="w-24 h-5 bg-gray-300 rounded mx-auto"></div>
                </div>
            </div>

            {/* Auto Renew Checkbox */}
            <div className="p-2 mt-3 bg-white rounded-lg flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-lg mr-3"></div>
                <div className="w-48 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Payment Methods Section */}
            <div className="p-2 rounded-lg mt-3 flex items-center">
                <div className="w-1 h-8 bg-gray-300 rounded-full mr-4"></div>
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Selected Method */}
            <div className="relative bg-white rounded-lg overflow-hidden mt-2">
                <div className="flex items-center justify-between p-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-4 bg-gray-300 rounded"></div>
                </div>
            </div>


        </div>
    );
};


export const ShimmerMyPackages = () => {
    return (
        <div className="w-full">
             {/* Top card */}
            <div className="bg-[#D4EDDA] rounded-sm p-2 border border-[#D4EDDA] translate-y-2 w-full">
                <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 shimmer rounded-full" />
                    <div className="w-1/2 h-4 shimmer rounded" />
                </div>
                <div className="w-2/3 h-4 shimmer rounded" />
            </div>

            {/* Package card */}
            <div className="bg-white rounded-xl p-1 mt-4 border border-white">
                <div className="bg-[#F8F9FA] rounded-t-lg p-4 border border-[#F8F9FA]">
                    <div className="flex justify-between items-center mb-2">
                        <div className="w-1/2 h-4 shimmer rounded" />
                        <div className="w-16 h-6 shimmer rounded-full" />
                    </div>
                    <div className="w-1/3 h-4 shimmer rounded" />
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-9 w-full">
                        <div className="flex flex-col">
                            {Array(5).fill(null).map((_, idx) => (
                                <div key={idx} className="flex items-center space-x-2 mb-1">
                                    <div className="w-5 h-5 shimmer rounded-full" />
                                    <div className="w-40 h-4 shimmer rounded" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 shimmer rounded-full" />
                            <div className="w-20 h-4 shimmer rounded mt-2" />
                        </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-300">
                        <div className="w-full h-10 shimmer rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )

}
