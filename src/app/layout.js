import Navbar from "@/components/navbar";
import "@/styles/variables.css";
import "@/styles/globals.css";


export const metadata = {
  title: "Michael Bowman",
  description: "Welcome to Chilitime Design by Michael Bowman, a software engineer and educator from Dayton, Ohio.",
  url: "https://www.itschilitime.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
