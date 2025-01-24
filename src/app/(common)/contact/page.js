import { ClientComp } from '@/components/client-comp';
import {PageHeader} from '@/components/page-header'
import { ServerComp } from '@/components/server-comp';
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

			<ClientComp>
				<ServerComp/>
 			</ClientComp> {/* bu şekilde yazdığımızda clientcomp client ta, servercomp server da çalışır */}
		</div>
	);
};

export default Page;

//servercomponentin içine client componenti koyabilirz sorun yok, 
//server serverda render edilir, client client ta render edilir, tersinde sorun var
//sarmallamamız gerekir.

//eğer bir yerde tıklama(onClick) varsa client side olmalı : use client