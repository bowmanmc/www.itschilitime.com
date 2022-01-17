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
                        I am an engineering manager with over twenty years of experience as a technical team lead, application architect, fullstack software engineer, and educator from Dayton, Ohio, with expertise in delivering web-based data visualization applications to a wide variety of commercial and government clients. I am passionate about growing high performing engineering teams and working with them to unlock their potential to build maintainable software applications that delight end-users.
                    </p>
                    <p>
                        Since 2014 I have taught evening Computer Science courses at Sinclair Community College. I love helping students take their first steps towards a career in computer programming and am excited to see them entering the workforce (and have even had the pleasure of hiring a few of them).
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
                        company="National Public Radio (NPR)"
                        title="Engineering Manager"
                        start="January 2022"
                        end="Present">
                        <p>
                            Engineering Manager for the Voice Platform team.
                            <em> Alexa, Play NPR!</em>
                        </p>
                    </ResumeExperience>


                    <ResumeExperience
                        company="Sinclair Community College"
                        title="Adjunct Faculty"
                        start="January 2014"
                        end="Present">
                        <p>
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
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Mile Two"
                        title="Portfolio Director"
                        start="September 2017"
                        end="December 2021">
                        <p>
                            Provided empathetic, enthusiastic leadership while helping grow the company from a small team of eight into a mature organization of over one hundred and twenty people. I managed ten project teams, consisting of over twenty staff members of varying roles and levels, totaling over $5m in revenue. I was responsible for managing the portfolio financials, budgets and projections, roadmap and vision, and business development activities. I coordinated with the other portfolios to adapt to changing customer and business priorities, ensuring our project teams were positioned well to deliver high quality custom applications to our customers.
                        </p>
                        <p>
                            As Director of Engineering I set the tone and direction for the engineering staff and helped foster a culture of continuous learning and improvement. I managed the training budget and programs for over forty people, aligning the career goals of our software engineers with the strategic growth goals of the company (encouraging folks to take an interest and train in areas such as Data Science, AI/ML, and DevOps). Ensured project teams were following industry best practices and encouraging standardization across the organization on tools, frameworks, and development platforms.
                        </p>
                        <p>
                            I also created and managed the Mile Two Internship Program, providing thirty two interns with an opportunity to work on cross-functional teams to design and build internal R&D software applications alongside our experienced staff. I am committed to improving diversity and inclusion efforts at the company, setting and exceeding a goal of hiring 50% of our interns from under-represented groups in technology.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Applied Information Sciences"
                        title="Principal Software Engineer"
                        start="January 2014"
                        end="September 2017">
                        <p>
                            Technical Team Lead and Principal Software Engineer for several contracts for the National Geospatial-Intelligence Agency (NGA) and the National Air and Space Intelligence Center (NASIC) developing web-based mapping and data visualization applications for intelligence analysts. Worked closely with end users to understand their job functions and needs first, then built tools to help distill a large amount of complex data into a useful format and answer key intelligence questions.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Booz Allen Hamilton"
                        title="Principal Software Engineer"
                        start="February 2011"
                        end="January 2014">
                        <p>
                            Lead software developer for NGA Innovision’s GIAT Research and Development lab at NASIC. Led an agile, ten-person team responsible for the rapid prototyping of software to provide new capabilities for use across the intelligence community. Performed a wide variety of software development tasks, from gathering, mining, and warehousing extremely large datasets to designing and developing forward-looking user interfaces using front-end web technologies.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Moreover Technologies"
                        title="Senior Software Engineer"
                        start="September 2010"
                        end="February 2011">
                        <p>
                        Developed software for a news and social media startup. Wrote specialized “Harvesters” for scraping specific types of content off of websites (news articles and used car listings). Utilized cloud computing technologies (Amazon EC2) to scale out content harvesting and mining tasks.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="General Dynamics"
                        title="Principal Software Engineer"
                        start="March 2007"
                        end="September 2010">
                        <p>
                            Worked as a technical team lead on a number of projects supporting the National Air and Space Intelligence Center (NASIC) at Wright Patterson Air Force Base. In addition to my programming duties, I mentored junior members of the team on software engineering best practices and drove the adoption of agile software development techniques such as Test Driven Development, Continuous Integration, and Scrum, leading to higher quality software developed faster. Subject matter expert on developing web-based data visualization applications for intelligence analysts.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Engyro"
                        title="Senior Software Engineer"
                        start="March 2006"
                        end="March 2007">
                        <p>
                            Developed several of the Engyro non-Windows monitoring agents for Microsoft's System Center Operations Manager, allowing customers to monitor their Linux/Unix servers and software (such as Apache HTTPD and Oracle DBMS) alongside their Microsoft assets. Worked in a very dynamic environment where schedules and features were constantly changing based upon customer feedback and needs. Engyro was acquired by Microsoft in March 2007.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Red Hat"
                        title="Software Engineer"
                        start="August 2004"
                        end="March 2006">
                        <p>
                            Worked on the Red Hat Network Satellite Server product helping to deliver bug fixes and new features to customers on a tight release schedule. I worked on the server-side team, responsible for developing the web interface and APIs to allow system administrators to update and manage a large network of Red Hat Linux machines easily. Day to day activities consisted of writing code for the Java based web application, documenting code and best practices, writing test plans, preparing level of effort time estimates for project management, and helping team members debug code.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Belcan"
                        title="Web Developer"
                        start="June 2001"
                        end="August 2004">
                        <p>
                            Responsible for intranet design, development, and maintenance. This involved prioritizing project requests from multiple customers, developing prototypes and collecting feedback, determining time and resource estimations, implementing the project, and maintaining the site after completion. Led a team of three web developers and was responsible for delegating tasks and responsibilities to members as projects were received from customers. Among sites developed were a document management system for ISO documentation, a portal providing news and company information, and a group management site providing dynamic workstation assignments, news and announcements, tips and tricks, and up- to-date software reference information.
                        </p>
                    </ResumeExperience>
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
