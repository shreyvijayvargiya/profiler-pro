import React, { useState, useEffect, useRef } from "react";
import {
	Smartphone,
	Code2,
	Zap,
	GitCompareArrows,
	Database,
	Workflow,
	CloudCog,
	Mail,
	Phone,
	Globe,
	Download,
	Smartphone as MobileIcon,
	Tablet,
	Laptop,
	Image,
	Check,
	AlertTriangle,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Sofia alphonso",
		title: "Mobile Developer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Mobile Developer specializing in React Native and Flutter development, with a focus on creating beautiful and performant mobile applications.",
		socialLinks: [
			{
				icon: GitCompareArrows,
				label: "GitHub",
				url: "https://github.com/johndoe",
			},
			{
				icon: Globe,
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/johndoe",
			},
			{
				icon: Globe,
				label: "Website",
				url: "https://johndoe.dev",
			},
		],
	},
	about: {
		text: "Mobile Developer with expertise in building cross-platform applications using React Native and Flutter. Passionate about creating beautiful, performant mobile experiences. Currently developing mobile applications at",
		website: {
			text: "TechCorp",
			url: "https://techcorp.com",
		},
	},
	experience: [
		{
			title: "Senior Mobile Developer",
			company: "AppWorks",
			url: "https://appworks.com",
			period: "2022 - Present",
			responsibilities: [
				"Led development of React Native app with 1M+ downloads",
				"Reduced app size by 40% through optimization techniques",
				"Implemented offline-first architecture improving user experience",
				"Achieved 60fps performance across all animations",
			],
			tech: [
				"React Native",
				"TypeScript",
				"Redux",
				"Firebase",
				"Jest",
				"Detox",
			],
		},
		{
			title: "Mobile Developer",
			company: "MobileFirst",
			url: "https://mobilefirst.com",
			period: "2020 - 2022",
			responsibilities: [
				"Developed Flutter apps for iOS and Android platforms",
				"Implemented CI/CD pipeline reducing release time by 70%",
				"Integrated analytics and crash reporting systems",
				"Optimized app performance reducing load time by 50%",
			],
			tech: [
				"Flutter",
				"Dart",
				"Firebase",
				"GitLab CI",
				"Fastlane",
				"Codemagic",
			],
		},
	],
	skills: {
		mobile: [
			{ name: "React Native", icon: MobileIcon },
			{ name: "Flutter", icon: Tablet },
			{ name: "iOS", icon: Laptop },
			{ name: "Android", icon: Smartphone },
		],
		languages: [
			{ name: "TypeScript", icon: Code2 },
			{ name: "Dart", icon: Code2 },
			{ name: "Swift", icon: Code2 },
			{ name: "Kotlin", icon: Code2 },
		],
		tools: [
			{ name: "Firebase", icon: Database },
			{ name: "Redux", icon: Workflow },
			{ name: "Jest", icon: Check },
			{ name: "Detox", icon: AlertTriangle },
		],
		design: [
			{ name: "Figma", icon: Image },
			{ name: "Sketch", icon: Image },
			{ name: "Adobe XD", icon: Image },
			{ name: "Zeplin", icon: Image },
		],
		testing: [
			{ name: "Unit Testing", icon: Check },
			{ name: "E2E Testing", icon: Check },
			{ name: "UI Testing", icon: Check },
			{ name: "Performance", icon: Zap },
		],
		deployment: [
			{ name: "Fastlane", icon: Workflow },
			{ name: "Codemagic", icon: CloudCog },
			{ name: "App Store", icon: Download },
			{ name: "Play Store", icon: Download },
		],
	},
	projects: [
		{
			title: "E-Commerce Mobile App",
			description:
				"Built a cross-platform e-commerce app with offline support and real-time updates",
			tech: ["React Native", "Redux", "Firebase", "Stripe"],
			metrics: ["1M+ downloads", "4.8/5 rating", "30% conversion rate"],
		},
		{
			title: "Fitness Tracking App",
			description:
				"Developed a fitness app with real-time tracking and social features",
			tech: ["Flutter", "Firebase", "Google Fit API", "WebRTC"],
			metrics: ["500K+ users", "4.9/5 rating", "60% retention rate"],
		},
	],
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

const PortfolioTemplate6 = () => {
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
		const initGSAP = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
			const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default;

			gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

			// Background animation
			gsap.to(backgroundRef.current, {
				backgroundPosition: "100% 100%",
				duration: 50,
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
		};

		initGSAP();
	}, []);

	return (
		<div className="h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white overflow-hidden">
			{/* Background with app-like pattern */}
			<div
				ref={backgroundRef}
				className="fixed inset-0 z-0 opacity-5"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Navigation */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-black/5 backdrop-blur-md" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2">
							<Smartphone className="w-6 h-6 text-zinc-400" />
							<span className="font-sans text-zinc-400">Mobile Dev</span>
						</div>
						<div className="flex space-x-8">
							{["about", "experience", "skills", "projects", "contact"].map(
								(section) => (
									<button
										key={section}
										onClick={() => setActiveSection(section)}
										className={`font-sans text-sm ${
											activeSection === section
												? "text-zinc-400"
												: "text-gray-300 hover:text-zinc-400"
										}`}
									>
										{section.toUpperCase()}
									</button>
								)
							)}
						</div>
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<div className="h-full pt-16 overflow-y-auto">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="grid grid-cols-12 gap-4">
						{/* Left Column - Personal Info & Skills */}
						<div className="col-span-12 lg:col-span-4 space-y-4">
							{/* Personal Info */}
							<div className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm">
								<h1 className="text-3xl font-sans font-bold mb-4 text-zinc-400">
									{data.personalInfo.name}
								</h1>
								<p className="text-xl font-sans text-zinc-400 mb-4">
									{data.personalInfo.title}
								</p>
								<p className="text-gray-300 mb-6">
									{data.personalInfo.summary}
								</p>
								<div className="flex space-x-4">
									{data.personalInfo.socialLinks.map((link, index) => (
										<a
											key={index}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-300 hover:text-zinc-400 transition-colors"
										>
											<link.icon className="w-6 h-6" />
										</a>
									))}
								</div>
							</div>

							{/* Skills */}
							<div className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm">
								<h2 className="text-xl font-sans font-bold mb-4 text-zinc-400">
									Skills
								</h2>
								<div className="space-y-4">
									{Object.entries(data.skills).map(([category, skills]) => (
										<div key={category}>
											<h3 className="text-sm font-sans font-bold mb-2 text-zinc-400 capitalize">
												{category}
											</h3>
											<div className="grid grid-cols-2 gap-2">
												{skills.map((skill, index) => (
													<div
														key={index}
														className="flex items-center space-x-2 text-gray-300"
													>
														<skill.icon className="w-4 h-4 text-zinc-400" />
														<span className="font-sans text-sm">
															{skill.name}
														</span>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Contact */}
							<div className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm">
								<h2 className="text-xl font-sans font-bold mb-4 text-zinc-400">
									Contact
								</h2>
								<div className="space-y-3">
									<a
										href={data.contact.email.url}
										className="flex items-center space-x-3 text-gray-300 hover:text-zinc-400 transition-colors"
									>
										<Mail className="w-5 h-5" />
										<span className="font-sans text-sm">
											{data.contact.email.address}
										</span>
									</a>
									<a
										href={data.contact.phone.url}
										className="flex items-center space-x-3 text-gray-300 hover:text-zinc-400 transition-colors"
									>
										<Phone className="w-5 h-5" />
										<span className="font-sans text-sm">
											{data.contact.phone.number}
										</span>
									</a>
								</div>
							</div>
						</div>

						{/* Right Column - Experience & Projects */}
						<div className="col-span-12 lg:col-span-8 space-y-4">
							{/* Experience */}
							<div className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm">
								<h2 className="text-xl font-sans font-bold mb-4 text-zinc-400">
									Experience
								</h2>
								<div className="space-y-4">
									{data.experience.map((job, index) => (
										<div
											key={index}
											className="border-b border-zinc-400/20 pb-4 last:border-0 last:pb-0"
										>
											<div className="flex justify-between items-start mb-2">
												<div>
													<h3 className="text-lg font-sans font-bold text-zinc-400">
														{job.title}
													</h3>
													<a
														href={job.url}
														target="_blank"
														rel="noopener noreferrer"
														className="text-zinc-400 hover:text-zinc-400 transition-colors text-sm"
													>
														{job.company}
													</a>
												</div>
												<span className="text-gray-300 font-sans text-sm">
													{job.period}
												</span>
											</div>
											<ul className="list-disc list-inside text-gray-300 space-y-1 mb-2">
												{job.responsibilities.map((responsibility, idx) => (
													<li key={idx} className="font-sans text-sm">
														{responsibility}
													</li>
												))}
											</ul>
											<div className="flex flex-wrap gap-2">
												{job?.tech?.map((tech, idx) => (
													<span
														key={idx}
														className="px-2 py-1 text-xs font-sans bg-black/50 rounded-full text-zinc-400"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Projects */}
							<div className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm">
								<h2 className="text-xl font-sans font-bold mb-4 text-zinc-400">
									Projects
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{data.projects.map((project, index) => (
										<div
											key={index}
											className="bg-black/30 rounded-xl p-4 border border-zinc-400/10"
										>
											<h3 className="text-lg font-sans font-bold mb-2 text-zinc-400">
												{project.title}
											</h3>
											<p className="text-gray-300 text-sm mb-3">
												{project.description}
											</p>
											<div className="mb-3">
												<div className="flex flex-wrap gap-2">
													{project.tech.map((tech, idx) => (
														<span
															key={idx}
															className="px-2 py-1 text-xs font-sans bg-black/50 rounded-full text-zinc-400"
														>
															{tech}
														</span>
													))}
												</div>
											</div>
											<div className="flex flex-wrap gap-2">
												{project.metrics.map((metric, idx) => (
													<span
														key={idx}
														className="px-2 py-1 text-xs font-sans bg-zinc-400/10 rounded-full text-zinc-400"
													>
														{metric}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate6;
