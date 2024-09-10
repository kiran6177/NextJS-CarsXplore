import { Footer, Navbar } from "@/Components";
import "./globals.css";
import { poppins } from "@/fonts";

export const metadata = {
  title: "CarXplore",
  description: "Explore with the cars of your choice!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
