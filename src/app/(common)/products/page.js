import { PageHeader } from "@/components/page-header";
import { ProductList } from "@/components/product-list";
import React from "react";

const API_URL = `https://67573dc0c0a427baf94c36b2.mockapi.io/api/v1/products`;

export const metadata = {
	title: "Products",
	description: "High quality products",
};

const Page = async() => {

	//server comp. lerin re render olayı yok.

	const res = await fetch(API_URL);
	const data = await res.json();

	return (
		<div>
			<PageHeader title="Products" />
			<ProductList products={data} />
		</div>
	);
};

export default Page;

//preFetching nedir? : bu işlem için prog durdurulup npm run build ederiz ve  ve daha sonra npm run start build edilen projede
//burada oluşturulan linkte aşağı doğru inerken
//Link componenti ile oluşturulmuş linkleri önceden download ediyor, böyle olmasını istersek prefetch={false} yapmalıyız.
//bayat sayfa olayını hatırla.30sn süreli olan