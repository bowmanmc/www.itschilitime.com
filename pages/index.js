import Footer from '../components/Footer';
import IndexHeader from '../components/IndexHeader';
import IndexNav from '../components/IndexNav';
import Meta from '../components/Meta';


const index = () => {

    return (
        <>
            <Meta
                title="Michael Bowman"
                url="https://www.itschilitime.com"
                description="Welcome to Chilitime Design by Michael Bowman, a software engineer and educator from Dayton, Ohio."
            />
            <IndexHeader />
            <IndexNav />
            <Footer />
        </>
    );
};

export default index;
