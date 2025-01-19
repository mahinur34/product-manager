import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			<h2>Products Page</h2>

			{[...new Array(50)].map((_, i) => (
				<p key={i}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Itaque enim in vel sed nostrum molestias quis excepturi
					voluptas deleniti provident? Corporis harum aperiam
					temporibus accusamus quod? Explicabo autem suscipit quia!
				</p>
			))}

            <Link href="/dashboard">Dashboard</Link>
		</div>
	);
};

export default Page;

//preFetching nedir? : bu işlem için prog durdurulup npm run build ederiz ve  ve daha sonra npm run start build edilen projede
//burada oluşturulan linkte aşağı doğru inerken
//Link componenti ile oluşturulmuş linkleri önceden download ediyor, böyle olmasını istersek prefetch={false} yapmalıyız.
//bayat sayfa olayını hatırla.30sn süreli olan