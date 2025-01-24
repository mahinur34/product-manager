"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge, Card } from "react-bootstrap";

export const ProductCard = ({ product }) => {
	const { id, title, image, price } = product;

	return (
		<Card href={`/products/${id}`} as={Link} className="cursor-pointer"> {/* tıklandığında */}
			<div className="position-relative" style={{ height: "200px" }}>
				<Card.Img
					variant="top"
					src={image}
					as={Image}
					fill
					alt={title}
                    style={{ objectFit: "cover" }}  /* resim div den sonra gitmişti çünkü div in yüksekliği yok */
				/>
			</div>

			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					<Badge>{price}</Badge>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};


