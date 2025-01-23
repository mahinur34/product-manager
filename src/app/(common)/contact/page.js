import {PageHeader} from '@/components/page-header'
import React from 'react'

export const metadata = {
	title: "Contact",
	description: "High quality products",

	//absolute var bir de: o da bu template i yapmak istemezsek lullanıyoruz.
};

const Page = () => {
	return (
		<div>
			<PageHeader title="Contact" />
		</div>
	);
};

export default Page;