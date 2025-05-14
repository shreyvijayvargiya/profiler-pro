import React, { useState, useEffect, useRef } from "react";
import {
	Music,
	Mic,
	Calendar,
	MapPin,
	Instagram,
	Twitter,
	Youtube,
	Tiktok,
	Spotify,
	ArrowRight,
	Play,
	Pause,
	Volume2,
	VolumeX,
	TurtleIcon,
	Music2,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "Luna Black",
		title: "Alternative Rock Artist",
		image:
			"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
		summary:
			"Breaking boundaries with a unique blend of alternative rock and electronic elements. Join me on this musical journey.",
		stats: {
			monthlyListeners: "2.5M",
			albums: "3",
			singles: "12",
			awards: "8",
		},
	},
	latestRelease: {
		title: "Midnight Echoes",
		cover:
			"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop",
		releaseDate: "March 15, 2024",
		description:
			"A journey through the depths of emotion, exploring themes of love, loss, and self-discovery.",
		tracks: [
			{ title: "Echoes in the Dark", duration: "3:45" },
			{ title: "Midnight Whispers", duration: "4:12" },
			{ title: "Dancing with Shadows", duration: "3:58" },
			{ title: "Lost in the Stars", duration: "4:30" },
		],
	},
	upcomingShows: [
		{
			date: "April 20, 2024",
			venue: "The Grand Hall",
			location: "New York, NY",
			tickets: "https://tickets.example.com/show1",
		},
		{
			date: "May 5, 2024",
			venue: "Starlight Arena",
			location: "Los Angeles, CA",
			tickets: "https://tickets.example.com/show2",
		},
		{
			date: "May 15, 2024",
			venue: "The Crystal Dome",
			location: "Chicago, IL",
			tickets: "https://tickets.example.com/show3",
		},
	],
	gallery: [
		{
			image:
				"https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop",
			title: "Live at Madison Square Garden",
		},
		{
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
			title: "Album Release Party",
		},
		{
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
			title: "Behind the Scenes",
		},
		{
			image:
				"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
			title: "Music Video Shoot",
		},
	],
	socialLinks: [
		{
			icon: Instagram,
			url: "https://instagram.com/lunablack",
			label: "Instagram",
			followers: "1.2M",
		},
		{
			icon: Twitter,
			url: "https://twitter.com/lunablack",
			label: "Twitter",
			followers: "800K",
		},
		{
			icon: Youtube,
			url: "https://youtube.com/lunablack",
			label: "YouTube",
			followers: "2.5M",
		},
		{
			icon: TurtleIcon,
			url: "https://tiktok.com/@lunablack",
			label: "TikTok",
			followers: "3.1M",
		},
		{
			icon: Music2,
			url: "https://open.spotify.com/artist/lunablack",
			label: "Spotify",
			followers: "4.8M",
		},
	],
};

const PortfolioTemplate18 = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
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

			// Animate stars
			const stars = document.querySelectorAll(".star");
			stars.forEach((star) => {
				gsap.to(star, {
					y: "random(-100, 100)",
					x: "random(-100, 100)",
					duration: "random(2, 4)",
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
				});
			});

			// Animate sections on scroll
			gsap.utils.toArray("section").forEach((section, i) => {
				gsap.from(section, {
					scrollTrigger: {
						trigger: section,
						start: "top bottom-=100",
						toggleActions: "play none none reverse",
					},
					y: 100,
					opacity: 0,
					duration: 1,
					delay: i * 0.2,
				});
			});

			// Parallax effect for images
			gsap.utils.toArray(".parallax-image").forEach((image) => {
				gsap.to(image, {
					yPercent: 30,
					ease: "none",
					scrollTrigger: {
						trigger: image,
						start: "top bottom",
						end: "bottom top",
						scrub: true,
					},
				});
			});
		};

		initGSAP();
	}, []);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-black text-white relative overflow-hidden"
		>
			{/* Animated Star Background */}
			<div className="fixed inset-0 z-0">
				{[...Array(50)].map((_, i) => (
					<div
						key={i}
						className="star absolute w-1 h-1 bg-white rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							opacity: Math.random() * 0.5 + 0.5,
						}}
					/>
				))}
			</div>

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-6xl md:text-7xl font-bold mb-6">
								{data.personalInfo.name}
							</h1>
							<p className="text-2xl text-gray-300 mb-8">
								{data.personalInfo.title}
							</p>
							<p className="text-gray-400 mb-12 text-lg">
								{data.personalInfo.summary}
							</p>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
								{Object.entries(data.personalInfo.stats).map(([key, value]) => (
									<div key={key} className="text-center">
										<p className="text-3xl font-bold mb-2">{value}</p>
										<p className="text-gray-400 capitalize">
											{key.replace(/([A-Z])/g, " $1").trim()}
										</p>
									</div>
								))}
							</div>
							<div className="flex space-x-4">
								{data.socialLinks.map((link, index) => (
									<a
										key={index}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
									>
										<link.icon className="w-6 h-6" />
									</a>
								))}
							</div>
						</div>
						<div className="relative">
							<img
								src={data.personalInfo.image}
								alt={data.personalInfo.name}
								className="w-full h-[600px] object-cover rounded-2xl"
							/>
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Latest Release Section */}
			<section className="relative py-20 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="relative">
							<img
								src={data.latestRelease.cover}
								alt={data.latestRelease.title}
								className="w-full aspect-square object-cover rounded-2xl parallax-image"
							/>
							<button
								onClick={() => setIsPlaying(!isPlaying)}
								className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
							>
								{isPlaying ? (
									<Pause className="w-16 h-16" />
								) : (
									<Play className="w-16 h-16" />
								)}
							</button>
						</div>
						<div>
							<h2 className="text-4xl font-bold mb-4">
								{data.latestRelease.title}
							</h2>
							<p className="text-gray-400 mb-6">
								Released {data.latestRelease.releaseDate}
							</p>
							<p className="text-gray-300 mb-8">
								{data.latestRelease.description}
							</p>
							<div className="space-y-4">
								{data.latestRelease.tracks.map((track, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
									>
										<div className="flex items-center space-x-4">
											<span className="text-gray-400">{index + 1}</span>
											<span>{track.title}</span>
										</div>
										<span className="text-gray-400">{track.duration}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Upcoming Shows Section */}
			<section className="relative py-20 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-12">
						Upcoming Shows
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{data.upcomingShows.map((show, index) => (
							<div
								key={index}
								className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors"
							>
								<div className="flex items-center space-x-4 mb-6">
									<Calendar className="w-6 h-6" />
									<span className="text-gray-300">{show.date}</span>
								</div>
								<h3 className="text-xl font-semibold mb-2">{show.venue}</h3>
								<div className="flex items-center space-x-2 text-gray-400 mb-6">
									<MapPin className="w-4 h-4" />
									<span>{show.location}</span>
								</div>
								<a
									href={show.tickets}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
								>
									<span>Get Tickets</span>
									<ArrowRight className="w-4 h-4" />
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="relative py-20 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{data.gallery.map((item, index) => (
							<div key={index} className="relative group">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-[400px] object-cover rounded-2xl"
								/>
								<div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
									<h3 className="text-2xl font-semibold">{item.title}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default PortfolioTemplate18;
