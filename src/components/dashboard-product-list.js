import React from "react";
import { Table } from "react-bootstrap";
import { ButtonEditProduct } from "./button-edit-product";
import { ButtonDeleteProduct } from "./button-delete-product";
import { ButtonNewProduct } from "./button-new-product";

export const DashboardProductList = ({ products }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th style={{ textAlign: "right" }}>
						<ButtonNewProduct />
					</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product, index) => (
					<tr key={product.id}>
						<td>{index + 1}</td>
						<td>{product.title}</td>
						<td style={{ textAlign: "right" }}>${product.price}</td>
						<td style={{ textAlign: "right" }}>
							<ButtonEditProduct id={product.id} />
							<ButtonDeleteProduct id={product.id} />
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};