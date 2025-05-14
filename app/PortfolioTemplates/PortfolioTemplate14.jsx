import React, { useState, useEffect, useRef } from "react";
import {
	Coins,
	Wallet,
	Code,
	Terminal,
	Globe,
	Mail,
	Phone,
	GitBranch,
	Lock,
	Shield,
	Network,
	Database,
	Currency,
	Paperclip,
	CurrencyIcon,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Satoshi Nakamoto",
		title: "Senior Blockchain Engineer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Blockchain Engineer specializing in DeFi protocols, smart contracts, and distributed systems. Expert in Ethereum, Solana, and cross-chain solutions.",
		socialLinks: [
			{
				icon: GitBranch,
				label: "GitHub",
				url: "https://github.com/alexchen",
			},
			{
				icon: Globe,
				label: "LinkedIn",
				url: "https://linkedin.com/in/alexchen",
			},
			{ icon: Globe, label: "Website", url: "https://alexchen.dev" },
		],
	},
	about: {
		text: "Blockchain Engineer with expertise in building decentralized applications and DeFi protocols. Currently leading blockchain development at",
		website: { text: "CryptoFin", url: "https://cryptofin.com" },
	},
	experience: [
		{
			title: "Senior Blockchain Engineer",
			company: "CryptoFin",
			period: "2021 - Present",
			responsibilities: [
				"Architected and deployed DeFi protocols with $100M+ TVL",
				"Developed cross-chain bridge solutions",
				"Implemented zero-knowledge proof systems",
				"Led smart contract security audits",
			],
			tech: ["Solidity", "Rust", "ZK Proofs", "Substrate"],
		},
		{
			title: "Blockchain Developer",
			company: "ChainTech",
			period: "2019 - 2021",
			responsibilities: [
				"Built smart contracts for NFT marketplace",
				"Implemented layer-2 scaling solutions",
				"Developed DEX protocols",
				"Created blockchain explorer",
			],
			tech: ["Ethereum", "IPFS", "Web3.js", "Hardhat"],
		},
	],
	skills: {
		blockchain: [
			{ name: "Ethereum", icon: CurrencyIcon },
			{ name: "Solana", icon: CurrencyIcon },
			{ name: "Polkadot", icon: Network },
			{ name: "Cosmos", icon: Network },
		],
		defi: [
			{ name: "Smart Contracts", icon: Paperclip },
			{ name: "DEX", icon: Currency },
			{ name: "Yield Farming", icon: Coins },
			{ name: "Lending", icon: Wallet },
		],
		security: [
			{ name: "ZK Proofs", icon: Lock },
			{ name: "Auditing", icon: Shield },
			{ name: "Cryptography", icon: Lock },
			{ name: "Consensus", icon: Network },
		],
		tools: [
			{ name: "Hardhat", icon: Terminal },
			{ name: "Truffle", icon: Code },
			{ name: "Web3.js", icon: Code },
			{ name: "IPFS", icon: Database },
		],
	},
	projects: [
		{
			title: "Cross-Chain Bridge Protocol",
			description:
				"Developed a secure bridge protocol connecting Ethereum and Solana networks",
			tech: ["Rust", "Solidity", "ZK Proofs", "Substrate"],
			metrics: ["$50M+ bridged", "99.9% uptime", "Zero exploits"],
		},
		{
			title: "DeFi Lending Protocol",
			description:
				"Built a decentralized lending protocol with automated interest rates",
			tech: ["Solidity", "Web3.js", "Chainlink", "OpenZeppelin"],
			metrics: ["$100M+ TVL", "10,000+ users", "0% default rate"],
		},
	],
	certifications: [
		{
			title: "Certified Blockchain Developer",
			issuer: "Blockchain Council",
			year: "2023",
			link: "https://www.blockchain-council.org",
		},
		{
			title: "Advanced Solidity Developer",
			issuer: "ConsenSys Academy",
			year: "2022",
			link: "https://consensys.net/academy",
		},
	],
	contact: {
		email: {
			address: "alex.chen@example.com",
			url: "mailto:alex.chen@example.com",
		},
		phone: { number: "+1 (555) 123-4567", url: "tel:+15551234567" },
	},
};

const PortfolioTemplate14 = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isScrolled, setIsScrolled] = useState(false);
	const sectionsRef = useRef([]);
	const backgroundRef = useRef(null);
	const navRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const initGSAP = async () => {
			const gsap = (await import("gsap")).default;
			const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
			gsap.registerPlugin(ScrollTrigger);

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
				});
			});
		};

		initGSAP();
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0a0f1c] text-white overflow-hidden">
			{/* Blockchain-themed background with animated grid */}
			<div
				ref={backgroundRef}
				className="fixed inset-0 z-0 opacity-10"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, #27272a 1px, transparent 0)`,
					backgroundSize: "40px 40px",
				}}
			/>

			{/* Navigation with blockchain theme */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled
						? "bg-[#0a0f1c]/80 backdrop-blur-md border-b border-zinc-400/20"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2">
							<CurrencyIcon className="w-6 h-6 text-zinc-400 animate-pulse" />
							<span className="font-mono text-zinc-400 font-bold tracking-wider">
								BLOCKCHAIN ENGINEER
							</span>
						</div>
						<div className="flex space-x-8">
							{[
								"about",
								"experience",
								"skills",
								"projects",
								"certifications",
								"contact",
							].map((section) => (
								<button
									key={section}
									onClick={() => setActiveSection(section)}
									className={`font-mono text-sm tracking-wider ${
										activeSection === section
											? "text-zinc-400 font-bold"
											: "text-zinc-300 hover:text-zinc-400 transition-colors"
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
					<div className="grid grid-cols-12 gap-6">
						{/* Left Column - Personal Info & Skills */}
						<div className="col-span-12 lg:col-span-4 space-y-6">
							{/* Personal Info with blockchain theme */}
							<div className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300">
								<div className="relative">
									<img
										src={data.personalInfo.image}
										alt={data.personalInfo.name}
										className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-zinc-400"
									/>
									<div className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-400 to-[#3f3f46] opacity-20 blur-xl"></div>
								</div>
								<h1 className="text-3xl font-mono font-bold mb-4 text-zinc-400 text-center">
									{data.personalInfo.name}
								</h1>
								<p className="text-xl font-mono text-[#3f3f46] mb-4 text-center">
									{data.personalInfo.title}
								</p>
								<p className="text-zinc-300 mb-6 text-center">
									{data.personalInfo.summary}
								</p>
								<div className="flex justify-center space-x-4">
									{data.personalInfo.socialLinks.map((link, index) => (
										<a
											key={index}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-300 hover:text-zinc-400 transition-colors"
										>
											<link.icon className="w-6 h-6" />
										</a>
									))}
								</div>
							</div>

							{/* Skills with blockchain theme */}
							<div className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300">
								<h2 className="text-2xl font-mono font-bold mb-6 text-zinc-400 text-center">
									Skills
								</h2>
								<div className="space-y-6">
									{Object.entries(data.skills).map(([category, skills]) => (
										<div key={category}>
											<h3 className="text-lg font-mono font-semibold mb-3 text-[#3f3f46] capitalize text-center">
												{category}
											</h3>
											<div className="grid grid-cols-2 gap-3">
												{skills.map((skill, index) => (
													<div
														key={index}
														className="flex items-center space-x-2 text-zinc-300 bg-[#0a0f1c]/50 p-2 rounded-lg hover:bg-zinc-400/10 transition-colors"
													>
														<skill.icon className="w-5 h-5 text-zinc-400" />
														<span className="font-mono text-sm">
															{skill.name}
														</span>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Right Column - Experience, Projects, etc. */}
						<div className="col-span-12 lg:col-span-8 space-y-6">
							{/* About with blockchain theme */}
							<div
								ref={(el) => (sectionsRef.current[0] = el)}
								className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
							>
								<h2 className="text-2xl font-mono font-bold mb-4 text-zinc-400">
									About
								</h2>
								<p className="text-zinc-300">
									{data.about.text}{" "}
									<a
										href={data.about.website.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#3f3f46] hover:text-zinc-400"
									>
										{data.about.website.text}
									</a>
								</p>
							</div>

							{/* Experience with blockchain theme */}
							<div
								ref={(el) => (sectionsRef.current[1] = el)}
								className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
							>
								<h2 className="text-2xl font-mono font-bold mb-6 text-zinc-400">
									Experience
								</h2>
								<div className="space-y-6">
									{data.experience.map((job, index) => (
										<div
											key={index}
											className="border-l-2 border-zinc-400/20 pl-4 hover:border-zinc-400/40 transition-colors"
										>
											<h3 className="text-xl font-mono font-semibold text-zinc-400">
												{job.title}
											</h3>
											<a
												href={job.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#3f3f46] hover:text-zinc-400"
											>
												{job.company}
											</a>
											<p className="text-zinc-400 mb-3">{job.period}</p>
											<ul className="list-disc list-inside text-zinc-300 space-y-2">
												{job.responsibilities.map((resp, idx) => (
													<li key={idx}>{resp}</li>
												))}
											</ul>
											<div className="flex flex-wrap gap-2 mt-3">
												{job.tech.map((tech, idx) => (
													<span
														key={idx}
														className="px-2 py-1 bg-zinc-400/10 rounded text-zinc-400 text-sm font-mono"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Projects with blockchain theme */}
							<div
								ref={(el) => (sectionsRef.current[2] = el)}
								className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
							>
								<h2 className="text-2xl font-mono font-bold mb-6 text-zinc-400">
									Projects
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{data.projects.map((project, index) => (
										<div
											key={index}
											className="bg-[#0a0f1c]/50 rounded-xl p-4 border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
										>
											<h3 className="text-xl font-mono font-semibold text-zinc-400 mb-2">
												{project.title}
											</h3>
											<p className="text-zinc-300 mb-3">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2 mb-3">
												{project.tech.map((tech, idx) => (
													<span
														key={idx}
														className="px-2 py-1 bg-zinc-400/10 rounded text-zinc-400 text-sm font-mono"
													>
														{tech}
													</span>
												))}
											</div>
											<div className="flex flex-wrap gap-2">
												{project.metrics.map((metric, idx) => (
													<span
														key={idx}
														className="px-2 py-1 bg-[#3f3f46]/10 rounded text-[#3f3f46] text-sm font-mono"
													>
														{metric}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Certifications with blockchain theme */}
							<div
								ref={(el) => (sectionsRef.current[3] = el)}
								className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
							>
								<h2 className="text-2xl font-mono font-bold mb-6 text-zinc-400">
									Certifications
								</h2>
								<div className="space-y-4">
									{data.certifications.map((cert, index) => (
										<div
											key={index}
											className="bg-[#0a0f1c]/50 rounded-xl p-4 border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
										>
											<h3 className="text-lg font-mono font-semibold text-zinc-400 mb-2">
												{cert.title}
											</h3>
											<p className="text-zinc-300 mb-2">
												{cert.issuer} • {cert.year}
											</p>
											<a
												href={cert.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#3f3f46] hover:text-zinc-400"
											>
												View Certificate →
											</a>
										</div>
									))}
								</div>
							</div>

							{/* Contact with blockchain theme */}
							<div
								ref={(el) => (sectionsRef.current[4] = el)}
								className="bg-[#111827]/80 rounded-2xl p-6 backdrop-blur-sm border border-zinc-400/20 hover:border-zinc-400/40 transition-all duration-300"
							>
								<h2 className="text-2xl font-mono font-bold mb-6 text-zinc-400">
									Contact
								</h2>
								<div className="space-y-4">
									<a
										href={data.contact.email.url}
										className="flex items-center space-x-3 text-zinc-300 hover:text-zinc-400 transition-colors"
									>
										<Mail className="w-5 h-5" />
										<span className="font-mono">
											{data.contact.email.address}
										</span>
									</a>
									<a
										href={data.contact.phone.url}
										className="flex items-center space-x-3 text-zinc-300 hover:text-zinc-400 transition-colors"
									>
										<Phone className="w-5 h-5" />
										<span className="font-mono">
											{data.contact.phone.number}
										</span>
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

export default PortfolioTemplate14;
