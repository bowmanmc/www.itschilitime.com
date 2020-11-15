import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import PostHeader from './PostHeader';


const PostLayout = ({ children, meta}) => {
    return (
        <>
            <Meta
                title={`Chilitime Design : ${meta.title}`}
                url={`https://www.itschilitime.com/${meta.path}`}
                image={meta.cover}
                description={meta.description}
            />

            <Navbar />

            <div className="PostLayout">
                <PostHeader
                    title={meta.title}
                    date={meta.date}
                />

                {children}
            </div>
            <Footer />
        </>
    );
};

export default PostLayout;
