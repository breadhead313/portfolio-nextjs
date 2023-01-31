import React from "react";
import Image from "next/image";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import NodeImg from "../public/assets/skills/node.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Vue from "../public/assets/skills/Vue.png";
import Bootstrap from "../public/assets/skills/Bootstrap.png";
import MySQL from "../public/assets/skills/MySQL.png";
import Typescript from "../public/assets/skills/Typescript.png";
import ThreeJS from "../public/assets/skills/threeJS.png";
import D3JS from "../public/assets/skills/D3.png";
import P5JS from "../public/assets/skills/P5.png";
import ChartJS from "../public/assets/skills/chartJS.png";
import BabylonJS from "../public/assets/skills/babylonJS.png";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#1E90FF]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Javascript} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Typescript} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Typescript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={ThreeJS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Three JS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={D3JS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>D3 JS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={ReactImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={ChartJS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Chart JS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Tailwind} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Github} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={NextJS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Next</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={Vue} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Vue</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={P5JS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>P5 JS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={BabylonJS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<h3>Babylon JS</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
