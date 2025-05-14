/** @type {import('next').NextConfig} */
const path = require("path");
const withTM = require("next-transpile-modules")([
	// Add any modules that need to be transpiled here
	// For example:
	// 'react-syntax-highlighter',
	// 'gsap',
	// 'framer-motion'
]);

const nextConfig = {
	images: {
		domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
	},
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.(js|jsx)$/,
			include: /node_modules[\\/]src/,
			use: {
				options: {
					presets: ["next/babel"],
				},
			},
		});
		if (!isServer) {
			config.resolve.alias["yjs"] = path.resolve(
				__dirname,
				"../node_modules/yjs"
			);
		}
		return config;
	},
};

module.exports = withTM(nextConfig);
