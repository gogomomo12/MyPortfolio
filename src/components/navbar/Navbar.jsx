import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Freshten Rosales
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/freshten.rosales/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://github.com/gogomomo12">
            <img src="/github-logo.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/freshten-rosales-86a2521b6/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
