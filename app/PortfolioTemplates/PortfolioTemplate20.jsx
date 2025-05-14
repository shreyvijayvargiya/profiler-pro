import React, { useState, useEffect, useRef } from "react";
import {
	Calendar,
	Clock,
	Users,
	TrendingUp,
	ArrowRight,
	ExternalLink,
	Star,
	MessageSquare,
	BookOpen,
	GraduationCap,
	Briefcase,
	Linkedin,
	Twitter,
	Instagram,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Dr. Sarah Mitchell",
		title: "Business Strategy Consultant",
		image:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
		summary:
			"Helping businesses transform and scale through strategic consulting, data-driven insights, and proven methodologies.",
		stats: {
			yearsExperience: "15+",
			clientsServed: "100+",
			successRate: "95%",
			industries: "12+",
		},
	},
	services: [
		{
			title: "Business Strategy",
			description:
				"Develop comprehensive business strategies aligned with your goals",
			icon: TrendingUp,
			duration: "3-6 months",
			price: "From $15,000",
		},
		{
			title: "Digital Transformation",
			description: "Guide your organization through digital transformation",
			icon: MessageSquare,
			duration: "6-12 months",
			price: "From $25,000",
		},
		{
			title: "Growth Strategy",
			description: "Create sustainable growth strategies for your business",
			icon: BookOpen,
			duration: "4-8 months",
			price: "From $20,000",
		},
		{
			title: "Executive Coaching",
			description: "One-on-one coaching for business leaders",
			icon: GraduationCap,
			duration: "Ongoing",
			price: "From $500/hour",
		},
	],
	caseStudies: [
		{
			title: "Tech Startup Scale-up",
			client: "SaaS Company",
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
			description:
				"Helped a SaaS startup scale from $1M to $10M ARR in 18 months through strategic planning and execution.",
			challenge: "Rapid growth causing operational inefficiencies",
			solution: "Implemented scalable processes and team structure",
			results: {
				revenueGrowth: "+900%",
				teamSize: "+200%",
				customerRetention: "+40%",
			},
		},
		{
			title: "Digital Transformation",
			client: "Traditional Retailer",
			image:
				"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
			description:
				"Led digital transformation initiative for a traditional retailer, resulting in 60% increase in online sales.",
			challenge: "Outdated systems and processes",
			solution: "Implemented modern tech stack and agile methodology",
			results: {
				onlineSales: "+60%",
				customerSatisfaction: "+45%",
				operationalEfficiency: "+35%",
			},
		},
	],
	testimonials: [
		{
			name: "John Anderson",
			role: "CEO, TechCorp",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
			text: "Sarah's strategic guidance was instrumental in our company's growth. Her insights and methodology are truly transformative.",
			rating: 5,
		},
		{
			name: "Maria Rodriguez",
			role: "COO, RetailPlus",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
			text: "Working with Sarah helped us navigate our digital transformation with confidence. Her expertise is unmatched.",
			rating: 5,
		},
	],
	booking: {
		title: "Schedule a Consultation",
		description:
			"Book a free 30-minute discovery call to discuss your business challenges",
		availability: "Mon-Fri, 9 AM - 6 PM EST",
		meetingTypes: [
			"Strategy Session",
			"Growth Planning",
			"Executive Coaching",
			"Digital Transformation",
		],
	},
	socialLinks: [
		{
			icon: Linkedin,
			url: "https://linkedin.com/in/sarahmitchell",
			label: "LinkedIn",
			followers: "25K",
		},
		{
			icon: Twitter,
			url: "https://twitter.com/sarahmitchell",
			label: "Twitter",
			followers: "15K",
		},
		{
			icon: Instagram,
			url: "https://instagram.com/sarahmitchell.consulting",
			label: "Instagram",
			followers: "10K",
		},
	],
};

const PortfolioTemplate20 = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [selectedService, setSelectedService] = useState(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center py-10">
			<div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl p-0 overflow-hidden">
				{/* Header/Profile */}
				<div className="flex items-center justify-between px-8 pt-8 pb-4">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">
							{data.personalInfo.name}
						</h1>
						<p className="text-lg text-gray-400 font-medium">
							{data.personalInfo.title}
						</p>
					</div>
					<img
						src={data.personalInfo.image}
						alt={data.personalInfo.name}
						className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
					/>
				</div>

				{/* Book a Session Card */}
				<div className="px-8">
					<div className="rounded-2xl bg-black flex items-center p-4 mb-6 relative overflow-hidden">
						<img
							src={data.personalInfo.image}
							alt="session"
							className="w-20 h-20 rounded-xl object-cover mr-4"
						/>
						<div className="flex-1">
							<p className="text-white font-medium">Book a 1:1 Session</p>
							<p className="text-gray-300 text-sm">
								Chat about strategy or consulting
							</p>
						</div>
						<button className="ml-4 bg-zinc-600 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg font-semibold transition">
							Book Now
						</button>
					</div>
				</div>

				{/* Stats Row */}
				<div className="flex justify-between px-8 pb-4">
					{Object.entries(data.personalInfo.stats).map(([key, value]) => (
						<div key={key} className="text-center">
							<p className="text-lg font-bold text-gray-900">{value}</p>
							<p className="text-xs text-gray-400 capitalize">
								{key.replace(/([A-Z])/g, " $1").trim()}
							</p>
						</div>
					))}
				</div>

				{/* Services Section */}
				<div className="px-8 pb-2">
					<h2 className="text-base font-semibold text-gray-700 mb-2 mt-2">
						Services
					</h2>
					<div className="space-y-2">
						{data.services.map((service, idx) => (
							<div
								key={idx}
								className="flex items-center justify-between bg-[#f7f8fa] rounded-xl px-4 py-3 mb-1"
							>
								<div className="flex items-center space-x-3">
									<span className="bg-zinc-100 p-2 rounded-lg">
										<service.icon className="w-5 h-5 text-zinc-600" />
									</span>
									<div>
										<p className="font-medium text-gray-900">{service.title}</p>
										<p className="text-xs text-gray-400">
											{service.description}
										</p>
									</div>
								</div>
								<button className="bg-zinc-50 text-zinc-600 px-4 py-1 rounded-lg font-semibold text-sm hover:bg-zinc-100 transition">
									Visit
								</button>
							</div>
						))}
					</div>
				</div>

				{/* Case Studies Section */}
				<div className="px-8 pb-2">
					<h2 className="text-base font-semibold text-gray-700 mb-2 mt-4">
						Case Studies
					</h2>
					<div className="space-y-2">
						{data.caseStudies.map((study, idx) => (
							<div
								key={idx}
								className="flex items-center justify-between bg-[#f7f8fa] rounded-xl px-4 py-3 mb-1"
							>
								<div className="flex items-center space-x-3">
									<img
										src={study.image}
										alt={study.title}
										className="w-10 h-10 rounded-lg object-cover"
									/>
									<div>
										<p className="font-medium text-gray-900">{study.title}</p>
										<p className="text-xs text-gray-400">{study.client}</p>
									</div>
								</div>
								<button className="bg-zinc-50 text-zinc-600 px-4 py-1 rounded-lg font-semibold text-sm hover:bg-zinc-100 transition">
									Visit
								</button>
							</div>
						))}
					</div>
				</div>

				{/* Testimonials Section */}
				<div className="px-8 pb-6">
					<h2 className="text-base font-semibold text-gray-700 mb-2 mt-4">
						Testimonials
					</h2>
					<div className="space-y-2">
						{data.testimonials.map((testimonial, idx) => (
							<div
								key={idx}
								className="flex items-center justify-between bg-[#f7f8fa] rounded-xl px-4 py-3 mb-1"
							>
								<div className="flex items-center space-x-3">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-10 h-10 rounded-full object-cover"
									/>
									<div>
										<p className="font-medium text-gray-900">
											{testimonial.name}
										</p>
										<p className="text-xs text-gray-400">{testimonial.role}</p>
									</div>
								</div>
								<span className="flex items-center space-x-1">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 text-yellow-400 fill-current"
										/>
									))}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Booking Section */}
				<div className="px-8 pb-8">
					<h2 className="text-base font-semibold text-gray-700 mb-2 mt-4">
						{data.booking.title}
					</h2>
					<p className="text-xs text-gray-400 mb-2">
						{data.booking.description}
					</p>
					<form className="flex flex-col space-y-2">
						<input
							type="text"
							placeholder="Your Name"
							className="px-3 py-2 rounded-lg border border-gray-200 bg-[#f7f8fa] text-sm"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="px-3 py-2 rounded-lg border border-gray-200 bg-[#f7f8fa] text-sm"
						/>
						<select className="px-3 py-2 rounded-lg border border-gray-200 bg-[#f7f8fa] text-sm">
							{data.booking.meetingTypes.map((type, idx) => (
								<option key={idx}>{type}</option>
							))}
						</select>
						<button
							type="submit"
							className="bg-zinc-600 hover:bg-zinc-700 text-white py-2 rounded-lg font-semibold transition"
						>
							Schedule Consultation
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate20;
