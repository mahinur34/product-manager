import React from "react";

const Page = async ({ params, searchParams }) => {
	const { id } = await params;
	return <div>Dashboard Product Details Page: {id}</div>;
};

export default Page;