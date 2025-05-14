import React, { useState, useEffect, useRef } from "react";
import {
	Calendar,
	Clock,
	MapPin,
	Phone,
	Mail,
	Star,
	CheckCircle2,
	Tooth,
	Smile,
	Heart,
	Shield,
	Instagram,
	Facebook,
	Linkedin,
	Twitter,
  PenToolIcon,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Dr. Sarah Johnson",
		title: "General & Cosmetic Dentist",
		image:
			"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fusers%2Fdownload.jpeg?alt=media&token=45387c9c-560c-4b54-919c-0037cdb4432b",
		summary:
			"Providing exceptional dental care with a focus on patient comfort and satisfaction. Over 10 years of experience in general and cosmetic dentistry.",
		credentials: [
			"DDS - Harvard School of Dental Medicine",
			"Member of American Dental Association",
			"Certified Invisalign Provider",
		],
	},
	services: [
		{
			title: "General Dentistry",
			description:
				"Comprehensive dental care including cleanings, fillings, and preventive treatments.",
			icon: PenToolIcon,
			features: [
				"Regular Check-ups",
				"Dental Cleanings",
				"Fillings & Restorations",
				"Root Canal Therapy",
			],
		},
		{
			title: "Cosmetic Dentistry",
			description:
				"Transform your smile with our advanced cosmetic dental procedures.",
			icon: Smile,
			features: [
				"Teeth Whitening",
				"Porcelain Veneers",
				"Dental Bonding",
				"Smile Makeovers",
			],
		},
		{
			title: "Emergency Care",
			description:
				"Immediate attention for dental emergencies and urgent care needs.",
			icon: Heart,
			features: [
				"24/7 Emergency Service",
				"Same-day Appointments",
				"Pain Management",
				"Emergency Extractions",
			],
		},
		{
			title: "Preventive Care",
			description: "Proactive dental care to maintain optimal oral health.",
			icon: Shield,
			features: [
				"Oral Cancer Screening",
				"Gum Disease Treatment",
				"Sealants",
				"Fluoride Treatment",
			],
		},
	],
	testimonials: [
		{
			name: "Emily R.",
			text: "Dr. Johnson is amazing! She made me feel comfortable during my entire treatment. The results are incredible!",
			rating: 5,
		},
		{
			name: "Michael T.",
			text: "Best dental experience ever. The staff is friendly and professional. Highly recommend!",
			rating: 5,
		},
		{
			name: "Sarah L.",
			text: "I was nervous about my dental work, but Dr. Johnson and her team made it a breeze. Thank you!",
			rating: 5,
		},
	],
	contact: {
		address: "123 Dental Street, Suite 100, Boston, MA 02108",
		phone: "+1 (555) 123-4567",
		email: "hello@drjohnson.com",
		hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
	},
	socialLinks: [
		{
			icon: Instagram,
			url: "https://instagram.com/drjohnson",
			label: "Instagram",
		},
		{
			icon: Facebook,
			url: "https://facebook.com/drjohnson",
			label: "Facebook",
		},
		{
			icon: Linkedin,
			url: "https://linkedin.com/in/drjohnson",
			label: "LinkedIn",
		},
		{
			icon: Twitter,
			url: "https://twitter.com/drjohnson",
			label: "Twitter",
		},
	],
};

const PortfolioTemplate17 = () => {
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

			// Animate services on scroll
			gsap.utils.toArray(".service-card").forEach((card, i) => {
				gsap.from(card, {
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
					},
					y: 50,
					opacity: 0,
					duration: 0.8,
					delay: i * 0.2,
				});
			});

			// Animate testimonials
			gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
				gsap.from(card, {
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
					},
					y: 30,
					opacity: 0,
					duration: 0.6,
					delay: i * 0.1,
				});
			});
		};

		initGSAP();
	}, []);

	return (
		<div ref={containerRef} className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-zinc-50 to-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
								{data.personalInfo.name}
							</h1>
							<p className="text-xl text-zinc-800 mb-6">
								{data.personalInfo.title}
							</p>
							<p className="text-gray-800 mb-8">{data.personalInfo.summary}</p>
							<div className="space-y-2">
								{data.personalInfo.credentials.map((credential, index) => (
									<div
										key={index}
										className="flex items-center space-x-2 text-gray-800"
									>
										<CheckCircle2 className="w-5 h-5 text-zinc-500" />
										<span>{credential}</span>
									</div>
								))}
							</div>
							<div className="mt-8">
								<a
									href="#contact"
									className="inline-flex items-center px-6 py-3 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
								>
									<Calendar className="w-5 h-5 mr-2" />
									Book Appointment
								</a>
							</div>
						</div>
						<div className="relative">
							<img
								src={data.personalInfo.image}
								alt={data.personalInfo.name}
								className="rounded-2xl shadow-xl"
							/>
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-500/20 to-purple-500/20"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Our Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.services.map((service, index) => (
							<div
								key={index}
								className="service-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
							>
								<div className="flex items-center space-x-4 mb-6">
									<div className="p-3 bg-zinc-50 rounded-xl">
										<service.icon className="w-8 h-8 text-zinc-800" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">
										{service.title}
									</h3>
								</div>
								<p className="text-gray-800 mb-6">{service.description}</p>
								<ul className="space-y-3">
									{service.features.map((feature, idx) => (
										<li
											key={idx}
											className="flex items-center space-x-2 text-gray-800"
										>
											<CheckCircle2 className="w-5 h-5 text-zinc-500" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
						Patient Testimonials
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{data.testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="testimonial-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="flex items-center mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>
								<p className="text-gray-800 mb-6">{testimonial.text}</p>
								<p className="font-semibold text-gray-900">
									{testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-8">
								Contact Us
							</h2>
							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="p-3 bg-zinc-50 rounded-xl">
										<MapPin className="w-6 h-6 text-zinc-800" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Address</h3>
										<p className="text-gray-800">{data.contact.address}</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="p-3 bg-zinc-50 rounded-xl">
										<Phone className="w-6 h-6 text-zinc-800" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Phone</h3>
										<p className="text-gray-800">{data.contact.phone}</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="p-3 bg-zinc-50 rounded-xl">
										<Mail className="w-6 h-6 text-zinc-800" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Email</h3>
										<p className="text-gray-800">{data.contact.email}</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="p-3 bg-zinc-50 rounded-xl">
										<Clock className="w-6 h-6 text-zinc-800" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Hours</h3>
										<p className="text-gray-800">{data.contact.hours}</p>
									</div>
								</div>
							</div>
							<div className="mt-8 flex space-x-4">
								{data.socialLinks.map((link, index) => (
									<a
										key={index}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors"
									>
										<link.icon className="w-6 h-6 text-zinc-800" />
									</a>
								))}
							</div>
						</div>
						<div className="bg-gray-50 rounded-2xl p-8">
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">
								Book an Appointment
							</h3>
							<form className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
										className="w-full px-4 py-2 rounded-xl outline-none border border-gray-300 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-2 rounded-xl outline-none border border-gray-300 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Phone
									</label>
									<input
										type="tel"
										id="phone"
										className="w-full px-4 py-2 rounded-xl outline-none border border-gray-300 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={4}
										className="w-full px-4 py-2 rounded-xl outline-none border border-gray-300 focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full px-6 py-3 rounded-xl outline-none bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate17;
