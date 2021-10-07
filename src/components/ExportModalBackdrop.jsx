import { motion } from 'framer-motion';

const ExportModalBackdrop = ({ children, toggleExportModal }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={toggleExportModal} 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}} >
        {children}		
    </motion.div>
  );
};

export default ExportModalBackdrop;