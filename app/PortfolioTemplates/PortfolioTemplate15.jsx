import React, { useState, useEffect, useRef } from "react";
import {
	Youtube,
	Instagram,
	Twitter,
	Twitch,
	Globe,
	Mail,
	Phone,
	Link,
	Image as ImageIcon,
	Video,
	Mic,
	PenTool,
	Camera,
	Heart,
	Share2,
	Users,
	TrendingUp,
	Award,
	Star,
	ArrowRight,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Sarah Chen",
		title: "Content Creator & Digital Artist",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Digital content creator specializing in art, lifestyle, and tech reviews. Building a community of 500K+ followers across platforms.",
		socialLinks: [
			{
				icon: Youtube,
				label: "YouTube",
				url: "https://youtube.com/@sarahchen",
				stats: "250K subscribers",
			},
			{
				icon: Instagram,
				label: "Instagram",
				url: "https://instagram.com/sarahchen",
				stats: "150K followers",
			},
			{
				icon: Twitter,
				label: "Twitter",
				url: "https://twitter.com/sarahchen",
				stats: "50K followers",
			},
			{
				icon: Twitch,
				label: "Twitch",
				url: "https://twitch.tv/sarahchen",
				stats: "25K followers",
			},
		],
	},
	content: {
		categories: [
			{
				title: "Digital Art",
				icon: PenTool,
				description: "Digital illustrations and character designs",
				image:
					"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
			},
			{
				title: "Tech Reviews",
				icon: Video,
				description: "In-depth tech product reviews and tutorials",
				image:
					"https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60",
			},
			{
				title: "Lifestyle",
				icon: Camera,
				description: "Daily vlogs and lifestyle content",
				image:
					"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60",
			},
			{
				title: "Podcast",
				icon: Mic,
				description: "Weekly tech and creativity discussions",
				image:
					"https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60",
			},
		],
	},
	achievements: [
		{
			title: "Creator of the Year",
			platform: "Tech Awards 2023",
			icon: Award,
		},
		{
			title: "1M+ Views",
			platform: "YouTube Milestone",
			icon: TrendingUp,
		},
		{
			title: "Top 100 Creators",
			platform: "Digital Arts",
			icon: Star,
		},
	],
	links: [
		{
			title: "Digital Art Store",
			description: "Purchase prints and digital assets",
			icon: ImageIcon,
			url: "https://store.sarahchen.com",
		},
		{
			title: "Creator Course",
			description: "Learn content creation and digital art",
			icon: Video,
			url: "https://course.sarahchen.com",
		},
		{
			title: "Community Discord",
			description: "Join our creative community",
			icon: Users,
			url: "https://discord.gg/sarahchen",
		},
		{
			title: "Sponsorship Inquiries",
			description: "Collaborate with me",
			icon: Heart,
			url: "mailto:sponsor@sarahchen.com",
		},
	],
	contact: {
		email: {
			address: "hello@sarahchen.com",
			url: "mailto:hello@sarahchen.com",
		},
		phone: {
			number: "+1 (555) 123-4567",
			url: "tel:+15551234567",
		},
	},
};

const PortfolioTemplate15 = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const navRef = useRef(null);
	const heroRef = useRef(null);
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
			gsap.registerPlugin(ScrollTrigger);

			// Hero section animation
			gsap.from(heroRef?.current?.querySelector("h1"), {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power4.out",
			});

			// Content sections animation
			sectionsRef.current.forEach((section, index) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
					y: 30,
					opacity: 0,
					duration: 0.8,
					delay: index * 0.2,
				});
			});
		};

		initGSAP();
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
			{/* Navigation */}
			<nav
				ref={navRef}
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled
						? "bg-white/80 backdrop-blur-md shadow-sm"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2">
							<Link className="w-6 h-6 text-purple-600" />
							<span className="font-display text-xl text-gray-900">
								Sarah Chen
							</span>
						</div>
						<div className="flex space-x-6">
							{data.personalInfo.socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 hover:text-purple-600 transition-colors"
								>
									<link.icon className="w-5 h-5" />
								</a>
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
						<div className="relative w-40 h-40 mx-auto mb-8">
							<img
								src={data.personalInfo.image}
								alt={data.personalInfo.name}
								className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
							/>
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl"></div>
						</div>
						<h1 className="text-5xl md:text-7xl font-display font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							{data.personalInfo.name}
						</h1>
						<p className="text-2xl text-gray-600 mb-8">
							{data.personalInfo.title}
						</p>
						<p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
							{data.personalInfo.summary}
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
							{data.personalInfo.socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
								>
									<div className="flex items-center space-x-4">
										<div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
											<link.icon className="w-8 h-8 text-purple-600" />
										</div>
										<div className="text-left">
											<p className="font-medium text-lg text-gray-900">
												{link.label}
											</p>
											<p className="text-sm text-gray-500">{link.stats}</p>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Content Categories */}
			<section
				ref={(el) => (sectionsRef.current[0] = el)}
				className="py-24 bg-white"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-display font-bold mb-16 text-center text-gray-900">
						Content Categories
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.content.categories.map((category, index) => (
							<div
								key={index}
								className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
							>
								<div className="aspect-w-16 aspect-h-9">
									<img
										src={category.image}
										alt={category.title}
										className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
									<div className="absolute bottom-0 p-8">
										<div className="flex items-center space-x-4 mb-3">
											<div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
												<category.icon className="w-8 h-8 text-white" />
											</div>
											<h3 className="text-2xl font-display font-bold text-white">
												{category.title}
											</h3>
										</div>
										<p className="text-white/90 text-lg mb-4">
											{category.description}
										</p>
										<button className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
											<span>Explore Content</span>
											<ArrowRight className="w-5 h-5" />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Achievements */}
			<section
				ref={(el) => (sectionsRef.current[1] = el)}
				className="py-24 bg-gradient-to-br from-purple-50 to-pink-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-display font-bold mb-16 text-center text-gray-900">
						Achievements
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{data.achievements.map((achievement, index) => (
							<div
								key={index}
								className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
							>
								<div className="flex items-center space-x-6">
									<div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors">
										<achievement.icon className="w-10 h-10 text-purple-600" />
									</div>
									<div>
										<h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
											{achievement.title}
										</h3>
										<p className="text-gray-600 text-lg">
											{achievement.platform}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Quick Links */}
			<section
				ref={(el) => (sectionsRef.current[2] = el)}
				className="py-24 bg-white"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-display font-bold mb-16 text-center text-gray-900">
						Quick Links
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{data.links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
							>
								<div className="flex items-center space-x-6">
									<div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors">
										<link.icon className="w-10 h-10 text-purple-600" />
									</div>
									<div>
										<h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
											{link.title}
										</h3>
										<p className="text-gray-600 text-lg">{link.description}</p>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				ref={(el) => (sectionsRef.current[3] = el)}
				className="py-24 bg-gradient-to-br from-purple-50 to-pink-50"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-sm">
						<h2 className="text-4xl font-display font-bold mb-12 text-center text-gray-900">
							Get in Touch
						</h2>
						<div className="space-y-8">
							<a
								href={data.contact.email.url}
								className="flex items-center space-x-6 text-gray-600 hover:text-purple-600 transition-colors group"
							>
								<div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors">
									<Mail className="w-8 h-8" />
								</div>
								<span className="text-xl">{data.contact.email.address}</span>
							</a>
							<a
								href={data.contact.phone.url}
								className="flex items-center space-x-6 text-gray-600 hover:text-purple-600 transition-colors group"
							>
								<div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors">
									<Phone className="w-8 h-8" />
								</div>
								<span className="text-xl">{data.contact.phone.number}</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate15;
