import React, { useState, useEffect, useRef } from "react";
import {
	Server,
	Cloud,
	GitBranch,
	Database,
	Shield,
	Workflow,
	Settings,
	LineChart,
	Network,
	Lock,
	Boxes,
	Zap,
	Monitor,
	Activity,
	BarChart,
	ServerCog,
	CloudCog,
	GitPullRequest,
	GitMerge,
	GitBranchPlus,
	Mail,
	Phone,
	Fish,
	GitCompareArrows,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Timo Kithyapi",
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
				icon: GitBranch,
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/johndoe",
			},
			{
				icon: Cloud,
				label: "Website",
				url: "https://johndoe.dev",
			},
		],
	},
	about: {
		text: "DevOps Engineer with expertise in building scalable cloud infrastructure and implementing robust CI/CD pipelines. Passionate about infrastructure as code, automation, and cloud-native technologies. Currently managing cloud infrastructure at",
		website: {
			text: "TechCorp",
			url: "https://techcorp.com",
		},
	},
	experience: [
		{
			title: "Senior DevOps Engineer",
			company: "CloudScale",
			url: "https://cloudscale.com",
			period: "2022 - Present",
			responsibilities: [
				"Implemented Kubernetes-based microservices architecture handling 1M+ requests/day",
				"Reduced deployment time by 80% through automated CI/CD pipelines",
				"Optimized cloud infrastructure costs by 40% through resource optimization",
				"Implemented infrastructure as code using Terraform and Ansible",
			],
			tech: ["Kubernetes", "Docker", "AWS", "Terraform", "Ansible", "Jenkins"],
		},
		{
			title: "DevOps Engineer",
			company: "TechOps",
			url: "https://techops.com",
			period: "2020 - 2022",
			responsibilities: [
				"Managed multi-cloud infrastructure across AWS, GCP, and Azure",
				"Implemented monitoring and alerting system reducing incident response time by 60%",
				"Automated infrastructure provisioning reducing setup time by 70%",
				"Led migration from monolithic to microservices architecture",
			],
			tech: ["AWS", "GCP", "Azure", "Prometheus", "Grafana", "ELK Stack"],
		},
	],
	skills: {
		infrastructure: [
			{ name: "Kubernetes", icon: Settings },
			{ name: "Docker", icon: Fish },
			{ name: "Terraform", icon: ServerCog },
			{ name: "Ansible", icon: Settings },
		],
		cloud: [
			{ name: "AWS", icon: Cloud },
			{ name: "GCP", icon: CloudCog },
			{ name: "Azure", icon: Cloud },
			{ name: "Serverless", icon: Zap },
		],
		monitoring: [
			{ name: "Prometheus", icon: Activity },
			{ name: "Grafana", icon: BarChart },
			{ name: "ELK Stack", icon: LineChart },
			{ name: "Datadog", icon: Monitor },
		],
		automation: [
			{ name: "Jenkins", icon: Workflow },
			{ name: "GitLab CI", icon: GitBranchPlus },
			{ name: "GitHub Actions", icon: GitPullRequest },
			{ name: "ArgoCD", icon: GitMerge },
		],
		security: [
			{ name: "Security", icon: Shield },
			{ name: "Compliance", icon: Lock },
			{ name: "Secrets", icon: Boxes },
			{ name: "IAM", icon: Network },
		],
		databases: [
			{ name: "PostgreSQL", icon: Database },
			{ name: "MongoDB", icon: Database },
			{ name: "Redis", icon: Database },
			{ name: "Elasticsearch", icon: Database },
		],
	},
	projects: [
		{
			title: "Cloud-Native Infrastructure",
			description:
				"Designed and implemented a fully automated cloud-native infrastructure supporting 100K+ users",
			tech: ["Kubernetes", "Terraform", "AWS", "ArgoCD"],
			metrics: ["99.99% uptime", "5min deployment time", "40% cost reduction"],
		},
		{
			title: "Automated CI/CD Pipeline",
			description:
				"Built end-to-end CI/CD pipeline reducing deployment time by 80%",
			tech: ["Jenkins", "Docker", "Kubernetes", "Helm"],
			metrics: [
				"Zero-downtime deployments",
				"Automated testing",
				"100% traceability",
			],
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

const PortfolioTemplate5 = () => {
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
							<Server className="w-6 h-6 text--zinc-400" />
							<span className="font-mono text--zinc-400">DevOps</span>
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
						Technical Skills
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
						Infrastructure Projects
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
						Work Experience
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

export default PortfolioTemplate5;
