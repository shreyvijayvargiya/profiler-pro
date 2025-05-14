import React, { useState, useEffect, useRef } from "react";
import {
	Figma,
	PenTool,
	Layers,
	Users,
	ArrowRight,
	ExternalLink,
	Play,
	Pause,
	Instagram,
	Twitter,
	Dribbble,
	Linkedin,
} from "lucide-react";
import { SlSocialBehance } from "react-icons/sl";

const data = {
	personalInfo: {
		name: "Steve Jobs",
		title: "Senior Product Designer",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
		summary:
			"Crafting beautiful, user-centered digital experiences. Specializing in product design, design systems, and user research.",
		stats: {
			yearsExperience: "8+",
			projectsCompleted: "50+",
			designAwards: "12",
			happyClients: "30+",
		},
	},
	skills: [
		{
			title: "UI Design",
			description: "Creating intuitive and beautiful interfaces",
			icon: PenTool,
			level: 95,
		},
		{
			title: "UX Research",
			description: "Understanding user needs and behaviors",
			icon: Users,
			level: 90,
		},
		{
			title: "Design Systems",
			description: "Building scalable and consistent design systems",
			icon: Layers,
			level: 92,
		},
		{
			title: "Prototyping",
			description: "Creating interactive prototypes and animations",
			icon: Figma,
			level: 88,
		},
	],
	caseStudies: [
		{
			title: "Redesigning the E-commerce Experience",
			client: "Fashion Retailer",
			image:
				"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			description:
				"A complete overhaul of the shopping experience, resulting in a 40% increase in conversion rate.",
			process: [
				"User Research",
				"Wireframing",
				"Prototyping",
				"User Testing",
				"Implementation",
			],
			results: {
				conversionRate: "+40%",
				userSatisfaction: "+35%",
				timeToPurchase: "-25%",
			},
		},
		{
			title: "Mobile Banking App Redesign",
			client: "FinTech Startup",
			image:
				"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			description:
				"Modernizing the banking experience for millennials with a focus on simplicity and security.",
			process: [
				"Competitive Analysis",
				"User Interviews",
				"Journey Mapping",
				"UI Design",
				"Usability Testing",
			],
			results: {
				appRating: "4.8/5",
				userRetention: "+45%",
				featureAdoption: "+60%",
			},
		},
	],
	designSystem: {
		title: "Design System Showcase",
		description:
			"A comprehensive design system built for scalability and consistency",
		components: [
			{
				name: "Typography",
				image:
					"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			},
			{
				name: "Color Palette",
				image:
					"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			},
			{
				name: "Components",
				image:
					"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			},
			{
				name: "Icons",
				image:
					"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			},
		],
	},
	socialLinks: [
		{
			icon: Dribbble,
			url: "https://dribbble.com/alexchen",
			label: "Dribbble",
			followers: "15K",
		},
		{
			icon: SlSocialBehance,
			url: "https://behance.net/alexchen",
			label: "Behance",
			followers: "12K",
		},
		{
			icon: Instagram,
			url: "https://instagram.com/alexchen.design",
			label: "Instagram",
			followers: "25K",
		},
		{
			icon: Twitter,
			url: "https://twitter.com/alexchen",
			label: "Twitter",
			followers: "18K",
		},
		{
			icon: Linkedin,
			url: "https://linkedin.com/in/alexchen",
			label: "LinkedIn",
			followers: "8K",
		},
	],
};

const PortfolioTemplate19 = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const initGSAP = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
			gsap.registerPlugin(ScrollTrigger);

			// Animate sections on scroll
			gsap.utils.toArray("section").forEach((section, i) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
					},
					y: 100,
					opacity: 0,
					duration: 1,
					delay: i * 0.2,
				});
			});

			// Animate skill bars
			gsap.utils.toArray(".skill-bar").forEach((bar) => {
				gsap.from(bar, {
					scrollTrigger: {
						trigger: bar,
						start: "top bottom-=50",
					},
					width: 0,
					duration: 1.5,
					ease: "power2.out",
				});
			});
		};

		initGSAP();
	}, []);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-white text-gray-900 relative"
		>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-6xl md:text-7xl font-bold mb-6">
								{data.personalInfo.name}
							</h1>
							<p className="text-2xl text-gray-600 mb-8">
								{data.personalInfo.title}
							</p>
							<p className="text-gray-600 mb-12 text-lg">
								{data.personalInfo.summary}
							</p>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
								{Object.entries(data.personalInfo.stats).map(([key, value]) => (
									<div key={key} className="text-center">
										<p className="text-3xl font-bold mb-2">{value}</p>
										<p className="text-gray-600 capitalize">
											{key.replace(/([A-Z])/g, " $1").trim()}
										</p>
									</div>
								))}
							</div>
							<div className="flex space-x-4">
								{data.socialLinks.map((link, index) => (
									<a
										key={index}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
									>
										<link.icon className="w-6 h-6" />
									</a>
								))}
							</div>
						</div>
						<div className="relative">
							<img
								src={data.personalInfo.image}
								alt={data.personalInfo.name}
								className="w-full h-[600px] object-cover rounded-2xl"
							/>
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-12">
						Skills & Expertise
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.skills.map((skill, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="flex items-center space-x-4 mb-4">
									<skill.icon className="w-8 h-8 text-blue-600" />
									<h3 className="text-xl font-semibold">{skill.title}</h3>
								</div>
								<p className="text-gray-600 mb-4">{skill.description}</p>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="skill-bar bg-blue-600 h-2 rounded-full"
										style={{ width: `${skill.level}%` }}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Case Studies Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-12">Case Studies</h2>
					<div className="space-y-20">
						{data.caseStudies.map((study, index) => (
							<div
								key={index}
								className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
							>
								<div
									className={`order-2 ${
										index % 2 === 0 ? "md:order-1" : "md:order-2"
									}`}
								>
									<h3 className="text-3xl font-bold mb-4">{study.title}</h3>
									<p className="text-gray-600 mb-6">{study.description}</p>
									<div className="mb-8">
										<h4 className="text-lg font-semibold mb-4">Process</h4>
										<div className="flex flex-wrap gap-2">
											{study.process.map((step, i) => (
												<span
													key={i}
													className="px-4 py-2 bg-gray-100 rounded-full text-sm"
												>
													{step}
												</span>
											))}
										</div>
									</div>
									<div>
										<h4 className="text-lg font-semibold mb-4">Results</h4>
										<div className="grid grid-cols-3 gap-4">
											{Object.entries(study.results).map(([key, value]) => (
												<div key={key} className="text-center">
													<p className="text-2xl font-bold text-blue-600">
														{value}
													</p>
													<p className="text-sm text-gray-600 capitalize">
														{key.replace(/([A-Z])/g, " $1").trim()}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
								<div
									className={`relative order-1 ${
										index % 2 === 0 ? "md:order-2" : "md:order-1"
									}`}
								>
									<img
										src={study.image}
										alt={study.title}
										className="w-full aspect-[4/3] object-cover rounded-2xl"
									/>
									<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Design System Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-12">
						{data.designSystem.title}
					</h2>
					<p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
						{data.designSystem.description}
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{data.designSystem.components.map((component, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
							>
								<img
									src={component.image}
									alt={component.name}
									className="w-full aspect-square object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										{component.name}
									</h3>
									<a
										href="#"
										className="inline-flex items-center text-blue-600 hover:text-blue-700"
									>
										<span>View Details</span>
										<ArrowRight className="w-4 h-4 ml-2" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate19;
