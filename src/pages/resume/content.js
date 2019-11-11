import React from 'react';

import './content.scss';

export default () => {
    return (
        <div className="resume content">
            <section>
                <h2>Summary</h2>
                <p>
                I am an experienced engineering manager,
                technical team lead, application architect,
                software engineer, and educator from Dayton, Ohio, with
                expertise in delivering web-based data visualization
                applications to a wide variety of commercial and
                government clients.
                </p>
                <p>
                Currently I'm a Director of Engineering at Mile Two,
                a Dayton Ohio based custom application design
                company, where I recruit, lead, and mentor the engineering
                staff as well as lead the design, execution, and delivery of
                software projects to delighted customers.
                </p>
                <p>
                In addition to project work, I also manage the Mile Two
                Internship Program, which offers recent graduates
                in Computer Science, Visual Design, Human Factors
                Engineering, and Cognitive Systems Engineering an
                opportunity to work on a cross-functional project team
                to build an internal  R&D application and prepare them to
                transition into full-time roles with us.
                </p>
                <p>
                Since 2014 I have taught evening Computer Science
                courses at Sinclair Community College. I love helping students
                take their first steps towards a career in computer programming
                and am excited to see them entering the workforce.
                </p>
            </section>

            <section className="skills">
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
                        <li>React</li>
                        <li>Vue</li>
                        <li>D3.js</li>
                        <li>SVG</li>
                        <li>React Testing Library</li>
                        <li>Jest</li>
                        <li>Node.js</li>
                        <li>Docker</li>
                    </ul>
                </div>

                <div>
                    <h2>Languages</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>Sass</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>Experience</h2>
                September 2017 – present
                Mile Two
                Director of Engineering
                Helped grow the engineering team at Mile Two from seven to
                twenty-one developers. Created and ran the Mile Two Internship
                Program, bringing in entry-level developers and leveling them up
                to high-performing software engineers. Served as Technical Team
                Lead for several successful projects for both Commercial and
                Department of Defense customers.
                January 2014 – present
                Sinclair Community College
                Adjunct Faculty
                Adjunct professor for the Computer Information Systems
                department, teaching an evening programming course one night a
                week. Instructed students from a wide range of backgrounds,
                ages, and skill levels. Courses taught include Introduction to
                Problem Solving and Computer Programming (C++), Web Development
                with HTML and CSS, C++ Software Development, and Java Software
                Development. Volunteered to assist extracurricular hackathon
                teams and served on the Software Engineering Advisory Board,
                helping set the direction for curriculum and program updates.
                January 2014 – September 2017
                Applied Information Sciences
                Principal Software Engineer
                Security Clearance: TS/SCI. Principal Software Engineer for
                several contracts for the National Geospatial-Intelligence
                Agency (NGA) and the National Air and Space Intelligence Center
                (NASIC) developing web-based mapping and data visualization
                applications for intelligence analysts. Worked closely with end
                users to understand their job functions and needs first, then
                built tools to help distill a large amount of complex data into
                a useful format and answer key intelligence questions.
                February 2011 – January 2014
                Booz Allen Hamilton
                Principal Software Engineer
                Security Clearance: TS/SCI. Lead software developer for NGA
                Innovision’s GIAT Research and Development lab at NASIC. Led an
                agile, 10 person team responsible for the rapid prototyping of
                software to provide new capabilities for use across the
                intelligence community. Performed a wide variety of software
                development tasks, from gathering, mining, and warehousing
                extremely large datasets to designing and developing
                forward-looking user interfaces using front-end web
                technologies.
                September 2010 – February 2011
                Moreover Technologies
                Senior Software Engineer
                Developed software in Java for a news and social media startup.
                Wrote specialized “Harvesters” for scraping specific types of
                content off of websites (blogs, news articles, and used car
                listings). Used cloud computing technologies (Amazon EC2) to
                scale out content harvesting and data mining tasks. Worked as a
                part of a distributed development team with members in Dayton,
                Washington D.C., and London.
                March 2007 – September 2010
                General Dynamics
                Principal Software Engineer
                Security Clearance: TS/SCI. Worked as a technical lead for the
                user interface team on a number of projects supporting NASIC. In
                addition to my programming duties, I mentored junior members of
                the team on software engineering best practices and drove the
                adoption of agile software development techniques such as
                Test-Driven Development, Continuous Integration, and Scrum,
                leading to higher quality software developed faster.
            </section>

            <section>
                <h2>Education and Certifications</h2>
                <p>
                    May 2013
                    Wright State University
                    Master of Science, Computer Science
                    May 2004
                    Miami University
                    Bachelor of Science, Computer Science
                </p>
            </section>
        </div>
    );
};
