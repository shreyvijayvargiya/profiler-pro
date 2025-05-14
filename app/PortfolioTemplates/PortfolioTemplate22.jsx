import React, { useState } from "react";
import { Linkedin, Twitter, Mail, Globe, Github } from "lucide-react";

const data = {
	name: "Jane Doe",
	image: "https://randomuser.me/api/portraits/women/44.jpg",
	description:
		"Product Designer passionate about minimalism, accessibility, and building delightful user experiences.",
	experience: [
		{
			company: "Figma",
			url: "https://figma.com",
			role: "Senior Product Designer",
			desc: "Designing collaborative tools for teams.",
			years: "2021–Present",
		},
		{
			company: "Dropbox",
			url: "https://dropbox.com",
			role: "Product Designer",
			desc: "Worked on file sharing and productivity features.",
			years: "2018–2021",
		},
		{
			company: "Freelance",
			url: "https://janedesign.com",
			role: "UI/UX Designer",
			desc: "Various projects for startups and agencies.",
			years: "2015–2018",
		},
	],
	socials: [
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/janedoe",
			icon: Linkedin,
		},
		{ label: "Twitter", url: "https://twitter.com/janedoe", icon: Twitter },
		{ label: "GitHub", url: "https://github.com/janedoe", icon: Github },
		{ label: "Website", url: "https://janedesign.com", icon: Globe },
		{ label: "Email", url: "mailto:jane@janedesign.com", icon: Mail },
	],
};

const PortfolioTemplate22 = () => {
	const [hovered, setHovered] = useState(null);

	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col items-start py-16 px-4 max-w-xl mx-auto">
			<img
				src={data.image}
				alt={data.name}
				className="w-28 h-28 rounded-full object-cover mb-4"
			/>
			<h1 className="text-3xl mb-1">{data.name}</h1>
			<p className="text-lg text-gray-600 mb-6 max-w-xl">{data.description}</p>
			<div className="w-full mb-10">
				<h2 className="text-xl font-semibold mb-3">Work Experience</h2>
				<ul className="space-y-2">
					{data.experience.map((exp, idx) => (
						<li
							key={idx}
							className="flex flex-wrap items-center gap-2 text-base text-gray-700"
						>
							<a
								href={exp.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-700 font-medium underline hover:text-zinc-900 transition"
							>
								{exp.company}
							</a>
							<span className="text-gray-500">| {exp.role}</span>
							<span className="text-gray-400 text-sm">({exp.years})</span>
							<span className="text-gray-600 text-sm ml-2">- {exp.desc}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-wrap gap-6 justify-start mt-8">
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

export default PortfolioTemplate22;
