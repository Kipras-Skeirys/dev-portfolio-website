import Card from "./common/Card"

function HomePage() {

    let personalProjects = [
        {
            title: "TemuHabitKit",
            description: "Recreating a simplified version of the HabitKit app to reinforce my recent crash course of Swift.",
            upperTags: ["2024", "Currently working on"],
            lowerTags: ["Swift", "SwiftUI", "iOS" ],
            gitHubURL: "https://github.com/Kipras-Skeirys/temu-habit-kit",
            liveDemoURL: null
        },
        {
            title: "2022 web app",
            description: "One-on-one video chat web app. Using webRTC for video communications, React for front-end, Node for back-end and MongoDB for the database.",
            upperTags: ["Web App", "2022"],
            lowerTags: ["NodeJS", "ReactJS", "MongoDB" ],
            gitHubURL: "https://github.com/Kipras-Skeirys/2022-web-app",
            liveDemoURL: null
        },
        {
            title: "This page",
            description: "A VPS that delivers my personal portfolio webpage and live demos to web apps with a variety of different tech stacks from one server instance.",
            upperTags: ["Web App", "VPS", "2025"],
            lowerTags: ["ReactJS", "AWS EC2", "NGINX" ],
            gitHubURL: "https://github.com/Kipras-Skeirys/dev-portfolio-website",
            liveDemoURL: "https://skeirys.com"
        },
        {
            title: "Inbest Tech Assessment",
            description: "UK postal code lookup website using public API",
            upperTags: ["Web App", "2024"],
            lowerTags: ["ReactJS", "REST" ],
            gitHubURL: "https://github.com/Kipras-Skeirys/inbest-tech-assessment",
            liveDemoURL: "https://inbest.skeirys.com"
        },
        {
            title: "Appointment Bot",
            description: "I needed a bot that would notify me whenever an appointment slot became available.",
            upperTags: ["Python Bot", "2024"],
            lowerTags: ["Python", "Selenium", "REST" ],
            gitHubURL: "https://github.com/Kipras-Skeirys/appointment-bot",
            liveDemoURL: null
        }
    ]

    let bootCampProjects = [
        {
            title: "Project_shush",
            description: "Single use one-on-one messaging web app.",
            upperTags: ["Web App", "2019"],
            lowerTags: ["Swift", "SwiftUI", "iOS" ],
            gitHubURL: "https://github.com/Kipras-Skeirys/project_shush",
            liveDemoURL: "https://project-shush.skeirys.com"
        }
    ]

    return (
        <div className="HomePage">
            <div className="header-cont">
                <h1>Personal Projects</h1>
                <h2>A variety of different personal project projects that I've done over the years in my free time</h2>
            </div>
            <div className="card-cont">
                {
                    personalProjects.map((project, i) => {
                        return <Card
                            title={project.title}
                            description={project.description}
                            upperTags={project.upperTags}
                            lowerTags={project.lowerTags}
                            gitHubURL={project.gitHubURL}
                            liveDemoURL={project.liveDemoURL}
                            key={i}
                        />
                    })
                }
            </div>
            <div className="header-cont">
                <h1>2019 Coding Bootcamp</h1>
                <h2>Bootcamp final project</h2>
            </div>
            <div className="card-cont">
                {
                    bootCampProjects.map((project, i) => {
                        return <Card
                            title={project.title}
                            description={project.description}
                            upperTags={project.upperTags}
                            lowerTags={project.lowerTags}
                            gitHubURL={project.gitHubURL}
                            liveDemoURL={project.liveDemoURL}
                            key={i}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default HomePage