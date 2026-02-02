export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "UI/UX Designer",
        icon: "/backend.webp",
    },
    {
        title: " Web Developer",
        icon: "/web.webp",
    },
    {
        title: "App Developer",
        icon: "/mobile.webp",
    },
    {
        title: "Software Engineer",
        icon: "/creator.webp",
    },
];
const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  }
];



const experiences = [
    {
        title: "Next.JS Developer",
        company_name: "Sparkbright Engineering",
        icon: "/company/sparkbright.webp",
        iconBg: "#E6DEDD",
        date: "2025 - 2026",
        points: [
           "Expertise en autodidacte : Acquisition d'une maîtrise de React.JS et Next.JS grâce à un apprentissage indépendant.",
"Développement de site web réussi : Conception et développement d'un site web portfolio attrayant et convivial avec Next.JS.",
"Design collaboratif : Travail en étroite collaboration avec les parties prenantes pour recueillir les retours et améliorer l'interactivité du portfolio."
        ],
    },
]
const testimonials = [
    {
        id: 1,
        testimonial:
            "Behance est une plateforme de médias sociaux appartenant à Adobe, dont l'objectif principal est de présenter et de découvrir des œuvres créatives..",
        name: "Kouadio Desire",
        image: "/socialmedia/behance.svg",
        link: "https://www.behance.net/omthecreator",
    },
    {
        id: 2,
        testimonial:
            "LinkedIn est une plateforme de médias sociaux axée sur le monde des affaires et de l'emploi, qui fonctionne via des sites web et des applications mobiles..",
        name: "Kouadio Desire",
        image: "/socialmedia/linkedin.svg",
        link: "https://www.linkedin.com/in/om-patel-401068143/",
    },
    {
        id: 5,
        testimonial:
            "N'hésitez pas également à consulter mon profil Github où j'ai partagé tous mes codes, des plus basiques aux plus avancés.",
        name: "Kouadio Desire",
        image: "/tech/github.webp",
        link: "https://github.com/omunite215",
    },
];


const projects :{
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link?: string;
    deploy_link: string;
    platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
        
    /* {
        name: "HooBank",
        description:
            "A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
        tags: [
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: "/projectimg/hoobank.webp",
        source_code_link: "https://github.com/omunite215/hoobank",
        platform: "Vercel",
        deploy_link: "https://hoobankbyom.netlify.app/",
    }, */
   /*  {
        name: "MERN Dashboard",
        description:
            " Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "materialui",
                color: "orange-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
        ],
        image: "/projectimg/mern.png",
        source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
        platform: "Web",
        deploy_link: "https://admin-frontend-r705.onrender.com/",
    }, */
    /* {
        name: "Metaverse Web 3.0",
        description:
            "A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "framer-motion",
                color: "orange-text-gradient",
            },
        ],
        image: "/projectimg/metaverse.png",
        source_code_link: "https://github.com/omunite215/Project_Metaverse",
        platform: "Vercel",
        deploy_link: "https://project-metaverse-beta.vercel.app/",
    }, */
    /* 
        name: "Issue Tracker",
        description:
            "A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "shadCN",
                color: "orange-text-gradient",
            },
            {
                name: "mySQL",
                color: "green-text-gradient",
            },
        ],
        image: "/projectimg/issuetracker.png",
        source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
        platform: "Vercel",
        deploy_link: "https://project-issue-tracker.vercel.app/",
    }, */
];

export { services, technologies, experiences, testimonials, projects };