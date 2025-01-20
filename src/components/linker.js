"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Linker = (props) => {
	const pathname = usePathname();

    const isActive = pathname === props.href ? "active" : "";

	return (
		<Link {...props} className={`nav-link ${isActive}`}>
			{props.children}
		</Link>
	);
};