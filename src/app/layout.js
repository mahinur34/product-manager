
import { roboto, montserrat } from "@/helpers/font";
import "../styles/global.scss"; //her yere etki etmesi için merkezi yere import ediyoruz

//rootlayout old. için bütün uygulamayı sarmallayan dosya
export const metadata = {
	title: {
		template: "%s | Cosmo Shop",  //ilki değişken, değişecek yer
		default: "Cosmo Shop" //title gelmezse bunu yaz
	},
	description: "High quality products",
};

//layoutta içerik olmaz sayfa tasarımı olur, artık id root un dışına çıkabiliyoruz
export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${roboto.variable} ${montserrat.variable}`} suppressHydrationWarning>
		<body>{children}</body>
	</html>
	);
}

//suppressHydrationWarning : görmezden gel hydration
//hyration sebeplerinden biri de next js ile uyumsuz kütüphane kullanmak, ya da eklentiler