'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-purple-500 to-deep-purple-700 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md text-center"
      >
        <h1 className="text-4xl font-bold text-deep-purple-700 mb-4">
          Welcome to Semayote
        </h1>
        <p className="text-gray-600 mb-8">
          Your ultimate chat solution. Connect, communicate, and collaborate seamlessly.
        </p>

        <Link href="/auth">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-deep-purple-600 text-white py-2 px-4 rounded-lg hover:bg-deep-purple-700 focus:ring-4 focus:ring-deep-purple-500 focus:outline-none transition duration-300"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Welcome;