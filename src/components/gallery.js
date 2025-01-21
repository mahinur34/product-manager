import Image from "next/image";
import React from "react";

export const Gallery = () => {
	return (
		<div>
			<Image
				src="/images/iwatch.png"
				width={622}
				height={421}
				alt="...."
				className="img-fluid"
			/>

			<Image
				src="/images/nature.jpg"
				width={622}
				height={421}
				alt="...."
				className="img-fluid"
			/>

			<Image
				src="https://images.unsplash.com/photo-1736957764199-8b3f7b6c117d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				width="300"
				height="200"
				alt="...."
				className="img-fluid"
			/>
		</div>
	);
};