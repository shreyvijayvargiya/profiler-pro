import React, { useState } from "react";
import { Linkedin, Twitter, Mail, Globe, Github } from "lucide-react";

const data = {
	name: "Priya Sharma",
	image: "https://randomuser.me/api/portraits/women/68.jpg",
	description:
		"Frontend Engineer with a love for clean code, accessibility, and teaching others.",
	experience: [
		{
			company: "Google",
			url: "https://google.com",
			role: "Frontend Engineer",
			desc: "Building scalable UI for Google Search.",
			years: "2019–Present",
		},
		{
			company: "Codecademy",
			url: "https://codecademy.com",
			role: "Instructor",
			desc: "Created interactive JavaScript courses.",
			years: "2017–2019",
		},
	],
	socials: [
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/priyasharma",
			icon: Linkedin,
		},
		{ label: "Twitter", url: "https://twitter.com/priyacodes", icon: Twitter },
		{ label: "GitHub", url: "https://github.com/priyasharma", icon: Github },
		{ label: "Website", url: "https://priyasharma.dev", icon: Globe },
		{ label: "Email", url: "mailto:priya@sharma.dev", icon: Mail },
	],
};

const PortfolioTemplate24 = () => {
	const [hovered, setHovered] = useState(null);
	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col items-start py-16 px-4 max-w-xl mx-auto">
			<img
				src={data.image}
				alt={data.name}
				className="w-24 h-24 rounded-full object-cover mb-3"
			/>
			<h1 className="text-2xl font-bold mb-1">{data.name}</h1>
			<p className="text-base text-gray-600 mb-6 max-w-xl">
				{data.description}
			</p>
			<div className="w-full mb-10">
				<h2 className="text-lg font-semibold mb-2">Experience</h2>
				<ul className="list-disc pl-5 space-y-2">
					{data.experience.map((exp, idx) => (
						<li key={idx} className="text-base text-gray-700">
							<a
								href={exp.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-700 font-medium underline hover:text-zinc-900 transition"
							>
								{exp.company}
							</a>
							<span className="text-gray-500"> | {exp.role}</span>
							<span className="text-gray-400 text-sm"> ({exp.years})</span>
							<span className="text-gray-600 text-sm ml-2">- {exp.desc}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="flex gap-8 mt-8">
				{data.socials.map((social, idx) => (
					<div key={idx} className="flex flex-col items-center relative">
						<div
							onMouseEnter={() => setHovered(idx)}
							onMouseLeave={() => setHovered(null)}
							className="text-zinc-700 font-medium underline cursor-pointer transition"
						>
							<a href={social.url} target="_blank" rel="noopener noreferrer">
								{social.label}
							</a>
						</div>
						<div
							className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300 ${
								hovered === idx
									? "opacity-100 scale-110"
									: "opacity-0 scale-75 pointer-events-none"
							}`}
						>
							<social.icon className="w-8 h-8 text-zinc-600 animate-bounce" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioTemplate24;
