import Galery from "@/components/galery";
import { wait } from "@/helpers/functions";

import React from "react";

export default async function (){

	await wait(3000);
	return (
		<div>
			<h1>About Page</h1>

			<Galery/>

			
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