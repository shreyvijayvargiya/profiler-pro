import React, { useState, useEffect, useRef } from "react";
import {
	Gamepad2,
	Code2,
	Zap,
	GitCompareArrows,
	Mail,
	Phone,
	Globe,
	AlertTriangle,
	Cpu,
	Memory,
	Network,
	Settings,
	Boxes,
	Layers,
	Sparkles,
	Target,
	Trophy,
	Medal,
	Star,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Prithvi Raj",
		title: "Game Developer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Game Developer specializing in Unity and Unreal Engine development, with a focus on creating immersive gaming experiences.",
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
		text: "Game Developer with expertise in building immersive gaming experiences using Unity and Unreal Engine. Passionate about game mechanics, physics, and creating engaging gameplay. Currently developing games at",
		website: {
			text: "GameCorp",
			url: "https://gamecorp.com",
		},
	},
	experience: [
		{
			title: "Senior Game Developer",
			company: "GameCraft",
			url: "https://gamecraft.com",
			period: "2022 - Present",
			responsibilities: [
				"Led development of award-winning mobile game with 1M+ downloads",
				"Implemented advanced physics and particle systems",
				"Optimized game performance for various platforms",
				"Mentored junior developers in game development best practices",
			],
			tech: ["Unity", "C#", "Shader Graph", "VFX Graph"],
		},
		{
			title: "Game Developer",
			company: "PixelPlay",
			url: "https://pixelplay.com",
			period: "2020 - 2022",
			responsibilities: [
				"Developed multiplayer game mechanics and networking",
				"Created procedural level generation systems",
				"Implemented AI behaviors and pathfinding",
				"Optimized game assets and loading times",
			],
			tech: ["Unreal Engine", "C++", "Blueprints", "Networking"],
		},
	],
	skills: {
		engines: [
			{ name: "Unity", icon: Gamepad2 },
			{ name: "Unreal Engine", icon: Gamepad2 },
			{ name: "Godot", icon: Gamepad2 },
			{ name: "Custom Engine", icon: Gamepad2 },
		],
		programming: [
			{ name: "C#", icon: Code2 },
			{ name: "C++", icon: Code2 },
			{ name: "GLSL", icon: Code2 },
			{ name: "Python", icon: Code2 },
		],
		graphics: [
			{ name: "Shader Programming", icon: Sparkles },
			{ name: "VFX", icon: Sparkles },
			{ name: "Particle Systems", icon: Sparkles },
			{ name: "Post-Processing", icon: Sparkles },
		],
		gameplay: [
			{ name: "Physics", icon: Target },
			{ name: "AI", icon: Cpu },
			{ name: "Networking", icon: Network },
			{ name: "Animation", icon: Layers },
		],
		tools: [
			{ name: "Blender", icon: Boxes },
			{ name: "Maya", icon: Boxes },
			{ name: "Substance", icon: Boxes },
			{ name: "Git", icon: GitCompareArrows },
		],
		optimization: [
			{ name: "Performance", icon: Zap },
			{ name: "Memory", icon: Memory },
			{ name: "Loading", icon: Settings },
			{ name: "Debugging", icon: AlertTriangle },
		],
	},
	projects: [
		{
			title: "Epic Adventure Game",
			description:
				"Developed an open-world RPG with dynamic weather and day/night cycles",
			tech: ["Unity", "C#", "Shader Graph", "Networking"],
			metrics: ["4.8/5 rating", "500K+ downloads", "Best Game 2023"],
		},
		{
			title: "Multiplayer Shooter",
			description:
				"Created a fast-paced multiplayer shooter with advanced physics",
			tech: ["Unreal Engine", "C++", "Networking", "Blueprints"],
			metrics: ["1M+ players", "4.9/5 rating", "Esports Ready"],
		},
	],
	achievements: [
		{
			title: "Best Game Design 2023",
			icon: Trophy,
			description: "Awarded for innovative gameplay mechanics",
		},
		{
			title: "Technical Excellence",
			icon: Medal,
			description: "Recognition for advanced graphics implementation",
		},
		{
			title: "Community Choice",
			icon: Star,
			description: "Voted best game by gaming community",
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

const PortfolioTemplate7 = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isScrolled, setIsScrolled] = useState(false);
	const heroRef = useRef(null);
	const navRef = useRef(null);
	const backgroundRef = useRef(null);
	const sectionsRef = useRef([]);

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

			// Sections animation
			sectionsRef.current.forEach((section, index) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 50,
					duration: 1,
					delay: index * 0.2,
					ease: "power3.out",
				});
			});

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		};

		initGSAP();
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white overflow-hidden">
			{/* Gaming-themed background */}
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
							<Gamepad2 className="w-6 h-6 text-zinc-400" />
							<span className="font-sans text-zinc-400">Game Dev</span>
						</div>
						<div className="flex space-x-8">
							{[
								"about",
								"experience",
								"skills",
								"projects",
								"achievements",
								"contact",
							].map((section) => (
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
							))}
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
								<img
									src={data.personalInfo.image}
									alt={data.personalInfo.name}
									className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
								/>
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
								<h2 className="text-2xl font-sans font-bold mb-6 text-zinc-400">
									Skills
								</h2>
								<div className="space-y-6">
									{Object.entries(data.skills).map(([category, skills]) => (
										<div key={category}>
											<h3 className="text-lg font-sans font-semibold mb-3 text-zinc-400 capitalize">
												{category}
											</h3>
											<div className="grid grid-cols-2 gap-3">
												{skills.map((skill, index) => (
													<div
														key={index}
														className="flex items-center space-x-2 text-gray-300"
													>
														<skill.icon className="w-5 h-5 text-zinc-400" />
														<span>{skill.name}</span>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Right Column - Experience, Projects, etc. */}
						<div className="col-span-12 lg:col-span-8 space-y-4">
							{/* About */}
							<div
								ref={(el) => (sectionsRef.current[0] = el)}
								className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm"
							>
								<h2 className="text-2xl font-sans font-bold mb-4 text-zinc-400">
									About
								</h2>
								<p className="text-gray-300">
									{data.about.text}{" "}
									<a
										href={data.about.website.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-zinc-400 hover:text-zinc-300"
									>
										{data.about.website.text}
									</a>
								</p>
							</div>

							{/* Experience */}
							<div
								ref={(el) => (sectionsRef.current[1] = el)}
								className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm"
							>
								<h2 className="text-2xl font-sans font-bold mb-6 text-zinc-400">
									Experience
								</h2>
								<div className="space-y-6">
									{data.experience.map((job, index) => (
										<div
											key={index}
											className="border-l-2 border-zinc-400/20 pl-4"
										>
											<h3 className="text-xl font-sans font-semibold text-zinc-400">
												{job.title}
											</h3>
											<a
												href={job.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-300 hover:text-zinc-400"
											>
												{job.company}
											</a>
											<p className="text-gray-400 mb-3">{job.period}</p>
											<ul className="list-disc list-inside text-gray-300 space-y-2">
												{job.responsibilities.map((resp, idx) => (
													<li key={idx}>{resp}</li>
												))}
											</ul>
											<div className="flex flex-wrap gap-2 mt-3">
												{job?.tech?.map((tech, idx) => (
													<span
														key={idx}
														className="px-2 py-1 bg-zinc-400/10 rounded text-zinc-400 text-sm"
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
							<div
								ref={(el) => (sectionsRef.current[2] = el)}
								className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm"
							>
								<h2 className="text-2xl font-sans font-bold mb-6 text-zinc-400">
									Projects
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{data.projects.map((project, index) => (
										<div
											key={index}
											className="bg-black/30 rounded-xl p-4 border border-zinc-400/20"
										>
											<h3 className="text-xl font-sans font-semibold text-zinc-400 mb-2">
												{project.title}
											</h3>
											<p className="text-gray-300 mb-3">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2 mb-3">
												{project.tech.map((tech, idx) => (
													<span
														key={idx}
														className="px-2 py-1 bg-zinc-400/10 rounded text-zinc-400 text-sm"
													>
														{tech}
													</span>
												))}
											</div>
											<div className="flex flex-wrap gap-2">
												{project.metrics.map((metric, idx) => (
													<span
														key={idx}
														className="px-2 py-1 bg-zinc-400/5 rounded text-zinc-400 text-sm"
													>
														{metric}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Achievements */}
							<div
								ref={(el) => (sectionsRef.current[3] = el)}
								className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm"
							>
								<h2 className="text-2xl font-sans font-bold mb-6 text-zinc-400">
									Achievements
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{data.achievements.map((achievement, index) => (
										<div
											key={index}
											className="bg-black/30 rounded-xl p-4 border border-zinc-400/20 text-center"
										>
											<achievement.icon className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
											<h3 className="text-lg font-sans font-semibold text-zinc-400 mb-2">
												{achievement.title}
											</h3>
											<p className="text-gray-300">{achievement.description}</p>
										</div>
									))}
								</div>
							</div>

							{/* Contact */}
							<div
								ref={(el) => (sectionsRef.current[4] = el)}
								className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm"
							>
								<h2 className="text-2xl font-sans font-bold mb-6 text-zinc-400">
									Contact
								</h2>
								<div className="space-y-4">
									<a
										href={data.contact.email.url}
										className="flex items-center space-x-3 text-gray-300 hover:text-zinc-400"
									>
										<Mail className="w-5 h-5" />
										<span>{data.contact.email.address}</span>
									</a>
									<a
										href={data.contact.phone.url}
										className="flex items-center space-x-3 text-gray-300 hover:text-zinc-400"
									>
										<Phone className="w-5 h-5" />
										<span>{data.contact.phone.number}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate7;
