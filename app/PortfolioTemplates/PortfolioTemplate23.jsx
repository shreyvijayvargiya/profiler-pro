import React, { useState } from "react";
import { Linkedin, Twitter, Mail, Globe, Github } from "lucide-react";

const data = {
	name: "Carlos Rivera",
	image: "https://randomuser.me/api/portraits/men/85.jpg",
	description:
		"Full Stack Developer focused on building scalable web applications and open-source tools.",
	experience: [
		{
			company: "GitHub",
			url: "https://github.com",
			role: "Software Engineer",
			desc: "Maintaining and improving developer platform features.",
			years: "2020–Present",
		},
		{
			company: "Upwork",
			url: "https://upwork.com",
			role: "Freelancer",
			desc: "Delivered web projects for global clients.",
			years: "2017–2020",
		},
	],
	socials: [
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/carlosdev",
			icon: Linkedin,
		},
		{ label: "GitHub", url: "https://github.com/carlosdev", icon: Github },
		{ label: "Website", url: "https://carlosrivera.dev", icon: Globe },
		{ label: "Email", url: "mailto:carlos@rivera.dev", icon: Mail },
	],
};

const PortfolioTemplate23 = () => {
	const [hovered, setHovered] = useState(null);
	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col items-start py-16 px-4 max-w-xl mx-auto">
			<div className="flex items-center gap-4 mb-4">
				<img
					src={data.image}
					alt={data.name}
					className="w-20 h-20 rounded-full object-cover"
				/>
				<h1 className="text-2xl font-bold">{data.name}</h1>
			</div>
			<p className="text-base text-gray-600 mb-6 max-w-xl">
				{data.description}
			</p>
			<div className="w-full mb-10">
				<h2 className="text-lg font-semibold mb-2">Work Experience</h2>
				<ul className="space-y-1">
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

export default PortfolioTemplate23;
