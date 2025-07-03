const baseURLTech = "https://raw.githubusercontent.com/delafajarmulia/delafajarmulia.github.io/refs/heads/master/public/assets/logos"
const baseURLProject = "https://raw.githubusercontent.com/delafajarmulia/delafajarmulia.github.io/refs/heads/master/public/assets/projects"
const githubURL = "https://github.com/delafajarmulia"

const projects = [
    {
        image: `${baseURLProject}/portfolio.png`,
        name: "Portfolio V2",
        description: "A thoughtfully designed personal portfolio website that presents my projects, skills, and journey as a developer.",
        category: "web",
        stacks: [
            `${baseURLTech}/javascript.svg`,
            `${baseURLTech}/react.svg`,
            `${baseURLTech}/tailwindcss.svg`,
        ],
        repo: `${githubURL}/delafajarmulia.github.io`,
        link: "https://delafajarmulia.github.io"
    },
    {
        image: `${baseURLProject}/ngequiz.png`,
        name: "NgeQuiz",
        description: "A full-stack quiz web app for creating and playing quizzes with friends — includes scoring, sharing, and leaderboard features.",
        category: "web",
        stacks: [
            `${baseURLTech}/javascript.svg`,
            `${baseURLTech}/react.svg`,
            `${baseURLTech}/tailwindcss.svg`,
            `${baseURLTech}/express.svg`,
            `${baseURLTech}/prisma.svg`,
            `${baseURLTech}/postgresql.svg`,
            `${baseURLTech}/postman.svg`,
        ],
        repo: "",
        link: "https://ngequiz.netlify.app"
    },
    {
        image: `${baseURLProject}/suara-qita.png`,
        name: "Suara Qita",
        description: "A web-based system for managing and tracking tourism-related complaints from the public in a clear and structured way.",
        category: "web",
        stacks: [
            `${baseURLTech}/laravel.svg`,
            `${baseURLTech}/mysql.svg`,
            `${baseURLTech}/tailwindcss.svg`,
        ],
        repo: `${githubURL}/suara-qita`,
        link: ""
    },
    {
        image: `${baseURLProject}/animelist.png`,
        name: "DelAnimeList",
        description: "A responsive frontend web app for browsing popular anime and viewing detailed information, built to practice API integration and clean UI development.",
        category: "web",
        stacks: [
            `${baseURLTech}/javascript.svg`,
            `${baseURLTech}/nextjs.svg`,
            `${baseURLTech}/tailwindcss.svg`,
        ],
        repo: `${githubURL}/anime-list`,
        link: ""
    },
    {
        image: `${baseURLProject}/pinjem-asep.png`,
        name: "Pinjem Asep",
        description: "A lightweight web app for requesting and managing asset loans with a user-friendly interface.",
        category: "web",
        stacks: [
            `${baseURLTech}/html.svg`,
            `${baseURLTech}/css3.svg`,
            `${baseURLTech}/php.svg`,
            `${baseURLTech}/mysql.svg`
        ],
        repo: `${githubURL}/peminjaman-aset`,
        link: ""
    },
    {
        image: `${baseURLProject}/8weeksqlchallenge.png`,
        name: "8 Week SQL Challenge - Case 5",
        description: "Solution 8 Week SQL Challenge for Case Study 5 Data Mart.",
        category: "sql",
        stacks: [
            `${baseURLTech}/mysql.svg`
        ],
        repo: `${githubURL}/8weekchallenge`,
        link: ""
    },
    {
        image: `${baseURLProject}/bkk-system.png`,
        name: "BKK System",
        description: "A simple and structured platform for posting and exploring job opportunities through a user-friendly interface.",
        category: "web",
        stacks: [
            `${baseURLTech}/html.svg`,
            `${baseURLTech}/css3.svg`,
            `${baseURLTech}/php.svg`,
            `${baseURLTech}/mysql.svg`
        ],
        repo: `${githubURL}/bkk-system`,
        link: ""
    },
    {
        image: `${baseURLProject}/yukpilih.png`,
        name: "Yuk Pilih",
        description: "A web-based system that provides a smooth and secure way to submit, manage, and retrieve voting data through API interaction.",
        category: "api",
        stacks: [
            `${baseURLTech}/csharp.svg`,
            `${baseURLTech}/dotnet.svg`,
            `${baseURLTech}/sqlServer.svg`,
        ],
        repo: `${githubURL}/YukPilih`,
        link: ""
    },
    {
        image: `${baseURLProject}/yukpilih.png`,
        name: "Esemka Library",
        description: "A web-based system that enables easy access and management of library data through structured API endpoints.",
        category: "api",
        stacks: [
            `${baseURLTech}/csharp.svg`,
            `${baseURLTech}/dotnet.svg`,
            `${baseURLTech}/sqlServer.svg`,
        ],
        repo: `${githubURL}/esemka-library-api`,
        link: ""
    },
    {
        image: `${baseURLProject}/sayur-pop.png`,
        name: "Sayur Pop",
        description: "A landing page designed to showcase fresh vegetables and highlight featured products through a clean and engaging layout.",
        category: "web",
        stacks: [
            `${baseURLTech}/html.svg`,
            `${baseURLTech}/css3.svg`,
        ],
        repo: `${githubURL}/sayur-pop`,
        link: ""
    },
    {
        image: `${baseURLProject}/esemka-laundry.png`,
        name: "Esemka Laundry",
        description: "A desktop application designed to simplify and manage daily laundry operations with a user-friendly interface.",
        category: "desktop",
        stacks: [
            `${baseURLTech}/csharp.svg`,
            `${baseURLTech}/dotnet.svg`,
            `${baseURLTech}/sqlServer.svg`,
        ],
        repo: `${githubURL}/LaundrySystem`,
        link: ""
    },
    {
        image: `${baseURLProject}/parking-system.png`,
        name: "Parking System",
        description: "A desktop application built to streamline vehicle entry, exit, and parking data management in an organized workflow.",
        category: "desktop",
        stacks: [
            `${baseURLTech}/csharp.svg`,
            `${baseURLTech}/dotnet.svg`,
            `${baseURLTech}/sqlServer.svg`,
        ],
        repo: `${githubURL}/Parking-System`,
        link: ""
    },
]

export default projects