"use client"; // Ensure this runs only on the client side

import "aframe";
// import "aframe-ar"; // Import A-Frame AR module (if applicable)

export default function AframeScene() {
	return (
		<a-scene
			vr-mode-ui="enabled: false"
			embedded
			arjs="sourceType: webcam; debugUIEnabled: false;"
		>
			{/* Example entities in the AR scene */}
			<a-box
				position="0 0.5 -2"
				rotation="0 45 0"
				color="#4CC3D9"
				shadow
				animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
			></a-box>

			<a-sphere
				position="-1 1 -3"
				radius="0.5"
				color="#EF2D5E"
				shadow
			></a-sphere>

			<a-plane
				position="0 0 -4"
				rotation="-90 0 0"
				width="10"
				height="10"
				color="#7BC8A4"
			></a-plane>

			<a-light type="directional" intensity="1" position="2 4 -3"></a-light>
		</a-scene>
	);
}
