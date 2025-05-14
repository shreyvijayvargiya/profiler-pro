import React, { useState, useEffect, useRef } from "react";
import {
	Youtube,
	Instagram,
	Twitter,
	CreditCard,
	Turtle,
	Twitch,
	Mail,
	Phone,
	Video,
	PenTool,
	Heart,
	Users,
	ExternalLink,
	ShoppingBag,
	GraduationCap,
	TicketIcon,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Alex Rivera",
		title: "Multi-Platform Content Creator",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Creating content across multiple platforms. Join me on this journey of creativity and community building!",
		socialLinks: [
			{
				icon: Youtube,
				label: "YouTube",
				url: "https://youtube.com/@alexrivera",
				stats: "250K subscribers",
				color: "#FF0000",
			},
			{
				icon: Instagram,
				label: "Instagram",
				url: "https://instagram.com/alexrivera",
				stats: "150K followers",
				color: "#E1306C",
			},
			{
				icon: Twitter,
				label: "Twitter",
				url: "https://twitter.com/alexrivera",
				stats: "50K followers",
				color: "#1DA1F2",
			},
			{
				icon: CreditCard,
				label: "Reddit",
				url: "https://reddit.com/u/alexrivera",
				stats: "25K karma",
				color: "#FF4500",
			},
			{
				icon: Turtle,
				label: "Discord",
				url: "https://discord.gg/alexrivera",
				stats: "10K members",
				color: "#5865F2",
			},
			{
				icon: Twitch,
				label: "Twitch",
				url: "https://twitch.tv/alexrivera",
				stats: "5K followers",
				color: "#9146FF",
			},
			{
				icon: TicketIcon,
				label: "TikTok",
				url: "https://tiktok.com/@alexrivera",
				stats: "100K followers",
				color: "#000000",
			},
		],
	},
	links: [
		{
			title: "Latest YouTube Video",
			description: "Check out my newest content",
			icon: Video,
			url: "https://youtube.com/@alexrivera",
			category: "content",
		},
		{
			title: "Discord Community",
			description: "Join our growing community",
			icon: Users,
			url: "https://discord.gg/alexrivera",
			category: "community",
		},
		{
			title: "Merch Store",
			description: "Get your favorite creator merch",
			icon: ShoppingBag,
			url: "https://store.alexrivera.com",
			category: "store",
		},
		{
			title: "Creator Course",
			description: "Learn content creation",
			icon: GraduationCap,
			url: "https://course.alexrivera.com",
			category: "education",
		},
		{
			title: "Sponsorship Inquiries",
			description: "Let's work together",
			icon: Heart,
			url: "mailto:sponsor@alexrivera.com",
			category: "business",
		},
		{
			title: "Latest Blog Post",
			description: "Read my thoughts on content creation",
			icon: PenTool,
			url: "https://blog.alexrivera.com",
			category: "content",
		},
	],
	contact: {
		email: {
			address: "hello@alexrivera.com",
			url: "mailto:hello@alexrivera.com",
		},
		phone: {
			number: "+1 (555) 123-4567",
			url: "tel:+15551234567",
		},
	},
};

const PortfolioTemplate16 = () => {
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

			// Animate background gradient
			gsap.to(".gradient-bg", {
				backgroundPosition: "200% 200%",
				duration: 20,
				repeat: -1,
				ease: "linear",
			});

			// Animate cards on scroll
			gsap.utils.toArray(".link-card").forEach((card, i) => {
				gsap.from(card, {
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
					},
					y: 50,
					opacity: 0,
					duration: 0.8,
					delay: i * 0.1,
				});
			});
		};

		initGSAP();
	}, []);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-black relative overflow-hidden"
		>
			{/* Animated Gradient Background */}
			<div className="gradient-bg absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 bg-[length:400%_400%] opacity-50"></div>

			{/* Content */}
			<div className="relative z-10 max-w-2xl mx-auto px-4 py-16">
				{/* Profile Section */}
				<div className="text-center mb-12">
					<div className="relative w-32 h-32 mx-auto mb-6">
						<img
							src={data.personalInfo.image}
							alt={data.personalInfo.name}
							className="w-full h-full rounded-full object-cover border-4 border-white/10"
						/>
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl"></div>
					</div>
					<h1 className="text-4xl font-bold text-white mb-2">
						{data.personalInfo.name}
					</h1>
					<p className="text-xl text-gray-300 mb-4">
						{data.personalInfo.title}
					</p>
					<p className="text-gray-400 mb-8">{data.personalInfo.summary}</p>

					{/* Social Links */}
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{data.personalInfo.socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
								style={{ "--hover-color": link.color }}
							>
								<link.icon
									className="w-6 h-6 text-white group-hover:text-[var(--hover-color)] transition-colors"
									style={{ color: link.color }}
								/>
							</a>
						))}
					</div>
				</div>

				{/* Links Grid */}
				<div className="space-y-4">
					{data.links.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="link-card group block p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-4">
									<div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
										<link.icon className="w-6 h-6 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-white mb-1">
											{link.title}
										</h3>
										<p className="text-sm text-gray-400">{link.description}</p>
									</div>
								</div>
								<ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
							</div>
						</a>
					))}
				</div>

				{/* Contact Section */}
				<div className="mt-12 text-center">
					<div className="inline-flex items-center space-x-6">
						<a
							href={data.contact.email.url}
							className="text-gray-400 hover:text-white transition-colors"
						>
							<Mail className="w-5 h-5" />
						</a>
						<a
							href={data.contact.phone.url}
							className="text-gray-400 hover:text-white transition-colors"
						>
							<Phone className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate16;
