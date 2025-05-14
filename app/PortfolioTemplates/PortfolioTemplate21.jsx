import React from "react";

const data = {
	name: "Simpson",
	title: "Investor",
	avatar: "https://randomuser.me/api/portraits/men/32.jpg",
	cta: {
		image:
			"https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80",
		title: "Book a 1:1 Session",
		subtitle: "Chat about design or angel investing",
		button: { label: "Book Now", url: "#" },
	},
	sections: [
		{
			title: "Angel Investments (15+)",
			items: [
				{
					icon: "https://logo.clearbit.com/lovable.com",
					name: "Lovable",
					subtitle: "Series A",
					url: "#",
				},
				{
					icon: "https://logo.clearbit.com/amie.so",
					name: "Amie",
					subtitle: "Seed",
					url: "#",
				},
				{
					icon: "https://logo.clearbit.com/awarehealth.com",
					name: "Aware Health",
					subtitle: "Seed",
					url: "#",
				},
			],
		},
		{
			title: "Design Collaborations (25+)",
			items: [
				{
					icon: "https://logo.clearbit.com/gorillas.io",
					name: "Gorillas",
					subtitle: "First Designer",
					url: "#",
				},
				{
					icon: "https://logo.clearbit.com/arive.com",
					name: "Arive",
					subtitle: "First Designer",
					url: "#",
				},
				{
					icon: "https://logo.clearbit.com/enter.com",
					name: "Enter",
					subtitle: "First Designer",
					url: "#",
				},
			],
		},
		{
			title: "Advisory Positions (5+)",
			items: [
				{
					icon: "https://logo.clearbit.com/example.com",
					name: "Example Advisory",
					subtitle: "Advisor",
					url: "#",
				},
			],
		},
	],
};

const PortfolioTemplate21 = () => {
	return (
		<div className="min-h-screen bg-[#f5f5fa] flex items-center justify-center py-12">
			<div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 relative">
				{/* Header */}
				<div className="flex items-center justify-between mb-6">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
						<p className="text-lg text-gray-400 font-medium">{data.title}</p>
					</div>
					<img
						src={data.avatar}
						alt={data.name}
						className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
					/>
				</div>
				{/* CTA Card */}
				<div className="rounded-2xl overflow-hidden bg-black mb-8 relative flex items-center h-32">
					<img
						src={data.cta.image}
						alt="cta"
						className="absolute inset-0 w-full h-full object-cover opacity-60"
					/>
					<div className="relative z-10 flex-1 flex flex-col justify-center pl-6">
						<div className="text-white font-semibold text-base mb-1">
							{data.cta.title}
						</div>
						<div className="text-gray-200 text-sm mb-2">
							{data.cta.subtitle}
						</div>
						<div className="flex items-center space-x-2">
							<button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow transition">
								{data.cta.button.label}
							</button>
						</div>
					</div>
				</div>
				{/* Sections */}
				<div className="space-y-8">
					{data.sections.map((section, idx) => (
						<div key={idx}>
							<div className="flex items-center justify-between mb-2">
								<div className="text-gray-500 text-sm font-semibold">
									{section.title}
								</div>
								<span className="text-gray-300 text-xl">&rarr;</span>
							</div>
							<div className="space-y-3">
								{section.items.map((item, i) => (
									<div
										key={i}
										className="flex items-center justify-between bg-white rounded-xl px-2 py-2 hover:bg-gray-50 transition"
									>
										<div className="flex items-center space-x-3">
											<img
												src={item.icon}
												alt={item.name}
												className="w-10 h-10 rounded-xl object-cover bg-gray-100"
											/>
											<div>
												<div className="font-semibold text-gray-900 text-base leading-tight">
													{item.name}
												</div>
												<div className="text-xs text-gray-400">
													{item.subtitle}
												</div>
											</div>
										</div>
										<a
											href={item.url}
											className="ml-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold shadow-sm hover:bg-blue-100 transition"
										>
											Visit
										</a>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				{/* Dots for carousel (static for now) */}
				<div className="flex justify-center mt-4">
					<div className="flex space-x-1">
						<span className="w-2 h-2 bg-gray-300 rounded-full"></span>
						<span className="w-2 h-2 bg-gray-200 rounded-full"></span>
						<span className="w-2 h-2 bg-gray-200 rounded-full"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioTemplate21;
