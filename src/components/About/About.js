import React, { useContext } from "react";
import "./About.css";
import react from "../../img/react.png";
import mongo from "../../img/mongo.png";
import web from "../../img/web.png";
import express from "../../img/vscode.png";
import node from "../../img/node.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	return (
		<div className='works' id='about'>
			{/* left side */}
			<div className='w-left'>
				<div className='awesome'>
					{/* dark Mode */}
					<span style={{ color: darkMode ? "white" : "" }}>About Me</span>
					<span>MERN Stack Developer</span>
					<span>
						I am a MERN-Stack WEB Developer. I am working with React, <br />{" "}
						Node.js and MongoDB. I also have experience in developing static
						websites <br /> using HTML5, CSS3 and JavaScript (ES6). I am a quick
						learner.I believe in hard <br /> work and efficiency.That's why I am
						always readyto accomplish any task <br /> by working hard. I always
						focus on learning newtechnology.
						<br /> My goal is to become A World-Class Professional Web
						Developer.
					</span>
					<Link to='contact' smooth={true} spy={true}>
						<button className='button s-button'>Hire Me</button>
					</Link>
					<div
						className='blur s-blur1'
						style={{ background: "#ABF1FF94" }}></div>
				</div>

				{/* right side */}
			</div>
			<div className='w-right'>
				<motion.div
					initial={{ rotate: 45 }}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: "-40px" }}
					transition={{ duration: 3.5, type: "spring" }}
					className='w-mainCircle'>
					<div className='w-secCircle'>
						<img src={react} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={express} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={web} alt='' />
					</div>{" "}
					<div className='w-secCircle'>
						<img src={node} alt='' />
					</div>
					<div className='w-secCircle'>
						<img src={mongo} alt='' />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className='w-backCircle blueCircle'></div>
				<div className='w-backCircle yellowCircle'></div>
			</div>
		</div>
	);
};

export default About;
