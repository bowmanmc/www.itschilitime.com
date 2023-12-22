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
                    <p>👋 Hello there! I am an engineering manager with over twenty years of experience as a technical team lead, application architect, fullstack software engineer, and educator from Dayton, Ohio, with expertise in delivering web-based applications to a wide variety of commercial and government clients. I am passionate about growing high performing engineering teams and working with them to unlock their potential to build maintainable software applications that delight end-users.</p>

                    <p>Since 2014 I have taught evening Computer Science courses at Sinclair Community College. I love helping students take their first steps towards a career in computer programming and am excited to see them entering the workforce (and have even had the pleasure of hiring a few of them).</p>

                    <p>I would love to chat with you further about my career of leading teams, coaching Software Engineers, Technical Leads, and Engineering Managers, and architecting, building, delivering, and maintaining high-traffic, scalable software applications.</p>
                </section>

                <section className="Resume__skills">
                    <div>
                        <h2>Skills</h2>
                        <ul>
                            <li>Technical Leadership</li>
                            <li>Engineering Management</li>
                            <li>Coaching &amp; Mentorship</li>
                            <li>Project Management</li>
                            <li>Software Architecture</li>
                            <li>Data Visualization</li>
                            <li>Web Application Development</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Tools</h2>
                        <ul>
                            <li>Next.js</li>
                            <li>React</li>
                            <li>D3.js</li>
                            <li>SVG</li>
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
                        company="Kroger"
                        title="Senior Engineering Manager"
                        start="May 2023"
                        end="Present">
                        <p>Currently, I’m the Senior Engineering Manager for the UI/UX team on the Next Generation Point of Sale program. I am responsible for the technical implementation and delivery of user interface components for the new staffed-lane, self-checkout, and other point of sale applications coming to stores near you in 2025.</p>
                        <p>I manage a globally distributed team of thirty software and quality assurance engineers divided between two front-end web teams, a mobile team, and an API team. The team is a mix of Kroger employees and contractors from three different companies including onshore and offshore folks.</p>
                        <p>I coordinate with the Product and Design teams to help define the what and why and then work with my tech leads and software engineers to come up with a roadmap for how we will achieve the program’s goals.</p>
                        <p>I work with six other workstream Engineering Managers in the program to coordinate delivery and manage dependencies between teams, as well as integrate with multiple microservices, applications, and hardware devices.</p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="National Public Radio (NPR)"
                        title="Engineering Manager"
                        start="January 2022"
                        end="May 2023">
                        <p>Built out a new Voice & Emerging Platforms team, organizing a disparate set of one-off applications built by former NPR staff and third-party developers under a single group.</p>
                        <p>Responsible for the technical delivery of the Alexa and Google Voice Assistant applications, serving up over 4 million hours of content to 1.5 million listeners each week. Alexa, play NPR!</p>
                        <p>Worked with both internal and external stakeholders to prioritize bug fixing, feature development, and new application development against team capacity and (often) conflicting goals. Managed technical relationships between NPR and platform partners such as Amazon and Google.</p>
                        <p>Developed a data-driven team culture, helping to focus our engineering efforts leading to a 300% increase in our listener hours KPI for Alexa in 2022.</p>
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
                            Web Development with HTML and CSS, Website Development with PHP, C++ Software Development,
                            and Java Software Development.
                            Volunteered to assist extracurricular hackathon
                            teams and served on the Software Engineering Advisory Board,
                            helping set the direction for curriculum and program updates.
                        </p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Mile Two"
                        title="Director of Engineering"
                        start="September 2017"
                        end="December 2021">
                        <p>Helped grow the company from a small team of eight into a mature organization of over one hundred
                            and twenty people. I set the tone and direction for the engineering staff and helped foster an inclusive
                            culture of continuous learning and improvement.</p>
                        <p>Mentored engineering managers and technical leads on approaches to developing their projects and
                            teams, as well as their own careers. Led the engineering team in adopting industry best practices and
                            encouraging standardization across the organization on tools, frameworks, and development platforms,
                            ensuring our project teams were positioned well to deliver high quality custom applications to our customers.</p>
                        <p>Managed the training budget and programs for over forty people, aligning the career goals of our
                            software engineers with the strategic growth goals of the company (encouraging folks to take an interest
                            and train in areas such as Data Science, AI/ML, and DevOps).</p>
                        <p>Created and managed the Mile Two Internship Program, providing thirty two interns with an
                            opportunity to work on cross-functional teams to design and build internal R&D software applications
                            alongside our experienced staff. Improved diversity and inclusion efforts at the company, setting and
                            exceeding a goal of hiring 50% of our interns from under-represented groups in technology.</p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Applied Information Sciences"
                        title="Principal Software Engineer"
                        start="January 2014"
                        end="September 2017">
                        <p>Technical Team Lead and Principal Software Engineer for several contracts for the National Geospatial-Intelligence Agency (NGA) and the National Air and Space Intelligence Center (NASIC), developing web-based mapping and data visualization applications for intelligence analysts.</p>
                        <p>Worked closely with end users to understand their job functions and needs first, then built custom applications, dashboards, and tools to help distill a large amount of complex data into a useful format and answer key intelligence questions.</p>
                    </ResumeExperience>

                    <ResumeExperience
                        company="Booz Allen Hamilton"
                        title="Principal Software Engineer"
                        start="February 2011"
                        end="January 2014">
                        <p>
                            Lead Software Engineer for NGA Innovision’s GIAT Research and Development lab at NASIC. Led an agile, ten-person team responsible for the rapid prototyping of software to provide new capabilities for use across the intelligence community. Performed a wide variety of software development tasks, from gathering, mining, and warehousing extremely large datasets to designing and developing forward-looking user interfaces using front-end web technologies.
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
