import { Gallery } from "@/components/gallery";
import { PageHeader } from "@/components/page-header";
import { wait } from "@/helpers/functions";
import React from "react";

export const metadata = {
	title: "About | Cosmo Shop",
	description: "High quality products",
};

const Page = async () => {

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