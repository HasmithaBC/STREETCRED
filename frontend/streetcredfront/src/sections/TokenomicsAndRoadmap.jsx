import React from 'react';
import { motion } from 'framer-motion';
import combinedBg from '../assets/imagefinalbothpagesbackground.png';
import RainEffect from '../components/RainEffect';

// Tokenomics assets
import tokenomicsName from '../assets/elements/imageTokenomicsName.png';
import tokenomicsBoard from '../assets/elements/imageTokenomicsboard.png';
import person6 from '../assets/elements/image6.png';

// Roadmap assets
import roadmapName from '../assets/elements/imageNameBoard.png';
import roadmapBoard from '../assets/elements/imageBoardLastPage.png';
import person7 from '../assets/elements/image7.png';
import lamp from '../assets/elements/imageLamp.png';
import railing from '../assets/elements/image4.png';

const TokenomicsAndRoadmap = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Natural scaling background on desktop, minimum 200vh height on mobile with object-cover to prevent shrinking */}
      <img src={combinedBg} alt="Tokenomics and Roadmap Background" className="w-full h-[280vh] sm:h-[200vh] lg:h-auto object-cover object-top block" />
      
      {/* Rain Animation covering both sections */}
      <RainEffect />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* --- TOKENOMICS SECTION (Top Half) --- */}
        <div id="tokenomics" className="absolute top-0 w-full h-1/2 pointer-events-auto">
          
          {/* Tokenomics Title */}
          <motion.img 
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            src={tokenomicsName} 
            alt="Tokenomics" 
            className="absolute top-[4%] lg:top-[3%] left-1/2 -translate-x-1/2 w-[280px] lg:w-[450px] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] z-30" 
          />

          {/* Tokenomics Board & Text Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-[19%] lg:top-[19%] left-1/2 -translate-x-1/2 w-[240px] lg:w-[300px] z-20 flex items-center justify-center"
          >
            <img src={tokenomicsBoard} alt="Tokenomics Board" className="w-full h-auto drop-shadow-2xl" />
            
            {/* Overlay Text on Board */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 lg:gap-6 font-serif text-white font-bold text-[14px] lg:text-[18px] tracking-wider pt-4 lg:pt-8 drop-shadow-md">
              <p>Sell Tax - 0%</p>
              <p>Buy Tax - 0%</p>
              <p>Liquidity - Burned</p>
              <p>Supply - 4M</p>
            </div>
          </motion.div>

          {/* Person Standing Left */}
          <motion.img 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            src={person6} 
            alt="Person standing" 
            className="absolute bottom-[15%] lg:bottom-[18%] left-[6%] lg:left-[6%] w-[120px] lg:w-[220px] drop-shadow-2xl z-30" 
          />

        </div>

        {/* --- ROADMAP SECTION (Bottom Half) --- */}
        <div id="roadmap" className="absolute top-1/2 w-full h-1/2 pointer-events-auto">
          {/* Roadmap Title */}
          <motion.img 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            src={roadmapName} 
            alt="Roadmap" 
            className="absolute top-[8%] lg:top-[12%] left-[5%] lg:left-[10%] w-[200px] lg:w-[350px] drop-shadow-2xl z-30" 
          />

          {/* Roadmap Board & Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-[2%] lg:bottom-[2%] right-[5%] lg:right-[15%] w-[250px] lg:w-[500px] z-20 flex items-center justify-center"
          >
            <img src={roadmapBoard} alt="Roadmap Board" className="w-full h-auto drop-shadow-2xl" />
            
            {/* Overlay Text on Board */}
            <div className="absolute inset-0 flex flex-col items-center justify-start gap-4 lg:gap-5 font-neuton text-white text-[13px] lg:text-[14px] xl:text-[22px] text-center px-6 lg:px-10 pt-[25%] lg:pt-[38%] drop-shadow-md font-bold">
              <p>Phase 1: Token launch &<br/>integration with major wallets</p>
              <p>Phase 2: Partnership with key<br/>blockchain platforms</p>
              <p>Phase 3: Launch of governance<br/>system for community-driven<br/>decisions</p>
              <p>Phase 4: Development of NFT<br/>marketplace and advanced<br/>DeFi tools</p>
            </div>
          </motion.div>

          {/* Person Standing */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            src={person7} 
            alt="Person looking away" 
            className="absolute bottom-[40%] lg:bottom-[-2%] left-[10%] lg:left-[20%] w-[150px] lg:w-[320px] drop-shadow-2xl z-10" 
          />

          {/* Lamp */}
          <motion.img 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.7, duration: 0.8 }}
            src={lamp} 
            alt="Lamp" 
            className="absolute bottom-[-1%] lg:bottom-[-2%] right-[70%] lg:right-[5%] w-[50px] lg:w-[100px] drop-shadow-xl z-20" 
          />

          {/* Railing - Bottom Full Width */}
          <motion.img 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            src={railing} 
            alt="Railing" 
            className="absolute bottom-[-1%] left-0 w-[100%] lg:w-full h-[12%] lg:h-auto drop-shadow-2xl z-40" 
          />
        </div>


      </div>
    </section>
  );
};

export default TokenomicsAndRoadmap;
