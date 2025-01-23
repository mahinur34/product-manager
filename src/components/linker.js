"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavLink } from "react-bootstrap";

export const Linker = (props) => {
	const pathname = usePathname();

    const isActive = pathname === props.href ? "active" : "";

	return (
		<Link {...props} className={`nav-link ${isActive}`} as={NavLink}> {/* as NavLink yaptık çünkü hamburger menu açıldığında kapanmıyordu */}
			{props.children}
		</Link>
	);
};