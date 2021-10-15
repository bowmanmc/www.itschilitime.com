import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import Playlists from './Playlists';
import PostHeader from './PostHeader';


const DAMLayout = ({ children, meta, playlists }) => {
    return (
        <>
            <Meta
                title={`${meta.title}`}
                url={`https://www.itschilitime.com/${meta.path}`}
                image={meta.cover}
                description={meta.description}
            />

            <Navbar />

            <div className="DAMLayout">
                <PostHeader
                    title={meta.title}
                    date={meta.date}
                />
                <div className="DAMLayout__content">
                    <div className="DAMLayout__writeup">
                        {children}
                    </div>
                    <div className="DAMLayout__playlists">
                        <Playlists appleUrl={playlists.apple} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DAMLayout;
