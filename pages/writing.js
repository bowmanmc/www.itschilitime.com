import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import PostLinkCard from '../components/PostLinkCard';
import { posts } from '../lib/api';


const writing = () => {
    return (
        <>
            <Meta
                title="Michael Bowman : Writing"
                url="https://www.itschilitime.com/writing"
                description="Brainwave transmissions from Michael Bowman, a software engineer and educator from Dayton, Ohio."
            />
            <Navbar />
            <div className="writing">
                {
                    posts.map(post => {
                        return (
                            <PostLinkCard
                                key={post.link}
                                link={post.link}
                                title={post.title}
                                cover={post.cover}
                            />
                        );
                    })
                }
            </div>
            <Footer />
        </>
    );
};
export default writing;
