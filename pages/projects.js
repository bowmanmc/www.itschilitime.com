import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

import ProjectDescriptions from '../lib/projects';


const projects = () => {

    return (
        <>
            <Meta
                title="Chilitime Design : Projects"
                url="https://www.itschilitime.com/projects"
                description="Projects that I've been spending my free time on lately."
            />
            <Navbar />
            <div className="Projects">
                <h1>Projects</h1>
                <div className="Projects__list">
                    {
                        ProjectDescriptions.map(project => {
                            return <ProjectCard key={project.name} project={project} />;
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};
export default projects;
