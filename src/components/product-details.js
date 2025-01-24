import Image from "next/image";
import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { ButtonReturnBack } from "./button-return-back";

const ProductDetails = ({ product }) => {
	const { title, image, price, description } = product;

	return (
		<Row className="g-4">
			<Col md={5}>
				<Image
					src={image}
					alt={title}
					width={500}
					height={500}
					className="img-fluid"
				/>
			</Col>
			<Col md={7}>
				<h2>{title}</h2>
				<p>{description}</p>
				<p><Badge>{price}</Badge></p>


                <ButtonReturnBack/>
			</Col>
		</Row>
	);
};

export default ProductDetails;