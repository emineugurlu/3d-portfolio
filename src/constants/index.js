import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: express, name: "Express", type: "Backend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: motion, name: "Motion", type: "Animation" },
    { imageUrl: mui, name: "Material-UI", type: "Frontend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: redux, name: "Redux", type: "State Management" },
    { imageUrl: sass, name: "Sass", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Built and enhanced dynamic web applications using React.js and modern front-end tools.",
            "Worked closely with UI/UX designers and developers to deliver polished, user-friendly interfaces.",
            "Applied responsive web design principles to ensure seamless performance across devices and browsers.",
            "Engaged in code review sessions, contributing ideas and improvements to maintain clean, efficient code.",
        ],
    },
    {
        title: "Intern",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Built and enhanced dynamic web applications using React.js and modern front-end tools.",
            "Worked closely with UI/UX designers and developers to deliver polished, user-friendly interfaces.",
            "Applied responsive web design principles to ensure seamless performance across devices and browsers.",
            "Engaged in code review sessions, contributing ideas and improvements to maintain clean, efficient code.",
        ],
    },
    {
        title: "Intern",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
           "Built and enhanced dynamic web applications using React.js and modern front-end tools.",
            "Worked closely with UI/UX designers and developers to deliver polished, user-friendly interfaces.",
            "Applied responsive web design principles to ensure seamless performance across devices and browsers.",
            "Engaged in code review sessions, contributing ideas and improvements to maintain clean, efficient code.",
        ],
    },
    {
        title: "Intern",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Built and enhanced dynamic web applications using React.js and modern front-end tools.",
            "Worked closely with UI/UX designers and developers to deliver polished, user-friendly interfaces.",
            "Applied responsive web design principles to ensure seamless performance across devices and browsers.",
            "Engaged in code review sessions, contributing ideas and improvements to maintain clean, efficient code.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/emineugurlu',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/emine-ugurlu/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'React-Portfolio-Website',
        description: 'This project is a modern and dynamic personal portfolio website developed with React.js.  It offers a seamless experience on all devices with its user-friendly interface, animated transitions, and responsive design.',
        link: 'https://github.com/emineugurlu/React-Portfolio-Website',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Personal Portfolio',
        description: 'My personal website created with HTML-CSS-JAVASCRIPT about myself and my projects.',
        link: 'https://github.com/emineugurlu/PERSONAL-PORTFOLIO',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Bank',
        description: 'developed a bank automation system using Java. This system simulates the operations users can perform at an ATM. Users can log in with their account number and password to check their balance, deposit and withdraw money, and view account transactions.',
        link: 'https://github.com/emineugurlu/Bank',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Bank',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/emineugurlu/Bank',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '3D',
        description: 'In this project, I created a dynamic bee animation using Three.js. The bee model was taken from Skarfect and animated with JavaScript. The project offers an interactive user experience using modern HTML, CSS and Three.js.',
        link: 'https://github.com/emineugurlu/3D',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Card Slider',
        description: 'I developed a draggable and animated card slider using HTML, CSS and JavaScript.',
        link: 'https://github.com/emineugurlu/CARD-SLIDER',
    }
];
