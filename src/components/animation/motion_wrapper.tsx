import { motion } from "framer-motion";

function MotionWrapper({ children, motionKey }: { children: React.ReactNode; motionKey: string }) {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionWrapper;






