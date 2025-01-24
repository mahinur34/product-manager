"use client";

import React from "react";
import { Button } from "react-bootstrap";
import { TfiTrash } from "react-icons/tfi";
export const ButtonDeleteProduct = ({ id }) => {

	const handleDelete = () => {
		const confirmDelete = confirm("Are you sure you want to delete this product?");
		if(!confirmDelete) return;

		
	};

	return (
		<Button variant="link" onClick={handleDelete} style={{ color: "red" }}>
			<TfiTrash />
		</Button>
	);
};