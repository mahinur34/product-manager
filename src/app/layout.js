
import "../styles/global.scss"; //her yere etki etmesi için merkezi yere import ediyoruz


export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

//layoutta içerik olmaz sayfa tasarımı olur, artık id root un dışına çıkabiliyoruz
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				
				{children}
				
			</body>
		</html>
	);
}