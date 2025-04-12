// components/AframeWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const AframeScene = dynamic(() => import("./AframeScene"), {
	ssr: false, // Now allowed in client component
	loading: () => <p>Loading AR scene...</p>,
});

export default function AframeWrapper() {
	return <AframeScene />;
}
