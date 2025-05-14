import React, { useState, useEffect, useRef } from "react";
import {
	Server,
	Database,
	Code2,
	GitBranch,
	Terminal,
	Cpu,
	Cloud,
	Github,
	Linkedin,
	Globe,
	Mail,
	Phone,
	Docker,
	Layers,
	Shield,
	Workflow,
	Settings,
	LineChart,
	Network,
	Lock,
	Boxes,
	Search,
	Fish,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Alex Fredrica",
		title: "Backend Engineer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Experienced Backend Engineer specializing in distributed systems, microservices architecture, and cloud infrastructure.",
		socialLinks: [
			{
				icon: Github,
				label: "GitHub",
				url: "https://github.com/johndoe",
			},
			{
				icon: Linkedin,
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
		text: "Backend engineer with expertise in building scalable distributed systems and microservices. Passionate about system design, performance optimization, and cloud architecture. Currently focused on developing high-performance APIs and real-time data processing systems at",
		website: {
			text: "TechCorp",
			url: "https://techcorp.com",
		},
	},
	experience: [
		{
			title: "Senior Backend Engineer",
			company: "TechCorp",
			url: "https://techcorp.com",
			period: "2022 - Present",
			responsibilities: [
				"Designed and implemented microservices architecture handling 1M+ requests/day",
				"Optimized database performance reducing query response time by 60%",
				"Led migration of legacy systems to cloud-native architecture",
				"Implemented CI/CD pipelines reducing deployment time by 70%",
			],
			tech: ["Node.js", "Python", "MongoDB", "Redis", "Docker", "AWS"],
		},
		{
			title: "Backend Developer",
			company: "DataSys",
			url: "https://datasys.com",
			period: "2020 - 2022",
			responsibilities: [
				"Built real-time data processing pipeline handling 5TB+ data daily",
				"Implemented caching strategies improving API response time by 40%",
				"Developed automated scaling solutions for high-traffic periods",
			],
			tech: ["Python", "PostgreSQL", "Kafka", "ELK Stack", "GCP"],
		},
	],
	skills: {
		core: [
			{ name: "System Design", icon: Workflow },
			{ name: "API Development", icon: Code2 },
			{ name: "Database Design", icon: Database },
			{ name: "Cloud Architecture", icon: Cloud },
		],
		technologies: [
			{ name: "Node.js", icon: Server },
			{ name: "Python", icon: Terminal },
			{ name: "Go", icon: Cpu },
			{ name: "Docker", icon: Fish },
		],
		databases: [
			{ name: "PostgreSQL", icon: Database },
			{ name: "MongoDB", icon: Boxes },
			{ name: "Redis", icon: Layers },
			{ name: "Elasticsearch", icon: Search },
		],
		infrastructure: [
			{ name: "AWS", icon: Cloud },
			{ name: "Kubernetes", icon: Network },
			{ name: "CI/CD", icon: GitBranch },
			{ name: "Terraform", icon: Settings },
		],
		security: [
			{ name: "OAuth 2.0", icon: Lock },
			{ name: "JWT", icon: Shield },
			{ name: "API Security", icon: Shield },
		],
		monitoring: [
			{ name: "ELK Stack", icon: LineChart },
			{ name: "Prometheus", icon: LineChart },
			{ name: "Grafana", icon: LineChart },
		],
	},
	projects: [
		{
			title: "Distributed Cache System",
			description:
				"Implemented a distributed caching system supporting 100K+ concurrent users",
			tech: ["Go", "Redis", "Docker"],
			metrics: ["99.99% uptime", "< 5ms latency", "50% cost reduction"],
		},
		{
			title: "Real-time Analytics Pipeline",
			description: "Built streaming data pipeline processing 1TB+ data daily",
			tech: ["Python", "Kafka", "Elasticsearch"],
			metrics: ["5M+ events/day", "Sub-second latency", "99.9% accuracy"],
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

const PortfolioTemplate3 = () => {
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

			// Terminal-like typing effect for hero section
			const heroText = heroRef?.current?.querySelector("h1");
			const text = heroText.textContent;
			heroText.textContent = "";

			const tl = gsap.timeline();

			tl.from(heroText, {
				duration: 1,
				onStart: () => {
					let i = 0;
					const interval = setInterval(() => {
						if (i <= text.length) {
							heroText.textContent = text.slice(0, i) + "█";
							i++;
						} else {
							clearInterval(interval);
							heroText.textContent = text;
						}
					}, 50);
				},
			});

			// Sections fade in with code-like effect
			sectionsRef.current.forEach((section, index) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 30,
					duration: 0.8,
					delay: index * 0.2,
					ease: "power2.out",
					onStart: () => {
						section.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
					},
				});
			});

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
		{ id: "projects", label: "Projects" },
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
				scrollTo: { y: element, offsetY: 80 },
				ease: "power3.inOut",
			});
		}
	};

	return (
		<div className="min-h-screen bg-[#1E1E1E] text-[#D4D4D4]">
			{/* Terminal-like background */}
			<div ref={backgroundRef} className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#2D2D2D_1px,transparent_1px),linear-gradient(to_bottom,#2D2D2D_1px,transparent_1px)] bg-[size:24px_24px]" />
				<div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-transparent to-[#1E1E1E]" />
			</div>

			{/* Navigation */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-[#1E1E1E]/90 backdrop-blur-md" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2 text-[#569CD6]">
							<Terminal className="w-5 h-5" />
							<span className="font-mono">~/backend-dev</span>
						</div>
						<div className="flex space-x-8">
							{sections.map((section) => (
								<button
									key={section.id}
									onClick={() => handleSectionClick(section.id)}
									className={`text-sm font-mono transition-colors ${
										activeSection === section.id
											? "text-[#569CD6]"
											: "text-[#D4D4D4] hover:text-[#569CD6]"
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
						<h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-[#569CD6]">
							{data.personalInfo.name}
						</h1>
						<p className="text-xl md:text-2xl font-mono text-[#9CDCFE] mb-8">
							{data.personalInfo.title}
						</p>
						<p className="text-lg text-[#D4D4D4] mb-8 max-w-2xl mx-auto">
							{data.personalInfo.summary}
						</p>
						<div className="flex justify-center space-x-6">
							{data.personalInfo.socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#D4D4D4] hover:text-[#569CD6] transition-colors"
								>
									<link.icon className="w-6 h-6" />
								</a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				ref={(el) => (sectionsRef.current[0] = el)}
				className="py-20"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-mono font-bold mb-12 text-[#569CD6]">
						Technical Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Object.entries(data.skills).map(([category, skills]) => (
							<div
								key={category}
								className="bg-[#2D2D2D] rounded-lg p-6 border border-[#569CD6]/20"
							>
								<h3 className="text-xl font-mono font-bold mb-6 text-[#9CDCFE] capitalize">
									{category}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{skills.map((skill, index) => (
										<div
											key={index}
											className="flex items-center space-x-3 text-[#D4D4D4]"
										>
											<skill.icon className="w-5 h-5 text-[#569CD6]" />
											<span className="font-mono">{skill.name}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				ref={(el) => (sectionsRef.current[1] = el)}
				className="py-20"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-mono font-bold mb-12 text-[#569CD6]">
						System Architecture Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.projects.map((project, index) => (
							<div
								key={index}
								className="bg-[#2D2D2D] rounded-lg p-6 border border-[#569CD6]/20"
							>
								<h3 className="text-xl font-mono font-bold mb-4 text-[#9CDCFE]">
									{project.title}
								</h3>
								<p className="text-[#D4D4D4] mb-4">{project.description}</p>
								<div className="mb-4">
									<h4 className="text-sm font-mono text-[#569CD6] mb-2">
										Tech Stack:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, idx) => (
											<span
												key={idx}
												className="px-2 py-1 text-sm font-mono bg-[#1E1E1E] rounded text-[#9CDCFE]"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div>
									<h4 className="text-sm font-mono text-[#569CD6] mb-2">
										Key Metrics:
									</h4>
									<ul className="list-disc list-inside text-[#D4D4D4]">
										{project.metrics.map((metric, idx) => (
											<li key={idx} className="font-mono text-sm">
												{metric}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section
				id="experience"
				ref={(el) => (sectionsRef.current[2] = el)}
				className="py-20"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-mono font-bold mb-12 text-[#569CD6]">
						Work Experience
					</h2>
					<div className="space-y-12">
						{data.experience.map((job, index) => (
							<div
								key={index}
								className="bg-[#2D2D2D] rounded-lg p-6 border border-[#569CD6]/20"
							>
								<div className="flex justify-between items-start mb-4">
									<div>
										<h3 className="text-xl font-mono font-bold text-[#9CDCFE] mb-2">
											{job.title}
										</h3>
										<a
											href={job.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#569CD6] hover:text-[#9CDCFE] transition-colors"
										>
											{job.company}
										</a>
									</div>
									<span className="text-[#D4D4D4] font-mono">{job.period}</span>
								</div>
								<ul className="list-disc list-inside text-[#D4D4D4] space-y-2 mb-4">
									{job.responsibilities.map((responsibility, idx) => (
										<li key={idx} className="font-mono">
											{responsibility}
										</li>
									))}
								</ul>
								<div className="flex flex-wrap gap-2">
									{job?.tech?.map((tech, idx) => (
										<span
											key={idx}
											className="px-2 py-1 text-sm font-mono bg-[#1E1E1E] rounded text-[#9CDCFE]"
										>
											{tech}
										</span>
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
				ref={(el) => (sectionsRef.current[3] = el)}
				className="py-20"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-[#2D2D2D] rounded-lg p-8 border border-[#569CD6]/20">
						<h2 className="text-3xl font-mono font-bold mb-8 text-[#569CD6]">
							Contact
						</h2>
						<div className="space-y-6">
							<a
								href={data.contact.email.url}
								className="flex items-center space-x-4 text-[#D4D4D4] hover:text-[#569CD6] transition-colors"
							>
								<Mail className="w-6 h-6" />
								<span className="font-mono">{data.contact.email.address}</span>
							</a>
							<a
								href={data.contact.phone.url}
								className="flex items-center space-x-4 text-[#D4D4D4] hover:text-[#569CD6] transition-colors"
							>
								<Phone className="w-6 h-6" />
								<span className="font-mono">{data.contact.phone.number}</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate3;
