import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/style.css'

export default function Animation() {
  return (
    <div className="my-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  );
}