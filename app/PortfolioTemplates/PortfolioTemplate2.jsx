import React, { useState, useEffect, useRef } from "react";
import { Icons } from "./Portfolio"; // Reusing icons from the first template

const data = {
	personalInfo: {
		name: "Aditya Kumar",
		title: "Full-Stack Developer",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		socialLinks: [
			{
				icon: Icons.Github,
				label: "GitHub",
				url: "https://github.com/johndoe",
			},
			{
				icon: Icons.Linkedin,
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/johndoe",
			},
			{
				icon: Icons.Globe,
				label: "Website",
				url: "https://johndoe.dev",
			},
		],
	},
	about: {
		text: "Hello, I am Aditya Kumar, a Full Stack Developer with 5 years of experience. I love to build mobile, desktop, and web applications and currently building",
		website: {
			text: "TechCorp",
			url: "https://techcorp.com",
		},
	},
	experience: [
		{
			title: "Mobile App Developer",
			company: "ChainGPT",
			url: "https://chaingpt.org",
			period: "April 2023 - January 2025",
			responsibilities: [
				"Successfully developed ChainGPT non-custodial blockchain wallet mobile app",
				"Single developer managing team of Designers, Developers and Product manager",
				"API development for web3 based application for our mobile app",
			],
		},
		{
			title: "Frontend Developer",
			company: "Koo",
			url: "https://kooapp.com",
			period: "August 2021 - November 2022",
			responsibilities: [
				"Lead frontend team of 6 members",
				"Developed and managed Koo website along with dashboard & admin panel",
			],
		},
		{
			title: "Mobile App Developer",
			company: "Coinswitch",
			url: "https://coinswitch.co",
			period: "March 2020 - January 2021",
			responsibilities: [
				"Developed cryptocurrency trading application for millions of users",
				"Successfully improved app(APK) bundle size by 40%",
				"Increased Application runtime speed by 25%",
				"Integration of GraphQL to enhance performance by 50%",
			],
		},
	],
	skills: {
		languages: [
			{ name: "JavaScript", icon: Icons.JavaScript },
			{ name: "Python", icon: Icons.Python },
			{ name: "C++", icon: Icons.Cpp },
			{ name: "TypeScript", icon: Icons.TypeScript },
		],
		libraries: [
			{ name: "React", icon: Icons.React },
			{ name: "React Native", icon: Icons.ReactNative },
			{ name: "Node.js", icon: Icons.Node },
			{ name: "Express", icon: Icons.Express },
		],
		databases: [
			{ name: "Firebase", icon: Icons.Firebase },
			{ name: "MongoDB", icon: Icons.MongoDB },
		],
		versionControl: [
			{ name: "GitHub", icon: Icons.GitHub },
			{ name: "BitBucket", icon: Icons.BitBucket },
			{ name: "GitLab", icon: Icons.GitLab },
		],
	},
	contact: {
		email: {
			address: "john.doe@example.com",
			url: "mailto:john.doe@example.com",
		},
		phone: {
			number: "+1 (555) 123-4567",
			url: "tel:+15551234567",
		},
	},
};
const PortfolioTemplate2 = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isScrolled, setIsScrolled] = useState(false);

	// Refs for GSAP animations
	const navRef = useRef(null);
	const heroRef = useRef(null);
	const sectionsRef = useRef([]);
	const backgroundRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// GSAP Animations
	useEffect(() => {
		// Import GSAP dynamically on client-side
		const initGSAP = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
			const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default;

			// Register GSAP plugins
			gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

			// Background animation
			gsap.to(backgroundRef.current, {
				backgroundPosition: "100% 100%",
				duration: 20,
				repeat: -1,
				ease: "none",
			});

			// Hero section animation
			const heroTl = gsap.timeline();
			heroTl
				.from(heroRef?.current?.querySelector("h1"), {
					y: 100,
					opacity: 0,
					duration: 1,
					ease: "power4.out",
				})
				.from(
					heroRef?.current?.querySelector("p"),
					{
						y: 50,
						opacity: 0,
						duration: 1,
						ease: "power4.out",
					},
					"-=0.5"
				)
				.from(
					heroRef?.current?.querySelectorAll("a"),
					{
						y: 30,
						opacity: 0,
						duration: 0.8,
						stagger: 0.1,
						ease: "power4.out",
					},
					"-=0.5"
				);

			// Section animations
			sectionsRef.current.forEach((section, index) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
					y: 50,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
					delay: index * 0.2,
				});
			});

			// Navigation animation
			gsap.from(navRef.current, {
				y: -100,
				opacity: 0,
				duration: 1,
				ease: "power4.out",
			});

			// Cleanup
			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		};

		initGSAP();
	}, []);

	const sections = [
		{ id: "about", label: "About" },
		{ id: "experience", label: "Experience" },
		{ id: "skills", label: "Skills" },
		{ id: "contact", label: "Contact" },
	];

	const handleSectionClick = async (sectionId) => {
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			const gsap = (await import("gsap")).default;
			const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default;
			gsap.registerPlugin(ScrollToPlugin);

			gsap.to(window, {
				duration: 1,
				scrollTo: {
					y: element,
					offsetY: 80,
				},
				ease: "power3.inOut",
			});
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
			{/* Animated background */}
			<div ref={backgroundRef} className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
			</div>

			{/* Navigation */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
							SV
						</div>
						<div className="flex space-x-8">
							{sections.map((section) => (
								<button
									key={section.id}
									onClick={() => handleSectionClick(section.id)}
									className={`text-sm font-medium transition-colors ${
										activeSection === section.id
											? "text-purple-400"
											: "text-gray-300 hover:text-white"
									}`}
								>
									{section.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				ref={heroRef}
				className="relative min-h-screen flex items-center justify-center pt-16"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
							{data.personalInfo.name}
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 mb-8">
							{data.personalInfo.title}
						</p>
						<div className="flex justify-center space-x-6">
							{data.personalInfo.socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors"
								>
									<link.icon />
								</a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-20"
				ref={(el) => (sectionsRef.current[0] = el)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8">
						<h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
							About Me
						</h2>
						<p className="text-gray-300 leading-relaxed">
							{data.about.text}{" "}
							<a
								href={data.about.website.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-400 hover:text-purple-300"
							>
								{data.about.website.text}
							</a>
						</p>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section
				id="experience"
				className="py-20"
				ref={(el) => (sectionsRef.current[1] = el)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
						Experience
					</h2>
					<div className="space-y-12">
						{data.experience.map((job, index) => (
							<div
								key={index}
								className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8"
							>
								<div className="flex justify-between items-start mb-4">
									<div>
										<h3 className="text-2xl font-bold text-white mb-2">
											{job.title}
										</h3>
										<a
											href={job.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-purple-400 hover:text-purple-300"
										>
											{job.company}
										</a>
									</div>
									<span className="text-gray-400">{job.period}</span>
								</div>
								<ul className="list-disc list-inside text-gray-300 space-y-2">
									{job.responsibilities.map((responsibility, idx) => (
										<li key={idx}>{responsibility}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				className="py-20"
				ref={(el) => (sectionsRef.current[2] = el)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
						Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{Object.entries(data.skills).map(([category, skills]) => (
							<div
								key={category}
								className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8"
							>
								<h3 className="text-xl font-bold mb-6 text-white capitalize">
									{category}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{skills.map((skill, index) => (
										<div
											key={index}
											className="flex items-center space-x-3 text-gray-300"
										>
											<skill.icon />
											<span>{skill.name}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20"
				ref={(el) => (sectionsRef.current[3] = el)}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8">
						<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
							Get In Touch
						</h2>
						<div className="space-y-6">
							<a
								href={data.contact.email.url}
								className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
							>
								<Icons.Mail />
								<span>{data.contact.email.address}</span>
							</a>
							<a
								href={data.contact.phone.url}
								className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
							>
								<Icons.Phone />
								<span>{data.contact.phone.number}</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate2;
