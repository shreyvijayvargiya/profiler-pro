import React, { useEffect, useState } from "react";
import Portfolio from "../PortfolioTemplates/Portfolio";
import PortfolioTemplate2 from "../PortfolioTemplates/PortfolioTemplate2";
import PortfolioTemplate3 from "../PortfolioTemplates/PortfolioTemplate3";
import PortfolioTemplate4 from "../PortfolioTemplates/PortfolioTemplate4";
import PortfolioTemplate5 from "../PortfolioTemplates/PortfolioTemplate5";
import PortfolioTemplate6 from "../PortfolioTemplates/PortfolioTemplate6";
import PortfolioTemplate10 from "../PortfolioTemplates/PortfolioTemplate10";
import PortfolioTemplate14 from "../PortfolioTemplates/PortfolioTemplate14";
import PortfolioTemplate15 from "../PortfolioTemplates/PortfolioTemplate15";
import PortfolioTemplate16 from "../PortfolioTemplates/PortfolioTemplate16";
import PortfolioTemplate17 from "../PortfolioTemplates/PortfolioTemplate17";
import PortfolioTemplate18 from "../PortfolioTemplates/PortfolioTemplate18";
import PortfolioTemplate19 from "../PortfolioTemplates/PortfolioTemplate19";
import PortfolioTemplate20 from "../PortfolioTemplates/PortfolioTemplate20";
import PortfolioTemplate21 from "../PortfolioTemplates/PortfolioTemplate21";
import PortfolioTemplate22 from "../PortfolioTemplates/PortfolioTemplate22";
import PortfolioTemplate23 from "../PortfolioTemplates/PortfolioTemplate23";
import PortfolioTemplate24 from "../PortfolioTemplates/PortfolioTemplate24";
import PortfolioTemplate25 from "../PortfolioTemplates/PortfolioTemplate25";
import PortfolioTemplate27 from "../PortfolioTemplates/PortfolioTemplate27";
import PersonalityPortfolio from "../PortfolioTemplates/PersonalityPortfolio";
import GraphicDesignerPortfolio from "../PortfolioTemplates/GraphicDesignerPortfolio";
import { ArrowRight, Layout } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import router from "next/router";
import Script from "next/script";

export const templates = [
	{
		id: 1,
		name: "Frontend Developer Portfolio",
		component: Portfolio,
		description:
			"Modern React portfolio with interactive animations and skill showcases",
	},
	{
		id: 2,
		name: "Full Stack Developer Portfolio",
		component: PortfolioTemplate2,
		description:
			"Comprehensive full-stack showcase with project highlights and tech stack",
	},
	{
		id: 3,
		name: "Backend Engineer Portfolio",
		component: PortfolioTemplate3,
		description:
			"Performance-focused portfolio highlighting system architecture and scalability",
	},
	{
		id: 4,
		name: "Design Engineer Portfolio",
		component: PortfolioTemplate4,
		description:
			"Creative portfolio emphasizing design systems and UI/UX expertise",
	},
	{
		id: 5,
		name: "Mobile Developer Portfolio",
		component: PortfolioTemplate5,
		description:
			"Mobile-first portfolio showcasing app development and cross-platform skills",
	},
	{
		id: 6,
		name: "Mobile Developer Portfolio",
		component: PortfolioTemplate6,
		description:
			"Dark-themed mobile portfolio with app showcases and performance metrics",
	},
	{
		id: 7,
		name: "Game Developer Portfolio",
		component: PortfolioTemplate10,
		description:
			"Immersive portfolio featuring game projects and technical achievements",
	},
	{
		id: 8,
		name: "Blockchain Portfolio",
		component: PortfolioTemplate14,
		description:
			"Crypto-themed portfolio highlighting blockchain projects and smart contracts",
	},
	{
		id: 9,
		name: "Content Creator",
		component: PortfolioTemplate15,
		description:
			"Engaging portfolio for content creators with social media integration",
	},
	{
		id: 10,
		name: "LinkTree Style",
		component: PortfolioTemplate16,
		description: "Minimalist link aggregator with animated gradient background",
	},
	{
		id: 11,
		name: "Dentist Portfolio",
		component: PortfolioTemplate17,
		description:
			"Professional medical portfolio with service highlights and patient testimonials",
	},
	{
		id: 12,
		name: "Artist Portfolio",
		component: PortfolioTemplate18,
		description:
			"Visual portfolio showcasing artwork with gallery and exhibition history",
	},
	{
		id: 13,
		name: "Designer Portfolio",
		component: PortfolioTemplate19,
		description:
			"Creative portfolio featuring design projects and visual storytelling",
	},
	{
		id: 14,
		name: "Consulting Portfolio",
		component: PortfolioTemplate20,
		description:
			"Professional portfolio highlighting consulting expertise and case studies",
	},
	{
		id: 15,
		name: "Investor Portfolio",
		component: PortfolioTemplate21,
		description:
			"Investment-focused portfolio with portfolio companies and advisory roles",
	},
	{
		id: 16,
		name: "Dead Simple Portfolio",
		component: PortfolioTemplate22,
		description: "Minimalist single-page portfolio with essential information",
	},
	{
		id: 17,
		name: "Founder Investor Portfolio",
		component: PortfolioTemplate23,
		description:
			"Dual-role portfolio showcasing startup and investment experience",
	},
	{
		id: 18,
		name: "Senior Engineer Portfolio",
		component: PortfolioTemplate24,
		description:
			"Technical portfolio emphasizing leadership and complex projects",
	},
	{
		id: 19,
		name: "Salon Portfolio",
		component: PortfolioTemplate25,
		description:
			"Beauty business portfolio with service showcase and booking system",
	},
	{
		id: 20,
		name: "Calendly Booking Portfolio",
		component: PortfolioTemplate27,
		description:
			"Professional portfolio with integrated scheduling and availability",
	},
	{
		id: 21,
		name: "Personality Portfolio",
		component: PersonalityPortfolio,
		description: "Personal brand portfolio with unique character and style",
	},
	{
		id: 22,
		name: "Graphic Designer Portfolio",
		component: GraphicDesignerPortfolio,
		description:
			"Visual portfolio showcasing graphic design and branding projects",
	},
];

const PortfolioTemplatesPage = () => {
	const [activeTemplate, setActiveTemplate] = useState(1);
	const [isOpen, setIsOpen] = useState(false);
	const [isForward, setIsForward] = useState(true);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.key.toLowerCase() === "t") {
				if (isForward) {
					// Moving forward
					if (activeTemplate === templates.length) {
						// Reached the end, start moving backward
						setIsForward(false);
						setActiveTemplate(templates.length - 1);
					} else {
						setActiveTemplate(activeTemplate + 1);
					}
				} else {
					// Moving backward
					if (activeTemplate === 1) {
						// Reached the start, start moving forward
						setIsForward(true);
						setActiveTemplate(2);
					} else {
						setActiveTemplate(activeTemplate - 1);
					}
				}
			} else if (
				event.key.toLowerCase() === "e" ||
				event.key.toLowerCase() === "h"
			) {
				router.push("/");
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [activeTemplate, isForward, templates.length]);

	useEffect(() => {
		if (router.query.template) {
			const templateName = router.query.template;
			const template = templates.find((t) => t.name === templateName);
			if (template) {
				setActiveTemplate(template.id);
				setShowModal(true);
			}
		}
	}, [router.query]);

	const ActiveTemplate = templates.find(
		(t) => t.id === activeTemplate
	)?.component;

	return (
		<div className="relative">
			<Script src="https://assets.lemonsqueezy.com/lemon.js" defer />
			{ActiveTemplate && <ActiveTemplate />}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.2 }}
						className="fixed bottom-20 left-4 bg-white rounded-xl border border-zinc-200 shadow-xl p-2 z-50 w-60"
					>
						<div className="text-sm font-medium text-zinc-800 mb-2 px-2">
							Choose Template
						</div>
						<div className="space-y-1">
							{templates.map((template) => (
								<motion.button
									key={template.id}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									onClick={() => {
										setActiveTemplate(template.id);
										setShowModal(true);
									}}
									className={`w-full text-left px-4 py-2 rounded text-sm transition-colors outline-none ${
										activeTemplate === template.id
											? "bg-zinc-800 text-white"
											: "text-zinc-600 hover:bg-zinc-100"
									}`}
								>
									{template.name}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-4 left-4 bg-zinc-800 z-50 text-white p-3 rounded-full shadow-lg hover:bg-zinc-700 transition-colors"
			>
				<Layout className="w-6 h-6" />
			</button>

		</div>
	);
};

export default PortfolioTemplatesPage;
