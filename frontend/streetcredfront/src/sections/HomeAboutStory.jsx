import React from 'react';
import { motion } from 'framer-motion';

import combinedBg from '../assets/First 3 pages background.png';

// Home assets
import streetCredLogo from '../assets/elements/imageStreetCred.png';
import buyNowBtn from '../assets/elements/imageBuyNow.png';
import moneyBag from '../assets/elements/imageMoneyBag.png';
import arrows from '../assets/elements/imageArrows.png';
import guys from '../assets/elements/image2.png';

// About assets
import aboutName from '../assets/elements/imageAboutname.png';
import paintWash from '../assets/elements/imageBluepaintwashonWall.png';
import joinNow from '../assets/elements/imageJoinnow.png';
import person from '../assets/elements/image5.png';
import paintBucket from '../assets/elements/imagePaintBucket.png';

// Story assets
import storyName from '../assets/elements/imageStoryName.png';
import storyBoard from '../assets/elements/imageStoryBoard.png';
import railing from '../assets/elements/image4.png';

const HomeAboutStory = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Natural scaling background on desktop, minimum 250vh height on mobile with object-cover to prevent shrinking */}
      <img src={combinedBg} alt="Home About Story Background" className="w-full h-[250vh] sm:h-[300vh] lg:h-auto object-cover object-top block" />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* --- HOME SECTION (Top Third) --- */}
        <div id="home" className="absolute top-0 w-full h-[33.33%] pointer-events-auto flex flex-col items-center pt-[10%] lg:pt-[8%]">
          {/* Main Logo */}
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <img src={streetCredLogo} alt="Street Cred" className="w-[300px] sm:w-[450px] lg:w-[650px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
          </motion.div>

          {/* Down Arrows */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-2 lg:mt-0">
            <img src={arrows} alt="Arrows" className="w-8 lg:w-12 drop-shadow-md" />
          </motion.div>

          {/* Buy Now Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-2 lg:mt-2 cursor-pointer">
            <img src={buyNowBtn} alt="Buy Now" className="w-[180px] lg:w-[300px] drop-shadow-xl" />
          </motion.div>

          {/* Subtext Desktop */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="hidden lg:block mt-4 text-white font-irish text-[26px] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)] text-center px-4">
            Earn Your Street Cred in the Crypto World.
          </motion.p>
          
          {/* Subtext Mobile */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="lg:hidden mt-6 text-black font-serif font-bold text-[22px] sm:text-[28px] tracking-wide text-center px-4 leading-tight drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
            Build Your Cred<br/>in the Digital<br/>World!
          </motion.p>

          {/* Decorative Money Bag */}
          <motion.img initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }} src={moneyBag} alt="Money Bag" className="hidden lg:block absolute left-0 bottom-[15%] w-[230px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] z-20" />

          {/* Decorative Guys Sitting */}
          <motion.img initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.8 }} src={guys} alt="Guys sitting" className="absolute right-[-5%] lg:right-0 bottom-[2%] w-[260px] sm:w-[320px] lg:w-[500px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] z-20" />
        </div>

        {/* --- ABOUT SECTION (Middle Third) --- */}
        <div id="about" className="absolute top-[33.33%] w-full h-[33.33%] pointer-events-auto">
          {/* ABOUT Title - Top Center */}
          <motion.img initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} src={aboutName} alt="ABOUT" className="absolute top-[4%] left-[55%] -translate-x-1/2 w-[250px] lg:w-[350px] drop-shadow-2xl z-30" />

          {/* Blue Paint Wash - Left side behind text */}
          <img src={paintWash} alt="Paint Wash" className="absolute top-[18%] lg:top-[-7%] left-[2%] lg:left-[-6%] w-[90%] lg:w-[75%] opacity-90 z-10 mix-blend-multiply" />

          {/* Text Content - Over the blue wash */}
          <div className="absolute top-[22%] lg:top-[32%] left-[5%] lg:left-[10%] w-[85%] lg:w-[35%] z-20 font-neuton text-black text-[16px] md:text-[20px] lg:text-[18px] text-center leading-snug drop-shadow-sm">
            <p className="mb-2">
              Welcome to Street Cred (SCRD), where crypto meets street culture. We're building a platform that blends decentralized finance with the bold energy of urban life. Our token is designed for the street-smart generation, embracing authenticity, individuality, and the modern digital landscape. Whether you're earning, trading, or staking, Street Cred empowers you to own your place in the evolving world of crypto.
            </p>
            <p>
              From exclusive NFTs to governance, we're reshaping how crypto enthusiasts connect and grow, all while staying true to the essence of street culture. Join us in the journey to make your mark in the crypto world.
            </p>
          </div>

          {/* JOIN NOW - Top Right (the pink splash paint mark) */}
          <motion.img initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: 'spring', stiffness: 200 }} src={joinNow} alt="Join Now" className="absolute top-[10%] lg:top-[20%] right-[5%] lg:right-[20%] w-[140px] lg:w-[250px] drop-shadow-[0_0_15px_rgba(255,0,255,0.6)] z-20" />

          {/* Guy Sitting - Left Side Fully */}
          <motion.img initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} src={person} alt="Person sitting" className="absolute bottom-[5%] lg:bottom-[-1%] left-0 w-[200px] lg:w-[280px] drop-shadow-2xl z-20" />

          {/* Paint Bucket Blue Border - Full Width at Bottom */}
          <motion.img initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.8 }} src={paintBucket} alt="Paint Bucket Border" className="absolute bottom-[-2%] lg:bottom-[-8%] left-0 w-full h-auto drop-shadow-xl z-30" />

          {/* BUY NOW Button with Arrows - Below the join now splash */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-[10%] lg:bottom-[15%] right-[2%] lg:right-[16%] flex items-center justify-center gap-2 lg:gap-4 z-40 cursor-pointer hover:scale-105 transition-transform">
            <img src={arrows} alt="Left Arrow" className="w-6 lg:w-12 -rotate-90 drop-shadow-md" />
            <img src={buyNowBtn} alt="Buy Now" className="w-[160px] lg:w-[280px] drop-shadow-xl" />
            <img src={arrows} alt="Right Arrow" className="w-6 lg:w-12 rotate-90 drop-shadow-md" />
          </motion.div>
        </div>

        {/* --- STORY SECTION (Bottom Third) --- */}
        <div id="story" className="absolute top-[66.66%] w-full h-[33.33%] pointer-events-auto">
          {/* Story Title - Top Center/Right */}
          <motion.img 
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            src={storyName} 
            alt="Story Title" 
            className="absolute top-[5%] lg:top-[7%] right-[10%] lg:right-[28%] w-[250px] lg:w-[350px] drop-shadow-2xl z-30" 
          />

          {/* Story Text */}
          <div className="absolute top-[20%] lg:top-[18%] right-[5%] lg:right-[15%] w-[90%] lg:w-[45%] z-20 font-neuton text-white text-[14px] md:text-[16px] lg:text-[17px] text-center leading-snug drop-shadow-md bg-black/30 lg:bg-transparent p-4 rounded-xl">
            <p>
              Born from the streets and inspired by urban culture, Street Cred (SCRD) was created to bridge the gap between crypto and street-smart culture. What started as a vision to empower individuals with digital credibility has evolved into a dynamic platform where authenticity, creativity, and community thrive. Our journey is rooted in the vibrant energy of street art, fashion, and culture, paving the way for a new generation of decentralized finance.
            </p>
          </div>

          {/* Right Side Story Board */}
          <motion.img 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            src={storyBoard} 
            alt="Story Board" 
            className="absolute top-[5%] right-[2%] lg:right-[5%] w-[50px] lg:w-[70px] drop-shadow-xl z-20" 
          />

          {/* Railing - Bottom Full Width */}
          <motion.img 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.6, duration: 0.8 }}
            src={railing} 
            alt="Railing" 
            className="absolute bottom-0 left-0 w-full h-auto drop-shadow-2xl z-40" 
          />
        </div>

      </div>
    </section>
  );
};

export default HomeAboutStory;
