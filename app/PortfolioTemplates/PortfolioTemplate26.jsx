import React, { useState } from "react";
import {
	Linkedin,
	Twitter,
	Mail,
	Globe,
	Github,
	Figma,
	Zap,
	DollarSign,
} from "lucide-react";

const data = {
	name: "Alex Morgan",
	image: "https://randomuser.me/api/portraits/men/32.jpg",
	description:
		"Framer Developer & Designer crafting animated, interactive web experiences and premium Framer templates.",
	templates: [
		{
			name: "Startup Launch",
			image: "https://framerusercontent.com/images/1.png",
			url: "https://framer.com/templates/startup-launch",
			desc: "Modern, animated landing page for startups.",
		},
		{
			name: "Portfolio X",
			image: "https://framerusercontent.com/images/2.png",
			url: "https://framer.com/templates/portfolio-x",
			desc: "Creative portfolio with smooth transitions.",
		},
		{
			name: "SaaS Pro",
			image: "https://framerusercontent.com/images/3.png",
			url: "https://framer.com/templates/saas-pro",
			desc: "SaaS website template with pricing and blog.",
		},
		{
			name: "Agency Flow",
			image: "https://framerusercontent.com/images/4.png",
			url: "https://framer.com/templates/agency-flow",
			desc: "Agency site with animated sections and testimonials.",
		},
	],
	tools: ["Framer", "Figma", "React", "GSAP", "Vercel"],
	pricing: [
		{ plan: "Single Template", price: "$49" },
		{ plan: "All Templates Bundle", price: "$129" },
		{ plan: "Custom Framer Site", price: "from $499" },
	],
	contact: {
		email: "alex@framercraft.dev",
		website: "https://framercraft.dev",
	},
	socials: [
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/alexframer",
			icon: Linkedin,
		},
		{ label: "Twitter", url: "https://twitter.com/alexframer", icon: Twitter },
		{ label: "GitHub", url: "https://github.com/alexframer", icon: Github },
		{ label: "Website", url: "https://framercraft.dev", icon: Globe },
		{ label: "Email", url: "mailto:alex@framercraft.dev", icon: Mail },
	],
};

const PortfolioTemplate26 = () => {
	const [hovered, setHovered] = useState(null);
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] text-gray-900 flex flex-col items-center py-16 px-4">
			<img
				src={data.image}
				alt={data.name}
				className="w-24 h-24 rounded-full object-cover mb-3 shadow-lg"
			/>
			<h1 className="text-3xl font-bold mb-1 tracking-tight">{data.name}</h1>
			<p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
				{data.description}
			</p>
			{/* Framer Templates Grid */}
			<div className="w-full max-w-3xl mb-12">
				<h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
					<Zap className="w-6 h-6 text-indigo-500 animate-pulse" /> Framer
					Templates
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{data.templates.map((tpl, idx) => (
						<a
							key={idx}
							href={tpl.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-400"
						>
							<div className="overflow-hidden">
								<img
									src={tpl.image}
									alt={tpl.name}
									className="w-full h-40 object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-indigo-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="p-4">
								<h3 className="text-lg font-bold mb-1 group-hover:text-indigo-600 transition-colors duration-300">
									{tpl.name}
								</h3>
								<p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
									{tpl.desc}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
			{/* Tools & Pricing */}
			<div className="w-full max-w-3xl flex flex-col md:flex-row gap-8 mb-12">
				<div className="flex-1">
					<h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
						<Figma className="w-5 h-5 text-pink-500" /> Tools
					</h2>
					<ul className="flex flex-wrap gap-3">
						{data.tools.map((tool, idx) => (
							<li
								key={idx}
								className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium shadow hover:bg-indigo-100 transition-all duration-200 cursor-pointer animate-pulse hover:animate-none"
							>
								{tool}
							</li>
						))}
					</ul>
				</div>
				<div className="flex-1">
					<h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
						<DollarSign className="w-5 h-5 text-green-500" /> Pricing
					</h2>
					<ul className="space-y-2">
						{data.pricing.map((p, idx) => (
							<li key={idx} className="flex items-center gap-2">
								<span className="font-medium text-gray-800">{p.plan}:</span>
								<span className="text-green-600 font-bold">{p.price}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Contact & Socials */}
			<div className="w-full max-w-3xl flex flex-col md:flex-row gap-8 items-center justify-between">
				<div>
					<h2 className="text-xl font-semibold mb-2">Contact</h2>
					<div className="text-gray-700 mb-1">
						Email:{" "}
						<a
							href={`mailto:${data.contact.email}`}
							className="underline text-indigo-700 hover:text-indigo-900 transition"
						>
							{data.contact.email}
						</a>
					</div>
					<div className="text-gray-700 mb-1">
						Website:{" "}
						<a
							href={data.contact.website}
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-indigo-700 hover:text-indigo-900 transition"
						>
							{data.contact.website}
						</a>
					</div>
				</div>
				<div className="flex gap-8 mt-4 md:mt-0">
					{data.socials.map((social, idx) => (
						<div key={idx} className="flex flex-col items-center relative">
							<div
								onMouseEnter={() => setHovered(idx)}
								onMouseLeave={() => setHovered(null)}
								className="text-indigo-700 font-medium underline cursor-pointer transition"
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
								<social.icon className="w-8 h-8 text-indigo-600 animate-bounce" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate26;
