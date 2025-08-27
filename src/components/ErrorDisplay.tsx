"use client";
import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-4 rounded-lg my-4 flex items-center bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
    >
      <FiAlertTriangle className="w-6 h-6 mr-3 flex-shrink-0" />
      <p>{error}</p>
    </motion.div>
  );
};

export default ErrorDisplay;