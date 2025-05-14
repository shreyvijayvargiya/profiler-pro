import React, { useState, useEffect, useRef } from "react";
import { Twitter, Linkedin, Youtube, Globe2 } from "lucide-react";

// Add animation styles
const styles = `
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade-in {
	animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-delay-1 {
	animation: fadeIn 1s ease-out 0.2s forwards;
	opacity: 0;
}

.animate-fade-in-delay-2 {
	animation: fadeIn 1s ease-out 0.4s forwards;
	opacity: 0;
}

.animate-fade-in-delay-3 {
	animation: fadeIn 1s ease-out 0.6s forwards;
	opacity: 0;
}

.animate-fade-in-delay-4 {
	animation: fadeIn 1s ease-out 0.8s forwards;
	opacity: 0;
}

.animate-fade-in-delay-5 {
	animation: fadeIn 1s ease-out 1s forwards;
	opacity: 0;
}
`;

const data = {
	personalInfo: {
		name: "John Doe",
		title: "Motivational Speaker",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		stats: {
			yearsExperience: "8+",
			eventsSpoken: "200+",
			audienceReached: "50K+",
			corporateClients: "100+",
		},
	},

	socialLinks: [
		{
			icon: Youtube,
			url: "https://youtube.com/@alexchen",
			label: "YouTube",
			followers: "50K",
		},
		{
			icon: Twitter,
			url: "https://twitter.com/alexchen",
			label: "Twitter",
			followers: "18K",
		},
		{
			icon: Linkedin,
			url: "https://linkedin.com/in/alexchen",
			label: "LinkedIn",
			followers: "8K",
		},
		{
			icon: Globe2,
			url: "https://alexchen.com",
			label: "Website",
		},
	],
};

const PersonalityPortfolio = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const containerRef = useRef(null);
	const cursorRef = useRef(null);
	const heroRef = useRef(null);

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

			// Mouse tracking for custom cursor
			const cursor = cursorRef.current;
			const hero = heroRef.current;

			const handleMouseMove = (e) => {
				if (!hero) return;

				const rect = hero.getBoundingClientRect();
				const isInHero =
					e.clientX >= rect.left &&
					e.clientX <= rect.right &&
					e.clientY >= rect.top &&
					e.clientY <= rect.bottom;

				if (isInHero) {
					cursor.style.display = "block";
					gsap.to(cursor, {
						x: e.clientX - 10,
						y: e.clientY - 10,
						duration: 0.1,
						ease: "power2.out",
					});
				} else {
					cursor.style.display = "none";
				}
			};

			const handleMouseEnter = () => {
				cursor.style.display = "block";
			};

			const handleMouseLeave = () => {
				cursor.style.display = "none";
			};

			window.addEventListener("mousemove", handleMouseMove);
			hero?.addEventListener("mouseenter", handleMouseEnter);
			hero?.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				window.removeEventListener("mousemove", handleMouseMove);
				hero?.removeEventListener("mouseenter", handleMouseEnter);
				hero?.removeEventListener("mouseleave", handleMouseLeave);
			};
		};

		initGSAP();
	}, []);

	return (
		<div ref={containerRef} className="min-h-screen bg-black relative">
			<div
				className="absolute inset-0 opacity-40 animate-pulse"
				style={{
					backgroundImage:
						'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
					backgroundSize: "100px",
					backgroundPosition: "left top",
					backgroundRepeat: "repeat",
				}}
			/>
			<style>{styles}</style>
			{/* Custom Cursor */}
			<div
				ref={cursorRef}
				style={{
					display: "none",
					pointerEvents: "none",
					position: "fixed",
					width: "20px",
					height: "20px",
					background: "rgba(255, 255, 255, 0.3)",
					borderRadius: "50%",
					mixBlendMode: "difference",
					transition: "transform 0.2s ease",
					zIndex: 9999,
					transform: "translate(-50%, -50%)",
					backdropFilter: "blur(2px)",
					boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
				}}
			/>

			{/* Hero Section */}
			<section
				ref={heroRef}
				className="relative min-h-screen max-w-4xl mx-auto flex items-center justify-center overflow-hidden bg-zinc-900/50 border-l-2 border-r-2 border-zinc-700 border-dotted decoration-dotted"
			>
				{/* Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-white">
					<div className="flex flex-col items-center text-center">
						<img
							src={data.personalInfo.image}
							alt="Background"
							className="w-40 h-40 rounded-full ring-4 ring-zinc-800 hover:ring-8 transition-all duration-300 object-cover object-top"
						/>
						<h1 className="text-[8rem] md:text-[10rem] font-bold animate-fade-in relative bg-clip-text text-transparent bg-gradient-to-r from-zinc-50 via-zinc-500 to-red-500 animate-gradient-x animate-infinite">
							{data.personalInfo.name}
						</h1>
						<p className="text-2xl text-zinc-100 mb-4 font-semibold animate-fade-in-delay-1">
							{data.personalInfo.title}
						</p>

						<button className="animate-fade-in-delay-5 bg-white text-black shadow-xl ring-4 ring-zinc-800 mb-10 rounded-full hover:font-bold transition-all duration-300 ease-in-out p-3">
							Invite Speaking
						</button>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-delay-3">
							{Object.entries(data.personalInfo.stats).map(([key, value]) => (
								<div key={key} className="text-center">
									<p className="text-3xl font-bold mb-2">{value}</p>
									<p className="capitalize">
										{key.replace(/([A-Z])/g, " $1").trim()}
									</p>
								</div>
							))}
						</div>

						{/* Speaking Images Section */}
						<div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-4">
							{[
								{
									src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
									alt: "Public Speaking 1",
								},
								{
									src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
									alt: "Public Speaking 2",
								},
							].map((image, index) => (
								<img
									key={index}
									src={image.src}
									alt={image.alt}
									className="w-48 h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
								/>
							))}
						</div>

						{/* Social Links */}
						<div className="flex space-x-4 animate-fade-in-delay-5 mb-12">
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
				</div>
			</section>
		</div>
	);
};

export default PersonalityPortfolio;
