import Link from "next/link";
import React from "react";

export default function () {
	return (
		<div>
			<h1>About Page</h1>

			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/products">Products</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</div>

		
	);
}