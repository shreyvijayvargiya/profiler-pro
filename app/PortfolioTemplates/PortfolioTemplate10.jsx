import React, { useState, useEffect, useRef } from "react";
import {
	Gamepad2,
	Code2,
	Palette,
	Zap,
	Cpu,
	Server,
	Database,
	Shield,
	Workflow,
	Settings,
	LineChart,
	Network,
	Lock,
	Boxes,
	Monitor,
	Activity,
	Mail,
	Phone,
	Fish,
	GitCompareArrows,
	Unity,
	Unreal,
	Blender,
	Maya,
	Zbrush,
	Photoshop,
	AfterEffects,
	PremierePro,
	Gamepad,
	Gamepad2Icon,
	Settings2Icon,
	ImageIcon,
	Crop,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Net Ninja",
		title: "Game Developer & Technical Artist",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		image:
			"https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
		summary:
			"Game Developer specializing in Unity and Unreal Engine development, with expertise in technical art, gameplay programming, and performance optimization. Passionate about creating immersive gaming experiences.",
		socialLinks: [
			{
				icon: GitCompareArrows,
				label: "GitHub",
				url: "https://github.com/alexchen",
			},
			{
				icon: Gamepad2,
				label: "Itch.io",
				url: "https://alexchen.itch.io",
			},
			{
				icon: Code2,
				label: "Portfolio",
				url: "https://alexchen.dev",
			},
		],
	},
	about: {
		text: "Game Developer with 5+ years of experience in Unity and Unreal Engine development. Specialized in technical art, gameplay programming, and performance optimization. Currently leading game development at",
		website: {
			text: "GameForge Studios",
			url: "https://gameforge.com",
		},
	},
	experience: [
		{
			title: "Senior Game Developer",
			company: "GameForge Studios",
			url: "https://gameforge.com",
			period: "2022 - Present",
			responsibilities: [
				"Led development of AAA mobile game with 1M+ downloads",
				"Optimized game performance reducing load times by 60%",
				"Implemented advanced shader systems for realistic lighting",
				"Mentored junior developers in game development best practices",
			],
			tech: [
				"Unity",
				"C#",
				"HLSL",
				"Shader Graph",
				"VFX Graph",
				"Performance Profiling",
			],
		},
		{
			title: "Technical Artist",
			company: "PixelPerfect Games",
			url: "https://pixelperfect.com",
			period: "2020 - 2022",
			responsibilities: [
				"Developed custom shader systems for stylized rendering",
				"Created procedural animation systems",
				"Optimized art pipeline reducing asset creation time by 40%",
				"Implemented advanced particle systems for VFX",
			],
			tech: ["Unity", "Unreal", "Blender", "Maya", "Substance", "HLSL/GLSL"],
		},
	],
	skills: {
		engines: [
			{ name: "Unity", icon: Gamepad2Icon },
			{ name: "Unreal", icon: Gamepad },
			{ name: "Godot", icon: Gamepad2 },
			{ name: "Custom Engine", icon: Code2 },
		],
		programming: [
			{ name: "C#", icon: Code2 },
			{ name: "C++", icon: Code2 },
			{ name: "HLSL/GLSL", icon: Code2 },
			{ name: "Python", icon: Code2 },
		],
		art: [
			{ name: "Blender", icon: Settings2Icon },
			{ name: "Maya", icon: Settings2Icon },
			{ name: "ZBrush", icon: Settings2Icon },
			{ name: "Substance", icon: Palette },
		],
		vfx: [
			{ name: "VFX Graph", icon: Zap },
			{ name: "Shader Graph", icon: Palette },
			{ name: "Particle Systems", icon: Activity },
			{ name: "Post Processing", icon: Monitor },
		],
		tools: [
			{ name: "Photoshop", icon: ImageIcon },
			{ name: "After Effects", icon: Crop },
			{ name: "Premiere Pro", icon: Crop },
			{ name: "Git", icon: GitCompareArrows },
		],
		optimization: [
			{ name: "Performance", icon: Zap },
			{ name: "Memory", icon: Database },
			{ name: "Rendering", icon: Monitor },
			{ name: "Networking", icon: Network },
		],
	},
	projects: [
		{
			title: "Epic Fantasy RPG",
			description:
				"Lead developer for an open-world RPG with dynamic weather system and advanced AI",
			tech: ["Unity", "C#", "HLSL", "VFX Graph", "Procedural Generation"],
			metrics: ["60 FPS on mobile", "1M+ downloads", "4.8/5 rating"],
		},
		{
			title: "Procedural Animation System",
			description:
				"Developed a custom procedural animation system for realistic character movement",
			tech: ["Unity", "C#", "Maya", "Animation Rigging"],
			metrics: [
				"40% faster animation",
				"Reduced memory usage",
				"Cross-platform",
			],
		},
	],
	contact: {
		email: {
			address: "alex.chen@gameforge.com",
			url: "mailto:alex.chen@gameforge.com",
		},
		phone: {
			number: "+1 (555) 987-6543",
			url: "tel:+15559876543",
		},
	},
};

const PortfolioTemplate10 = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isScrolled, setIsScrolled] = useState(false);

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

	useEffect(() => {
		const initGSAP = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
			const ScrollToPlugin = (await import("gsap/ScrollToPlugin")).default;

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
		};

		initGSAP();
	}, []);

	return (
		<div className="min-h-screen bg-[#1E1E1E] text-[#D4D4D4]">
			{/* Background with grid pattern */}
			<div
				ref={backgroundRef}
				className="fixed inset-0 z-0 opacity-5"
				style={{
					backgroundImage: `linear-gradient(#2D2D2D 1px, transparent 1px),
            linear-gradient(90deg, #2D2D2D 1px, transparent 1px)`,
					backgroundSize: "50px 50px",
				}}
			/>

			{/* Navigation */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-[#2D2D2D]/80 backdrop-blur-md" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2">
							<Gamepad2 className="w-6 h-6 text--zinc-400" />
							<span className="font-mono text--zinc-400">GameDev</span>
						</div>
						<div className="flex space-x-8">
							{["about", "experience", "skills", "projects", "contact"].map(
								(section) => (
									<button
										key={section}
										onClick={() => setActiveSection(section)}
										className={`font-mono text-sm ${
											activeSection === section
												? "text--zinc-400"
												: "text-[#D4D4D4] hover:text--zinc-400"
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

			{/* Hero Section */}
			<section
				ref={heroRef}
				className="relative min-h-screen flex items-center justify-center pt-16"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 text--zinc-400">
							{data.personalInfo.name}
						</h1>
						<p className="text-xl md:text-2xl font-mono text--zinc-400 mb-8">
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
									className="text-[#D4D4D4] hover:text--zinc-400 transition-colors"
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
					<h2 className="text-3xl font-mono font-bold mb-12 text--zinc-400">
						Game Development Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{Object.entries(data.skills).map(([category, skills]) => (
							<div
								key={category}
								className="bg-[#2D2D2D] rounded-lg p-6 border border--zinc-400/20"
							>
								<h3 className="text-xl font-mono font-bold mb-6 text--zinc-400 capitalize">
									{category}
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{skills.map((skill, index) => (
										<div
											key={index}
											className="flex items-center space-x-3 text-[#D4D4D4]"
										>
											<skill.icon className="w-5 h-5 text--zinc-400" />
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
					<h2 className="text-3xl font-mono font-bold mb-12 text--zinc-400">
						Game Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.projects.map((project, index) => (
							<div
								key={index}
								className="bg-[#2D2D2D] rounded-lg p-6 border border--zinc-400/20"
							>
								<h3 className="text-xl font-mono font-bold mb-4 text--zinc-400">
									{project.title}
								</h3>
								<p className="text-[#D4D4D4] mb-4">{project.description}</p>
								<div className="mb-4">
									<h4 className="text-sm font-mono text--zinc-400 mb-2">
										Tech Stack:
									</h4>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech, idx) => (
											<span
												key={idx}
												className="px-2 py-1 text-sm font-mono bg-[#1E1E1E] rounded text--zinc-400"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div>
									<h4 className="text-sm font-mono text--zinc-400 mb-2">
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
					<h2 className="text-3xl font-mono font-bold mb-12 text--zinc-400">
						Game Development Experience
					</h2>
					<div className="space-y-12">
						{data.experience.map((job, index) => (
							<div
								key={index}
								className="bg-[#2D2D2D] rounded-lg p-6 border border--zinc-400/20"
							>
								<div className="flex justify-between items-start mb-4">
									<div>
										<h3 className="text-xl font-mono font-bold text--zinc-400 mb-2">
											{job.title}
										</h3>
										<a
											href={job.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text--zinc-400 hover:text-zinc-600 transition-colors"
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
											className="px-2 py-1 text-sm font-mono bg-[#1E1E1E] rounded text--zinc-400"
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
					<div className="bg-[#2D2D2D] rounded-lg p-8 border border--zinc-400/20">
						<h2 className="text-3xl font-mono font-bold mb-8 text--zinc-400">
							Contact
						</h2>
						<div className="space-y-6">
							<a
								href={data.contact.email.url}
								className="flex items-center space-x-4 text-[#D4D4D4] hover:text--zinc-400 transition-colors"
							>
								<Mail className="w-6 h-6" />
								<span className="font-mono">{data.contact.email.address}</span>
							</a>
							<a
								href={data.contact.phone.url}
								className="flex items-center space-x-4 text-[#D4D4D4] hover:text--zinc-400 transition-colors"
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

export default PortfolioTemplate10;
