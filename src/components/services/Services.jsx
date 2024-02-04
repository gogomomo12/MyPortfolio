import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Adaptive and Quick Learner</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My Skills</motion.b> &{" "}
            <motion.b whileHover={{ color: "orange" }}>Knowledge</motion.b>
          </h1>
        </div>
        <div className="title">
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      
      <motion.div className="listContainer" variants={variants}>
        
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>Database Management (SQL, MongoDB)</li>
            <li>RESTful APIs</li>
            <li>UI/UX Design</li>
            <li>Responsive Design Frameworks</li>
          </ul>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Development</h2>
          <ul>
            <li>Python</li>
            <li>Java programming</li>
            <li>Git and version control</li>
            <li>SQL,MySQL and NoSQL</li>
            <li>C# and .NET framework</li>
            <li>RESTful API</li>
            {/* Add more skills as needed */}
          </ul>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database Skills</h2>
          <ul>
            <li>SQL</li>
            <li>Microsoft SQL Server</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Oracle Database</li>
          </ul>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Middleware Applications</h2>
          <ul>
            <li>Linux</li>
            <li>Automation Scripts</li>
            <li>Weblogic</li>
            <li>Oracle Traffic Director</li>
            <li>Oracle Applications</li>
            <li>ControlM</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
