import React from 'react'

function Portfolio() {
    const projects = [
        {
            name: "Zing",
            link: "https://zing-chat.herokuapp.com/",
            src: "zing",
            alt: "zing logo",
            github: "https://github.com/JamesLuu96/zing",
            desc: "test"
        },
        {
            name: "Who You Gonna Call?",
            link: "https://jpkashlak.github.io/who-you-gonna-call/",
            src: "who-you-gonna-call",
            alt: "Who You Gonna Call screenshot",
            github: "https://github.com/JPKashlak/who-you-gonna-call",
            desc: "test"
        },
        {
            name: "Silly Character Generator",
            link: "https://jpkashlak.github.io/silly-character-generator/",
            src: "generate-character",
            alt: "Character generator logo",
            github: "https://github.com/JPKashlak/silly-character-generator",
            desc: "test"
        },
        {
            name: "Budget Tracker",
            link: "https://safe-reef-57621.herokuapp.com/",
            src: "budget-tracker",
            alt: "budget tracker screenshot",
            github: "https://github.com/JPKashlak/budget-tracker",
            desc: "test"
        },
        {
            name: "Workday Scheduler",
            link: "https://jpkashlak.github.io/workday-scheduler/",
            src: "workday",
            alt: "workday screenshot",
            github: "https://github.com/JPKashlak/workday-scheduler",
            desc: "test"
        },
        {
            name: "Password Generator",
            link: "https://jpkashlak.github.io/password-generator/",
            src: "password-generator",
            alt: "password generator screenshot",
            github: "https://github.com/JPKashlak/password-generator",
            desc: "test"
        }
    ]
    return (
        <section id="portfolio">
       
            <ul id="portfolio-list">
                <li><h2><span>Portfolio</span></h2></li>
                {projects.map((project) => (
                    <li
                    className="mx-1"
                    key={project.name}
                    >
                            <img src={require(`../../assets/images/portfolio-thumbnails/${project.src}.png`)} alt={project.alt} width="200" height="200" />
                            <br />
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                            <br />
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            <br />
                            {/* <p>{project.desc}</p> */}
                    </li>
                ))}
            </ul>

        </section>
    )
    

}

export default Portfolio