'use client';
import { useEffect } from 'react';

export default function HomePage() {
	useEffect(() => {
		// Dynamically import three-ar.js since it uses browser APIs
		import('./three-ar.js')
			.catch(err => console.error('Error loading AR:', err));
	}, []);

	return (
		<main>
			<div id="arContainer" style={{ width: '100vw', height: '100vh' }}></div>
		</main>
	);
}
