/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// import "./src/env.js";

// /** @type {import("next").NextConfig} */
// const config = {};

// export default config;

import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
	// Note: This is only an example. If you use Pages Router,
	// use something else that works, such as "service-worker/index.ts".
	swSrc: "src/app/sw.ts",
	swDest: "public/sw.js",
});

export default withSerwist({
	// Your Next.js config
});