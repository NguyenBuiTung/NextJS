import "./globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
library.add(fas);

export const metadata = {
  title: "CityGym",
  description: "Chào mừng đến với Tùng Pro Gymer 6 múi",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="https://citigym.com.vn/themes/citigym/images/logo.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      <body>
        <Header />
        {children}
        <script src="https://w.ladicdn.com/ladichat/sdk.js" id="652ceda6d5dbbc0012694766_652cff30d5dbbc00126b713c" async></script>
        <Footer />
      </body>
    </html>
  );
}
