import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo">
                <Link href="/">
                    <span>
                        <svg className="logo-name" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                            strokeLinejoin="round" strokeMiterlimit="2"
                            clipRule="evenodd" viewBox="0 0 724 78">
                            <path
                                d="M1.834 58.458S-4.045 32.53 5.25 17.696C11.756 7.311 27.494.198 35.627.006c6.054-.143 12.397 2.576 17.073 6.24 2.47 1.931 4.629 4.412 5.186 7.383.752 4.006.344 5.29.344 5.29s2.336-2.965 7.434-1.14c7.535 2.702 3.73 39 3.864 40.073H65.46s1.274-20.253-1.68-25.144c-5.05-8.364-12.573-13.779-28.153-13.89-14.313-.104-22.22 4.365-29.541 14.703-4.089 5.773-.837 24.937-.837 24.937H1.834z"/>
                            <path
                                d="M39.657 56.584c2.836-1.144 9.135-1.615 14.374-1.908 10.597-.598 16.574 1.504 16.574 1.504l-.059 5.337s-1.392 1.018-2.401 2.318c-1.41 1.811-1.17 7.202-4.63 10.111-3.295 2.77-15.07 3.604-19.297.918-2.325-1.48-4.193-5.167-5.256-8.914a19.922 19.922 0 0 1-.633-1.461c-.4-1.101-.674-1.736-2.774-1.736s-2.354.987-2.79 1.93c-.195.422-.511 1.098-.853 1.822-.917 3.552-2.533 6.973-4.647 8.467-4.09 2.888-15.893 2.63-19.318.024-3.598-2.737-3.621-8.133-5.117-9.875C1.76 63.872.318 62.925.318 62.925L0 57.595s5.868-2.39 16.481-2.311c5.434.04 12.012.215 14.745 1.316 2.756.45 5.566.436 8.43-.016zm-8.838 3.822c-1.34-2.503-8.155-3.138-12.153-3.112-4 .027-11.847.073-12.915 2.896-1.068 2.824.245 11.679 2.709 13.552 3.01 2.29 5.818 2.274 8.77 2.393 2.952.12 6.699-.105 9.823-2.439 2.806-2.097 5.073-10.852 3.766-13.29zm9.14.08c1.216-2.562 7.993-3.53 11.988-3.697 3.995-.167 11.836-.504 13.04 2.263 1.204 2.767.324 11.675-2.046 13.67-2.895 2.433-5.7 2.551-8.643 2.815-2.942.264-6.696.22-9.93-1.957-2.905-1.956-5.595-10.593-4.409-13.093zm-38.89-.664l3.391-.164.069 1.405-3.39.166-.07-1.407zm68.576-1.365H66.25v1.408h3.395v-1.408z"/>
                            <g>
                                <path fillRule="nonzero"
                                    d="M145.988 28.301H126.62l-6.624 25.488-6.984-25.488H93.788v48.024h11.016V41.981l9.216 34.344h9.36l8.928-34.344v34.344h13.68V28.301zM154.34 28.301h14.76v48.024h-14.76zM203.804 57.965c-.432 5.4-2.592 7.992-6.48 7.992-4.824 0-6.912-3.888-6.912-13.176 0-4.536.36-7.416 1.296-9.864 1.008-2.736 3.168-4.464 5.616-4.464 2.304 0 4.32 1.44 5.256 3.6.72 1.584.936 2.808 1.008 5.544l13.68-.792c-.432-4.536-1.152-6.984-2.808-9.936-3.384-6.12-9.216-9.288-17.208-9.288-6.408 0-11.592 1.944-15.264 5.76-4.32 4.536-6.696 11.448-6.696 19.368 0 14.904 8.496 24.336 21.816 24.336 6.048 0 11.088-1.944 14.76-5.76 3.24-3.384 4.608-6.48 5.4-12.456l-13.464-.864zM263.996 28.301h-14.76v17.712h-11.16V28.301h-14.76v48.024h14.76V57.677h11.16v18.648h14.76V28.301zM298.484 76.325h15.048l-15.048-48.024h-15.552L268.1 76.325h11.952l2.88-9.432h12.888l2.664 9.432zm-13.032-19.872l3.888-13.968 3.888 13.968h-7.776zM353.996 64.877h-21.6v-7.848h17.496V46.373h-17.496v-6.984h21.6V28.301h-36.072v48.024h36.072V64.877zM393.524 64.589H374.66V28.301H359.9v48.024h33.624V64.589zM416.708 76.325h22.896c5.76 0 9.36-.72 11.952-2.448 3.24-2.16 5.328-6.552 5.328-11.232 0-5.976-3.168-9.72-9.288-11.232 2.592-.792 3.744-1.44 5.184-2.952 1.872-1.944 2.88-4.68 2.88-7.56 0-3.168-1.296-6.408-3.384-8.712-2.52-2.664-6.12-3.888-11.16-3.888h-24.408v48.024zm13.608-10.728v-8.64h6.696c3.528 0 5.616 1.584 5.616 4.32 0 2.664-2.016 4.32-5.112 4.32h-7.2zm0-18.864v-8.136h6.552c3.168 0 4.896 1.44 4.896 3.96 0 2.664-1.728 4.176-4.68 4.176h-6.768zM483.812 27.581c-13.824 0-22.968 9.864-22.968 24.768 0 14.76 9.216 24.696 22.896 24.696 13.464 0 22.752-10.08 22.752-24.84 0-7.848-2.016-13.608-6.48-18.216-4.248-4.392-9.432-6.408-16.2-6.408zm.072 10.872c4.608 0 6.768 4.104 6.768 12.6 0 2.592-.216 6.048-.576 7.992-.72 4.896-2.736 7.128-6.408 7.128-4.68 0-6.984-4.392-6.984-13.392 0-9.36 2.52-14.328 7.2-14.328zM571.652 28.301H560.42l-6.768 27.72-7.056-27.72h-11.592l-6.552 27.72-6.768-27.72H507.86l12.744 48.024h12.888l6.336-26.496 6.768 26.496h12.312l12.744-48.024zM628.172 28.301h-19.368l-6.624 25.488-6.984-25.488h-19.224v48.024h11.016V41.981l9.216 34.344h9.36l8.928-34.344v34.344h13.68V28.301zM662.66 76.325h15.048L662.66 28.301h-15.552l-14.832 48.024h11.952l2.88-9.432h12.888l2.664 9.432zm-13.032-19.872l3.888-13.968 3.888 13.968h-7.776zM723.14 76.325V28.301h-12.024v14.256c0 3.816.36 8.208 1.152 12.6-.936-2.16-2.448-4.968-5.112-9.288l-11.16-17.568H682.1v48.024h11.952V53.069c0-2.376-.216-3.672-1.152-7.848 1.008 2.304 1.656 3.744 2.16 4.68 1.008 1.728 1.944 3.456 2.952 5.256l13.104 21.168h12.024z"/>
                            </g>
                        </svg>
                        <svg className="logo-head" viewBox="0 0 78 78" fillRule="evenodd"
                            strokeLinejoin="round" strokeMiterlimit="2"
                            clipRule="evenodd">
                            <path
                                d="M1.834 58.458S-4.045 32.53 5.25 17.696C11.756 7.311 27.494.198 35.627.006c6.054-.143 12.397 2.576 17.073 6.24 2.47 1.931 4.629 4.412 5.186 7.383.752 4.006.344 5.29.344 5.29s2.336-2.965 7.434-1.14c7.535 2.702 3.73 39 3.864 40.073H65.46s1.274-20.253-1.68-25.144c-5.05-8.364-12.573-13.779-28.153-13.89-14.313-.104-22.22 4.365-29.541 14.703-4.089 5.773-.837 24.937-.837 24.937H1.834z"/>
                            <path
                                d="M39.657 56.584c2.836-1.144 9.135-1.615 14.374-1.908 10.597-.598 16.574 1.504 16.574 1.504l-.059 5.337s-1.392 1.018-2.401 2.318c-1.41 1.811-1.17 7.202-4.63 10.111-3.295 2.77-15.07 3.604-19.297.918-2.325-1.48-4.193-5.167-5.256-8.914a19.922 19.922 0 0 1-.633-1.461c-.4-1.101-.674-1.736-2.774-1.736s-2.354.987-2.79 1.93c-.195.422-.511 1.098-.853 1.822-.917 3.552-2.533 6.973-4.647 8.467-4.09 2.888-15.893 2.63-19.318.024-3.598-2.737-3.621-8.133-5.117-9.875C1.76 63.872.318 62.925.318 62.925L0 57.595s5.868-2.39 16.481-2.311c5.434.04 12.012.215 14.745 1.316 2.756.45 5.566.436 8.43-.016zm-8.838 3.822c-1.34-2.503-8.155-3.138-12.153-3.112-4 .027-11.847.073-12.915 2.896-1.068 2.824.245 11.679 2.709 13.552 3.01 2.29 5.818 2.274 8.77 2.393 2.952.12 6.699-.105 9.823-2.439 2.806-2.097 5.073-10.852 3.766-13.29zm9.14.08c1.216-2.562 7.993-3.53 11.988-3.697 3.995-.167 11.836-.504 13.04 2.263 1.204 2.767.324 11.675-2.046 13.67-2.895 2.433-5.7 2.551-8.643 2.815-2.942.264-6.696.22-9.93-1.957-2.905-1.956-5.595-10.593-4.409-13.093zm-38.89-.664l3.391-.164.069 1.405-3.39.166-.07-1.407zm68.576-1.365H66.25v1.408h3.395v-1.408z"/>

                        </svg>
                    </span>
                </Link>
            </div>

            <nav>
                <ul>
                    <li><Link href="/resume">Resume</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/writing">Writing</Link></li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;
