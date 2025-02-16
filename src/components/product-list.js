import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProductCard } from "./product-card";

export const ProductList = ({ products }) => {
	return (
		<Row xs={1} sm={2} md={3} className="g-4">
			{products.map((item) => (
				<Col key={item.id}>
					<ProductCard product={item} />
				</Col>
			))}
		</Row>
	);
};