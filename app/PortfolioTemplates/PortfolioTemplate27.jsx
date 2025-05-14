import React, { useState } from "react";
import { Linkedin, Twitter, Mail, Globe } from "lucide-react";

const data = {
	name: "Samantha Lee",
	image: "https://randomuser.me/api/portraits/women/65.jpg",
	description:
		"Business Consultant helping startups scale and optimize operations. Book a call to discuss your business goals!",
	calendly: "https://calendly.com/shreyvijayvargiya26/30min",
	socials: [
		{
			label: "LinkedIn",
			url: "https://linkedin.com/in/samanthalee",
			icon: Linkedin,
		},
		{
			label: "Twitter",
			url: "https://twitter.com/samanthaconsults",
			icon: Twitter,
		},
		{ label: "Website", url: "https://samanthaconsults.com", icon: Globe },
		{ label: "Email", url: "mailto:samantha@samanthaconsults.com", icon: Mail },
	],
};

const PortfolioTemplate27 = () => {
	const [hovered, setHovered] = useState(null);
	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col items-start mx-auto max-w-2xl py-16 px-4">
			<img
				src={data.image}
				alt={data.name}
				className="w-24 h-24 rounded-full object-cover mb-3 shadow-lg"
			/>
			<h1 className="text-3xl mb-1 tracking-tight">{data.name}</h1>
			<p className="text-lg text-gray-600 mb-6 max-w-xl ">
				{data.description}
			</p>
			<div className="flex gap-8 mb-8">
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
			<div className="w-full max-w-xl bg-gray-50/20 rounded-xl shadow p-6">
				<h2 className="text-xl font-semibold mb-4">
					Book a Consultation
				</h2>
				<div className="w-full h-[600px]">
					<iframe
						src={data.calendly}
						width="100%"
						height="100%"
						frameBorder="0"
						title="Book with Samantha Lee"
						className="rounded-xl border border-gray-200"
						allow="camera; microphone; fullscreen"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate27;
