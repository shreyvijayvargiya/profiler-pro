import React, { useState, useEffect, useRef } from "react";
import {
	LineChart,
	BarChart,
	PieChart,
	ScatterChart,
	Database,
	Code2,
	Zap,
	GitCompareArrows,
	Workflow,
	CloudCog,
	Mail,
	Phone,
	Globe,
	Brain,
	Network,
	Settings,
	Boxes,
	Layers,
	Target,
	Search,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Ninja Hatori",
		title: "Data Scientist",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Data Scientist specializing in machine learning, deep learning, and big data analytics, with a focus on creating impactful data-driven solutions.",
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
		text: "Data Scientist with expertise in machine learning, deep learning, and big data analytics. Passionate about extracting insights from complex datasets and building predictive models. Currently working on advanced analytics at",
		website: {
			text: "DataCorp",
			url: "https://datacorp.com",
		},
	},
	experience: [
		{
			title: "Senior Data Scientist",
			company: "DataCraft",
			url: "https://datacraft.com",
			period: "2022 - Present",
			responsibilities: [
				"Developed ML models improving prediction accuracy by 40%",
				"Implemented real-time data processing pipelines",
				"Led team of data scientists and analysts",
				"Published research papers in top ML conferences",
			],
			tech: ["Python", "TensorFlow", "PyTorch", "Spark"],
		},
		{
			title: "Data Scientist",
			company: "AnalyticsPro",
			url: "https://analyticspro.com",
			period: "2020 - 2022",
			responsibilities: [
				"Built recommendation systems for e-commerce",
				"Developed NLP models for text analysis",
				"Created data visualization dashboards",
				"Optimized data processing workflows",
			],
			tech: ["R", "Scikit-learn", "NLP", "Tableau"],
		},
	],
	skills: {
		ml: [
			{ name: "Machine Learning", icon: Brain },
			{ name: "Deep Learning", icon: Network },
			{ name: "NLP", icon: Search },
			{ name: "Computer Vision", icon: Target },
		],
		programming: [
			{ name: "Python", icon: Code2 },
			{ name: "R", icon: Code2 },
			{ name: "SQL", icon: Database },
			{ name: "Scala", icon: Code2 },
		],
		frameworks: [
			{ name: "TensorFlow", icon: Layers },
			{ name: "PyTorch", icon: Layers },
			{ name: "Scikit-learn", icon: Boxes },
			{ name: "Spark", icon: Zap },
		],
		visualization: [
			{ name: "Matplotlib", icon: LineChart },
			{ name: "Seaborn", icon: BarChart },
			{ name: "Plotly", icon: PieChart },
			{ name: "Tableau", icon: ScatterChart },
		],
		bigData: [
			{ name: "Hadoop", icon: Database },
			{ name: "Spark", icon: Zap },
			{ name: "Kafka", icon: Workflow },
			{ name: "Airflow", icon: Workflow },
		],
		tools: [
			{ name: "Git", icon: GitCompareArrows },
			{ name: "Docker", icon: Boxes },
			{ name: "AWS", icon: CloudCog },
			{ name: "Kubernetes", icon: Settings },
		],
	},
	projects: [
		{
			title: "Predictive Analytics System",
			description:
				"Developed ML models for predicting customer behavior with 85% accuracy",
			tech: ["Python", "TensorFlow", "Spark", "AWS"],
			metrics: ["85% accuracy", "10x faster processing", "50% cost reduction"],
		},
		{
			title: "NLP Research Project",
			description:
				"Created advanced NLP models for sentiment analysis and text classification",
			tech: ["PyTorch", "BERT", "Transformers", "HuggingFace"],
			metrics: ["90% accuracy", "Published paper", "Industry adoption"],
		},
	],
	publications: [
		{
			title: "Advanced ML Techniques",
			journal: "Journal of Machine Learning",
			year: "2023",
			link: "https://example.com/paper1",
		},
		{
			title: "NLP Applications",
			journal: "AI Research Conference",
			year: "2022",
			link: "https://example.com/paper2",
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

const PortfolioTemplate8 = () => {
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
			{/* Data-themed background */}
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
							<Brain className="w-6 h-6 text-zinc-400" />
							<span className="font-sans text-zinc-400">Data Science</span>
						</div>
						<div className="flex space-x-8">
							{[
								"about",
								"experience",
								"skills",
								"projects",
								"publications",
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

							{/* Publications */}
							<div
								ref={(el) => (sectionsRef.current[3] = el)}
								className="bg-black/50 rounded-2xl p-6 border border-zinc-400/20 backdrop-blur-sm"
							>
								<h2 className="text-2xl font-sans font-bold mb-6 text-zinc-400">
									Publications
								</h2>
								<div className="space-y-4">
									{data.publications.map((pub, index) => (
										<div
											key={index}
											className="bg-black/30 rounded-xl p-4 border border-zinc-400/20"
										>
											<h3 className="text-lg font-sans font-semibold text-zinc-400 mb-2">
												{pub.title}
											</h3>
											<p className="text-gray-300 mb-2">
												{pub.journal} • {pub.year}
											</p>
											<a
												href={pub.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-zinc-400 hover:text-zinc-300"
											>
												Read Paper →
											</a>
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

export default PortfolioTemplate8;
