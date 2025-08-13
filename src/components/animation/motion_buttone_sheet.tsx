import { motion } from "framer-motion";


function MotionButtonSheet({ children,  }: { children: React.ReactNode; motionKey: string }) {
  return (
       <motion.div
            key="bottom-sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-end"
          >
      {children}
    </motion.div>
  );
}

export default MotionButtonSheet;



