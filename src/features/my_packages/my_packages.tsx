import { useState } from "react";
import { ShimmerMyPackages } from "../../components/animation/shimmer/shimmer";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

const tasks = [
  { id: "082", completed: true },
  { id: "083", completed: true },
  { id: "084", completed: false },
  { id: "085", completed: false },
  { id: "086", completed: false },
];

const MyPackages = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = (completedCount / totalTasks) * 100;

  if (!tasks || tasks.length === 0) {
    return <ShimmerMyPackages />;
  }



  return (
    <div className="w-full">

      <div className="bg-[#D4EDDA] rounded-sm p-2 border border-[#D4EDDA] translate-y-2 w-full">
        <div className="flex items-center gap-3 mb-1">
          <div className="text-2xl">🎊</div>
          <h2 className="font-light text-gray-800 text-lg">
            ແຜນທີກໍາລັງດໍາເນີນການ (1 ແຜນ)
          </h2>
        </div>
        <div className="text-gray-600 text-lg">Next draws starting in 2 hours 15 minute</div>
      </div>


      <div className="bg-white rounded-xl p-1 mt-4 border border-white ">
        <div className="bg-[#F8F9FA] rounded-t-lg p-4 border border-[#F8F9FA]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-800">ແພັກເກັດ Gold 5,000 / ອາທິດ</h2>
            <button className="bg-[#28A745] text-white font-medium rounded-full px-4 py-1 text-lg">
              Active
            </button>
          </div>
          <h2 className="text-[#848199]">ງວດເລີ່ມຕົ້ນ - ສິ້ນສຸດ: 082 - 086</h2>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-9">

            <div className="flex flex-col">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3 mb-2">
                  <span
                    className={`w-5 h-5 border rounded-full flex items-center justify-center ${task.completed ? "bg-yellow-400 border-yellow-400" : "border-gray-300"
                      }`}
                  >
                    {task.completed && <span className="text-black text-xs">✔</span>}
                  </span>
                  <span className="text-gray-600">ສຸ່ມມົ້ວເລກ 2 ໂຕງວດທີ {task.id}</span>
                </div>
              ))}
            </div>


            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e0e0e0" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    transform="rotate(-90 18 18)"
                  />
                  <text x="18" y="20" textAnchor="middle" fontSize="8" fill="#666">
                    {completedCount}/{totalTasks}
                  </text>
                </svg>
              </div>
              <p className="text-gray-500 text-lg">{progress}% Complete</p>
            </div>
          </div>


          <div className="mt-3 pt-3 border-t border-dashed border-gray-300">
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer w-full py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              ຍົກເລີກ
            </button>
          </div>


          <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black/30 transition-opacity data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all data-[closed]:scale-95"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                      ຢືນຢັນການຍົກເລີກ
                    </DialogTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      ທ່ານແນ່ໃຈວ່າຈະຍົກເລີກບໍ? ຂໍ້ມູນຈະຖືກລຶບແລະບໍ່ສາມາດກູ້ຄືນໄດ້.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2 ">

                  <button
                    onClick={() => setOpen(false)}
                    className="cursor-pointer px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
                  >
                    ຍົກເລີກ
                  </button>
                  <button
                    onClick={() => {
                      navigate('/Nonimage',);
                      // console.log("Canceled!");
                      // setOpen(false);
                    }}
                    className="cursor-pointer px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm"
                  >
                    ຢືນຢັນ
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default MyPackages;
