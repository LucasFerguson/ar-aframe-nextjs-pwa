// components/AframeWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import Script from 'next/script';

const AframeScene = dynamic(() => import("./AframeScene"), {
	ssr: false, // Now allowed in client component
	loading: () => <p>Loading AR scene...</p>,
});

export default function AframeWrapper() {
	return (
		<>
			{/* <Script
				src="/stats.min.js"
				strategy="beforeInteractive"
			/> */}
			<AframeScene />
		</>
	);
}
