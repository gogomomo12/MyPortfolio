import React, { useState, useEffect } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import resume from "/Freshten_Rosales_Resume.pdf";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [resumeURL, setResumeURL] = useState("");
  

  useEffect(() => {
    // Use the imported resume file as the source for the anchor element
    setResumeURL(resume);
  }, []);
  

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeURL;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Freshten Z. Rosales</motion.h2>
          <motion.h1 variants={textVariants}>
            Programmer Analyst & Middleware Admin
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons"
            style={{ zIndex: 1 }}
          >
            <motion.button
              variants={textVariants}
            >
              Download Resume
            </motion.button>
            <a href={`#Contact`}><motion.button variants={textVariants}>Contact Me</motion.button></a>
            
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Middleware and Develepoer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
