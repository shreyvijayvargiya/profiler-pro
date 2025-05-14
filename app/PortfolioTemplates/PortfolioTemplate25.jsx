import React, { useState } from "react";
import {
	Instagram,
	Mail,
	Phone,
	Globe,
	Facebook,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const data = {
	name: "Ravi Kumar",
	image:
		"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80",
	salonImages: [
		// Modern salon interior
		"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
		// Hair stylist at work
		"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
		// Salon chairs and mirrors
		"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
		// Hair washing station
		"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
		// Closeup of hair styling
		"https://images.unsplash.com/photo-1519415943484-cfbec0c7b2c7?auto=format&fit=crop&w=800&q=80",
		// Hair products on shelf
		"https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=800&q=80",
		// Hair tools (brushes, scissors)
		"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
		// Shampoo and conditioner bottles
		"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
		// Beautiful hair closeup
		"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
	],
	description:
		"Professional salon artist with 10+ years of experience. Owner of 'Ravi's Salon' and provider of premium home salon services.",
	services: [
		"Haircut & Styling",
		"Beard Grooming",
		"Facial & Skincare",
		"Bridal Makeup",
		"Home Salon Appointments",
	],
	booking: {
		phone: "+91 98765 43210",
		email: "ravi@saloon.com",
		website: "https://ravisaloon.com",
		note: "Call, email, or visit the website to book an appointment. Home visits available!",
	},
	socials: [
		{
			label: "Instagram",
			url: "https://instagram.com/ravisaloon",
			icon: Instagram,
		},
		{
			label: "Facebook",
			url: "https://facebook.com/ravisaloon",
			icon: Facebook,
		},
		{ label: "Website", url: "https://ravisaloon.com", icon: Globe },
		{ label: "Email", url: "mailto:ravi@saloon.com", icon: Mail },
		{ label: "Phone", url: "tel:+919876543210", icon: Phone },
	],
};

const PortfolioTemplate25 = () => {
	const [hovered, setHovered] = useState(null);
	const [carouselIdx, setCarouselIdx] = useState(0);
	const total = data.salonImages.length;

	const prevImage = () => setCarouselIdx((i) => (i - 1 + total) % total);
	const nextImage = () => setCarouselIdx((i) => (i + 1) % total);

	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col items-start py-16 px-4 max-w-xl mx-auto">
			<img
				src={data.image}
				alt={data.name}
				className="w-24 h-24 rounded-full object-contain mb-3"
			/>
			<h1 className="text-2xl font-bold mb-1">{data.name}</h1>
			<p className="text-base text-gray-600 mb-4 max-w-xl">
				{data.description}
			</p>
			{/* Salon Carousel */}
			<div className="w-full max-w-md mb-6 relative">
				<img
					src={data.salonImages[carouselIdx]}
					alt={`Ravi's Salon ${carouselIdx + 1}`}
					className="w-full rounded-lg object-cover h-64"
				/>
				<button
					onClick={prevImage}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white transition"
					aria-label="Previous image"
				>
					<ChevronLeft className="w-6 h-6 text-zinc-700" />
				</button>
				<button
					onClick={nextImage}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white transition"
					aria-label="Next image"
				>
					<ChevronRight className="w-6 h-6 text-zinc-700" />
				</button>
				<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
					{data.salonImages.map((_, idx) => (
						<span
							key={idx}
							className={`w-2 h-2 rounded-full ${
								carouselIdx === idx ? "bg-zinc-700" : "bg-zinc-300"
							}`}
						/>
					))}
				</div>
			</div>
			<div className="w-full mb-8">
				<h2 className="text-lg font-semibold mb-2">Services</h2>
				<ul className="list-disc pl-5 space-y-1">
					{data.services.map((service, idx) => (
						<li key={idx} className="text-base text-gray-700">
							{service}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full mb-8">
				<h2 className="text-lg font-semibold mb-2">Book an Appointment</h2>
				<div className="text-gray-700 mb-1">
					Phone:{" "}
					<a
						href={`tel:${data.booking.phone}`}
						className="underline text-zinc-700 hover:text-zinc-900"
					>
						{data.booking.phone}
					</a>
				</div>
				<div className="text-gray-700 mb-1">
					Email:{" "}
					<a
						href={`mailto:${data.booking.email}`}
						className="underline text-zinc-700 hover:text-zinc-900"
					>
						{data.booking.email}
					</a>
				</div>
				<div className="text-gray-700 mb-1">
					Website:{" "}
					<a
						href={data.booking.website}
						target="_blank"
						rel="noopener noreferrer"
						className="underline text-zinc-700 hover:text-zinc-900"
					>
						{data.booking.website}
					</a>
				</div>
				<div className="text-gray-500 text-sm mt-2">{data.booking.note}</div>
			</div>
			<div className="flex gap-8 mt-8">
				{data.socials.map((social, idx) => (
					<div key={idx} className="flex flex-col items-center relative">
						<div
							onMouseEnter={() => setHovered(idx)}
							onMouseLeave={() => setHovered(null)}
							className="text-zinc-700 font-medium underline cursor-pointer transition"
						>
							<a href={social.url} target="_blank" rel="noopener noreferrer">
								{social.label}
							</a>
						</div>
						<div
							className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300 ${
								hovered === idx
									? "opacity-100 scale-110"
									: "opacity-0 scale-75 pointer-events-none"
							}`}
						>
							<social.icon className="w-8 h-8 text-zinc-600 animate-bounce" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PortfolioTemplate25;
