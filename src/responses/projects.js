const baseURLTech = "/assets/logos"
const baseURLProject = "/assets/projects"
const githubURL = "https://github.com/delafajarmulia"

const projects = [
    {
        image: `${baseURLProject}/animelist.png`,
        name: "DelAnimeList",
        description: "Anime listing website built with Next.js and Jikan.moe API.",
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
        description: "An easy-to-use platform for efficient asset borrowing and lending.",
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
        description: "Job vacancy information system website built with PHP and MySQL.",
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
        description: "Voting API website built with C# and .NET for seamless interaction.",
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
        description: "Library API website built with C# and .NET for seamless interaction.",
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
        description: "Landing page for Sayur Pop, showcasing fresh vegetables and products.",
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
        description: "Desktop app for Esemka Laundry built with C# and .NET for efficient laundry management.",
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
        description: "Desktop app for Parking System built with C# and .NET for efficient parking management.",
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