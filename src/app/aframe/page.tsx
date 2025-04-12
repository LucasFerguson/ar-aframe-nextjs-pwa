// app/arapp/page.tsx
import Link from "next/link";
import AframeWrapper from "../../components/AframeWrapper";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-6">AR Experience</h1>

			{/* Render the client component wrapper */}
			<div className="w-full h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
				<AframeWrapper />
			</div>

			<Link href="/" className="mt-6 text-blue-500 underline">
				Return Home
			</Link>
		</main>
	);
}
