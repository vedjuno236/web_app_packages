import React, { useRef, useEffect } from 'react';

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
    const sheetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray bg-opacity-100 flex items-end z-50">
            <div
                ref={sheetRef}
                className="bg-[#EDEEF0] rounded-t-2xl shadow-lg w-full max-h-[80vh] overflow-y-auto transform transition-transform duration-300 ease-out translate-y-0"
            >
                {children}
            </div>
        </div>
    );
};

export default BottomSheet;