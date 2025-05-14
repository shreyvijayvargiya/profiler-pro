import React, { useState, useEffect, useRef } from "react";
import {
	Palette,
	Figma,
	Pencil,
	Layout,
	Layers,
	Image,
	Monitor,
	Smartphone,
	Github,
	Linkedin,
	Globe,
	Mail,
	Phone,
	Brush,
	PenTool,
	Type,
	Grid,
	Shapes,
	Sparkles,
	Lightbulb,
	Zap,
	Target,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "John Doe",
		title: "Design Engineer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Creative Design Engineer with expertise in UI/UX design, product design, and design systems.",
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
				label: "Portfolio",
				url: "https://johndoe.dev",
			},
		],
	},
	about: {
		text: "Design Engineer passionate about creating intuitive and delightful user experiences. Specializing in design systems, interactive prototypes, and bridging the gap between design and development. Currently crafting beautiful interfaces at",
		website: {
			text: "TechCorp",
			url: "https://techcorp.com",
		},
	},
	experience: [
		{
			title: "Senior Design Engineer",
			company: "DesignCraft",
			url: "https://designcraft.com",
			period: "2022 - Present",
			responsibilities: [
				"Led the development of a comprehensive design system used by 50+ designers",
				"Reduced design-to-development handoff time by 60% through automated workflows",
				"Created interactive prototypes resulting in 40% faster user testing cycles",
				"Implemented micro-interactions increasing user engagement by 35%",
			],
			tech: ["Figma", "React", "Framer", "Storybook", "Webflow", "GSAP"],
		},
		{
			title: "UI/UX Engineer",
			company: "CreativeFlow",
			url: "https://creativeflow.com",
			period: "2020 - 2022",
			responsibilities: [
				"Designed and developed responsive web applications with 99% accessibility scores",
				"Created animation systems improving user engagement metrics by 45%",
				"Built interactive design documentation viewed by 10K+ developers monthly",
			],
			tech: ["Sketch", "React", "Three.js", "CSS/SASS", "Motion Design"],
		},
	],
	skills: {
		design: [
			{ name: "UI Design", icon: Layout },
			{ name: "Design Systems", icon: Grid },
			{ name: "Typography", icon: Type },
			{ name: "Color Theory", icon: Palette },
		],
		tools: [
			{ name: "Figma", icon: Figma },
			{ name: "Sketch", icon: PenTool },
			{ name: "Adobe XD", icon: Layers },
			{ name: "Framer", icon: Zap },
		],
		prototyping: [
			{ name: "Interactions", icon: Target },
			{ name: "Animations", icon: Sparkles },
			{ name: "Micro-interactions", icon: Lightbulb },
			{ name: "Responsive", icon: Monitor },
		],
		development: [
			{ name: "HTML/CSS", icon: Layout },
			{ name: "JavaScript", icon: Shapes },
			{ name: "React", icon: Grid },
			{ name: "GSAP", icon: Zap },
		],
		visual: [
			{ name: "Illustration", icon: Pencil },
			{ name: "Iconography", icon: Image },
			{ name: "Branding", icon: Brush },
			{ name: "Motion", icon: Sparkles },
		],
	},
	projects: [
		{
			title: "Enterprise Design System",
			description:
				"Created a comprehensive design system powering applications used by millions",
			tech: ["Figma", "React", "Storybook"],
			metrics: [
				"200+ Components",
				"50+ Design Tokens",
				"98% Consistency Score",
			],
		},
		{
			title: "Interactive Product Showcase",
			description: "Developed an immersive 3D product visualization platform",
			tech: ["Three.js", "GSAP", "WebGL"],
			metrics: ["45% Engagement Increase", "3s Load Time", "60fps Animations"],
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

const PortfolioTemplate4 = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isScrolled, setIsScrolled] = useState(false);

	// Refs for GSAP animations
	const navRef = useRef(null);
	const heroRef = useRef(null);
	const sectionsRef = useRef([]);
	const cursorRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Custom cursor effect
	useEffect(() => {
		const handleMouseMove = (e) => {
			if (cursorRef.current) {
				cursorRef.current.style.left = e.clientX + "px";
				cursorRef.current.style.top = e.clientY + "px";
			}
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// GSAP Animations
	useEffect(() => {
		const initGSAP = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
			const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default;

			gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

			// Hero section animation
			const tl = gsap.timeline();

			tl.from(heroRef?.current?.querySelector("h1"), {
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

			// Sections animation with creative reveals
			sectionsRef.current.forEach((section, index) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 50,
					rotation: 5,
					duration: 1,
					ease: "power3.out",
					delay: index * 0.2,
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
		<div className="min-h-screen bg-[#FAFAFA] text-gray-900">
			{/* Custom cursor */}
			<div
				ref={cursorRef}
				className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
				style={{
					background: "rgba(255, 255, 255, 0.2)",
					borderRadius: "50%",
					transform: "translate(-50%, -50%)",
					transition: "transform 0.1s ease-out",
				}}
			/>

			{/* Creative background */}
			<div className="fixed inset-0 z-0 opacity-10">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-white to-transparent" />
			</div>

			{/* Navigation */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled
						? "bg-white/80 backdrop-blur-md shadow-lg"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2 text-gray-900">
							<Palette className="w-6 h-6" />
							<span className="font-display text-xl">Design</span>
						</div>
						<div className="flex space-x-8">
							{sections.map((section) => (
								<button
									key={section.id}
									onClick={() => handleSectionClick(section.id)}
									className={`text-sm font-medium transition-colors ${
										activeSection === section.id
											? "text-purple-600"
											: "text-gray-600 hover:text-purple-600"
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
						<h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
							{data.personalInfo.name}
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 mb-8">
							{data.personalInfo.title}
						</p>
						<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
							{data.personalInfo.summary}
						</p>
						<div className="flex justify-center space-x-6">
							{data.personalInfo.socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 hover:text-purple-600 transition-colors"
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
					<h2 className="text-3xl font-display font-bold mb-12 text-gray-900">
						Design Expertise
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Object.entries(data.skills).map(([category, skills]) => (
							<div
								key={category}
								className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
							>
								<h3 className="text-xl font-display font-bold mb-6 text-gray-900 capitalize">
									{category}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{skills.map((skill, index) => (
										<div
											key={index}
											className="flex items-center space-x-3 text-gray-600"
										>
											<skill.icon className="w-5 h-5 text-purple-600" />
											<span>{skill.name}</span>
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
				className="py-20 bg-gradient-to-b from-white to-purple-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-display font-bold mb-12 text-gray-900">
						Featured Work
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.projects.map((project, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
							>
								<h3 className="text-xl font-display font-bold mb-4 text-gray-900">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-6">{project.description}</p>
								<div className="mb-6">
									<h4 className="text-sm font-medium text-gray-900 mb-2">
										Technologies:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, idx) => (
											<span
												key={idx}
												className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div>
									<h4 className="text-sm font-medium text-gray-900 mb-2">
										Impact:
									</h4>
									<ul className="list-disc list-inside text-gray-600">
										{project.metrics.map((metric, idx) => (
											<li key={idx}>{metric}</li>
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
					<h2 className="text-3xl font-display font-bold mb-12 text-gray-900">
						Work Experience
					</h2>
					<div className="space-y-12">
						{data.experience.map((job, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
							>
								<div className="flex justify-between items-start mb-6">
									<div>
										<h3 className="text-xl font-display font-bold text-gray-900 mb-2">
											{job.title}
										</h3>
										<a
											href={job.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-purple-600 hover:text-purple-700 transition-colors"
										>
											{job.company}
										</a>
									</div>
									<span className="text-gray-500">{job.period}</span>
								</div>
								<ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
									{job.responsibilities.map((responsibility, idx) => (
										<li key={idx}>{responsibility}</li>
									))}
								</ul>
								<div className="flex flex-wrap gap-2">
									{job?.tech?.map((tech, idx) => (
										<span
											key={idx}
											className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full"
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
				className="py-20 bg-gradient-to-t from-white to-purple-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-2xl p-8 shadow-xl">
						<h2 className="text-3xl font-display font-bold mb-8 text-gray-900">
							Let's Create Together
						</h2>
						<div className="space-y-6">
							<a
								href={data.contact.email.url}
								className="flex items-center space-x-4 text-gray-600 hover:text-purple-600 transition-colors"
							>
								<Mail className="w-6 h-6" />
								<span>{data.contact.email.address}</span>
							</a>
							<a
								href={data.contact.phone.url}
								className="flex items-center space-x-4 text-gray-600 hover:text-purple-600 transition-colors"
							>
								<Phone className="w-6 h-6" />
								<span>{data.contact.phone.number}</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate4;
