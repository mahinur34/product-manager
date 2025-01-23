import React from "react";

const NotFound = () => {
	return <div>The page you're loking for doesn't exist</div>;
};

export default NotFound;

//roottaki not-found dosyası gerçekten fiziksel olarak talep edilen dosya url de yoksa
// bu durumda hangi segmentte olursa olsun her zaman bu not found dosyası çalısır

//alt segmentteki not found dosyaları ne zaman çalışır ?:
//sadece sizin kontrolünüzde notFound() methodu navigation dan gelen,
//segment bazlı not found devreye girer.