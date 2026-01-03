import Footer from "@/components/footer";
import IndexHeader from "./_components/indexheader";
import IndexNav from "./_components/indexnav";

// Index page - www.itschilitime.com
export const metadata = {
  title: "Michael Bowman",
  description: "Welcome to Chilitime Design by Michael Bowman, a software engineer and educator from Dayton, Ohio.",
  url: "https://www.itschilitime.com",
};

export default function Index() {
    return (
        <>
            <IndexHeader />
            <IndexNav />
            <Footer />
        </>
    );
}
