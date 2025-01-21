
import { roboto, montserrat } from "@/helpers/font";
import "../styles/global.scss"; //her yere etki etmesi için merkezi yere import ediyoruz


export const metadata = {
	title: "Cosmo Shop",
	description: "High quality products",
};

//layoutta içerik olmaz sayfa tasarımı olur, artık id root un dışına çıkabiliyoruz
export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
		<body>{children}</body>
	</html>
	);
}