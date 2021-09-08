import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import ResumeExperience from '../components/ResumeExperience';


const resume = () => {
    return (
        <>
            <Meta
                title="Michael Bowman : Resume"
                url="https://www.itschilitime.com/resume"
                description="Professional skills and work history for Michael Bowman, a software engineer and educator from Dayton, Ohio."
            />
            <Navbar />
            <div className="Resume">
                <section className="Resume__summary">
                    <h2>Summary</h2>
                    <p>
                        I am an experienced engineering manager, technical team lead,
                        application architect, fullstack software engineer, and educator
                        from Dayton, Ohio, with expertise in delivering web-based data
                        visualization applications to a wide variety of commercial and
                        government clients. I am passionate about growing high performing
                        engineering teams and working with them to unlock their potential
                        to build maintainable software applications that delight end-users.
                    </p>
                    <p>
                        For the last four years, I’ve worked at Mile Two, a young custom software
                        design and development company. Currently, I am responsible for recruiting,
                        leading, and mentoring an engineering staff of over twenty five,
                        and overseeing the execution of ten project teams totaling over $5m in revenue.
                    </p>
                    <p>
                        To help facilitate Mile Two’s rapid growth, I created the Mile Two Internship Program,
                        building it up over the last four years into one of the top internship programs
                        in the Dayton area. To date, we’ve brought thirty two interns through the program
                        and offered full time positions to nineteen of them.
                    </p>
                    <p>
                        Since 2014 I have taught evening Computer Science courses at Sinclair Community College.
                        I love helping students take their first steps towards a career in computer programming
                        and am excited to see them entering the workforce (and have even had the pleasure of
                        hiring a few of them).
                    </p>
                </section>

                <section className="Resume__skills">
                    <div>
                        <h2>Skills</h2>
                        <ul>
                            <li>Engineering Management</li>
                            <li>Project Management</li>
                            <li>Technical Leadership</li>
                            <li>Data Visualization</li>
                            <li>Geospatial Application Development</li>
                            <li>Software Architecture</li>
                            <li>Web Application Development</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Tools</h2>
                        <ul>
                            <li>Next.js</li>
                            <li>React</li>
                            <li>Vue</li>
                            <li>D3.js</li>
                            <li>SVG</li>
                            <li>Jest</li>
                            <li>Node.js</li>
                            <li>Docker</li>
                            <li>AWS</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Languages</h2>
                        <ul>
                            <li>JavaScript/TypeScript</li>
                            <li>SASS/CSS</li>
                            <li>HTML</li>
                            <li>Python</li>
                            <li>C++</li>

                        </ul>
                    </div>
                </section>

                <section className="Resume__experience">
                    <h2>Experience</h2>
                    <ResumeExperience
                        company="Mile Two"
                        title="Portfolio Director"
                        start="September 2017"
                        end="Present"
                        description={`
                        Helped grow the company from a rag-tag team of eight
                        into an organization of over one hundred and twenty people.
                        Led a portfolio consisting of over ten project teams working on
                        various commercial and government contracts totaling over $5m in revenue.
                        Managed a portfolio team consisting of over twenty staff members of
                        varying roles including Project Leads, Software Engineers, UX/UI Designers,
                        and Human Factors Engineers. Set the tone and direction for the
                        engineering staff and helped foster a culture of continuous learning
                        and improvement. Created and managed the Mile Two Internship Program,
                        providing thirty two interns with an opportunity to work on cross-functional
                        teams to design and build internal R&D software applications alongside
                        our experienced staff. Committed to improving diversity and inclusion
                        efforts at the company, setting and exceeding a goal of hiring 50%
                        of our interns from under-represented groups in technology.
                        `}
                    />

                    <ResumeExperience
                        company="Sinclair Community College"
                        title="Adjunct Faculty"
                        start="January 2014"
                        end="Present"
                        description={`
    Adjunct professor for the Computer Information Systems
    department, teaching an evening programming course one night a
    week. Instructed students from a wide range of backgrounds,
    ages, and skill levels. Courses taught include Introduction to
    Problem Solving and Computer Programming (C++), Data Analytics with Python,
    Web Development with HTML and CSS, C++ Software Development,
    and Java Software Development.
    Volunteered to assist extracurricular hackathon
    teams and served on the Software Engineering Advisory Board,
    helping set the direction for curriculum and program updates.
                        `}
                    />

                    <ResumeExperience
                        company="Applied Information Sciences"
                        title="Principal Software Engineer"
                        start="January 2014"
                        end="September 2017"
                        description={`
    Technical Team Lead and
    Principal Software Engineer for
    several contracts for the National Geospatial-Intelligence
    Agency (NGA) and the National Air and Space Intelligence Center
    (NASIC) developing web-based mapping and data visualization
    applications for intelligence analysts. Worked closely with end
    users to understand their job functions and needs first, then
    built tools to help distill a large amount of complex data into
    a useful format and answer key intelligence questions.
                        `}
                    />

                    <ResumeExperience
                        company="Booz Allen Hamilton"
                        title="Principal Software Engineer"
                        start="February 2011"
                        end="January 2014"
                        description={`
    Lead software developer for NGA
    Innovision’s GIAT Research and Development lab at NASIC. Led an
    agile, ten-person team responsible for the rapid prototyping of
    software to provide new capabilities for use across the
    intelligence community. Performed a wide variety of software
    development tasks, from gathering, mining, and warehousing
    extremely large datasets to designing and developing
    forward-looking user interfaces using front-end web
    technologies.
                        `}
                    />

                    <ResumeExperience
                        company="Moreover Technologies"
                        title="Senior Software Engineer"
                        start="September 2010"
                        end="February 2011"
                        description={`
    Developed software in Java for a news and social media startup.
    Wrote specialized “Harvesters” for scraping specific types of
    content off of websites (blogs, news articles, and used car
    listings). Used cloud computing technologies (Amazon EC2) to
    scale out content harvesting and data mining tasks. Worked as a
    part of a distributed development team with members in Dayton,
    Washington D.C., and London.
                        `}
                    />

                    <ResumeExperience
                        company="General Dynamics"
                        title="Principal Software Engineer"
                        start="March 2007"
                        end="September 2010"
                        description={`
    Worked as a technical lead for the
    user interface team on a number of projects supporting NASIC. In
    addition to my programming duties, I mentored junior members of
    the team on software engineering best practices and drove the
    adoption of agile software development techniques such as
    Test-Driven Development, Continuous Integration, and Scrum,
    leading to higher quality software developed faster.
                        `}
                    />

                    <ResumeExperience
                        company="Engyro"
                        title="Senior Software Engineer"
                        start="March 2006"
                        end="March 2007"
                        description={`
    Developed several of the Engyro non-Windows monitoring agents
    for Microsoft's System Center Operations Manager, allowing
    customers to monitor their Linux/Unix servers and software
    (such as Apache HTTPD and Oracle DBMS) alongside their Microsoft
    assets. Worked in a very dynamic environment where schedules and
    features were constantly changing based upon customer feedback
    and needs. Engyro was acquired by Microsoft in March 2007.
                        `}
                    />

                    <ResumeExperience
                        company="Red Hat"
                        title="Software Engineer"
                        start="August 2004"
                        end="March 2006"
                        description={`
    Worked on the Red Hat Network Satellite Server product helping to
    deliver bug fixes and new features to customers on a tight release
    schedule. I worked on the server-side team, responsible for developing
    the web interface and APIs to allow system administrators to update
    and manage a large network of Red Hat Linux machines easily. Day to
    day activities consisted of writing code for the Java based web
    application, documenting code and best practices, writing test plans,
    preparing level of effort time estimates for project management, and
    helping team members debug code.
                        `}
                    />

                    <ResumeExperience
                        company="Belcan"
                        title="Web Developer"
                        start="June 2001"
                        end="August 2004"
                        description={`
    Developed and maintained corporate intranet site.
                        `}
                    />
                </section>

                <section className="Resume__community">
                    <h2>Community</h2>
                    <div>
                        <h3>Dayton Data Visualization</h3>
                        <h4>2014-2018</h4>
                        <p>
                            I founded and ran the Dayton Data Visualization meetup group
                            to gather Dayton area experts to network and share knowledge.
                            I organized the quarterly meetups, built and maintained the website,
                            and managed the mailing list. The group grew to over 300 members
                            and we were able to host a number of great speakers on a wide
                            variety of topics.
                        </p>
                    </div>
                    <div>
                        <h3>Code for Dayton</h3>
                        <h4>2016-2018</h4>
                        <p>
                            I was on the leadership team for Code for Dayton, the Dayton area
                            Code for America brigade. I organized and led development projects
                            for the Dayton Regional Transit Authority and Five Rivers MetroParks.
                            I also organized and led several events and workshops for the Dayton
                            tech community.
                        </p>
                    </div>
                </section>

                <section className="Resume__education">
                    <h2>Education</h2>
                    <div>
                        <h3>Master of Science, Computer Science</h3>
                        <h4>Wright State University - 2013</h4>
                    </div>
                    <div>
                        <h3>Bachelor of Science, Computer Science</h3>
                        <h4>Miami University - 2004</h4>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default resume;
