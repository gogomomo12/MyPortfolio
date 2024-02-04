import { useRef } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Homeverse - Real estate",
    img: "/homeverse.png",
    desc: "Platform or application designed to assist users in discovering, exploring, and finding real estate properties such as homes, apartments, commercial spaces, and land available for sale or rent.",
    url: "https://github.com/gogomomo12/homeverse",
  },
  {
    id: 2,
    title: "Amazon Clone",
    img: "/amazon.png",
    desc: "website or application that replicates the functionality and features of the popular e-commerce platform, Amazon. Creating an Amazon clone involves building a comprehensive online marketplace where users can browse, search for, and purchase a wide range of products.",
    url: "https://github.com/gogomomo12/Amazon_Clone",
  },
  {
    id: 3,
    title: "FreshRent RealEstate",
    img: "/freshrent.png",
    desc: "A well-designed real estate finder enhances the property search experience, making it more efficient and enjoyable for users while providing valuable information to assist them in making informed decisions about buying, selling, or renting real estate.",
    url: "https://github.com/gogomomo12/fresh10-realestate",
  },
  {
    id: 4,
    title: "Hospital Management System",
    img: "/hms.png",
    desc: "Efficiency, accuracy, and effectiveness of administrative and clinical processes within a healthcare institution. A comprehensive software solution designed to streamline and automate the operations of a healthcare facility, such as hospitals.",
    url: "https://github.com/gogomomo12/HMS",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <button>See Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <Router>
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </Router>
  );
};

export default Portfolio;
