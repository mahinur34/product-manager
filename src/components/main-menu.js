"use client";
import React from "react";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";
import { Linker } from "./linker";

export const MainMenu = (props) => {
	return (
		<Nav className="mx-auto" {...props}>
			{menuItems.map((item) => (
				<Linker
					href={item.url}
					key={item.id}
					prefetch={item.prefetch}
					as={Link}
				>
					{item.title}
				</Linker>
			))}
		</Nav>
	);
};

/* Nav.Link in prefetch öz. olmadığı için as kullandık */