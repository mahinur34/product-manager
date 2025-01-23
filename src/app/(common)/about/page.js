import { Gallery } from "@/components/gallery";
import { PageHeader } from "@/components/page-header";
import { wait } from "@/helpers/functions";
import React from "react";

export const metadata = {
	title: "About",
	description: "High quality products",
};

const Page = async () => {

	console.log("Bu static olarak oluşturuldu");

	await wait(3000);
	return (
		<div>
			
			<PageHeader title="About"/>

			<Gallery/>

			
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
	 Exercitationem quasi ipsa ut, natus perferendis atque
	  vero nihil quibusdam cupiditate repellendus?</p>

	  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
	 Exercitationem quasi ipsa ut, natus perferendis atque
	  vero nihil quibusdam cupiditate repellendus?</p>

	  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
	 Exercitationem quasi ipsa ut, natus perferendis atque
	  vero nihil quibusdam cupiditate repellendus?</p>

		</div>

		
	);
}

export default Page;

//cache eğer remde tutuluyorsa gecicidir,
//dist te tutuluyorsa kalıcıdır.

//staticten farklı olarak serverda olmayan bir sayfanın serverda oluşturulup ondan sonra gönderilmesi var : dynamicte 
//staticte ise zaten var olan bir html nin gönderilmesi var.
//önce her zaman html gelir.
//toplu gönderme yoktur.
//ikisi de SEO açısından önemlidir dynamic de statik de.