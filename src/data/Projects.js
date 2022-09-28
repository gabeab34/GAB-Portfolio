import eventFinder from "../components/assets/EventFinder_Screenshot.png"
import smashMe from "../components/assets/ScreenshotProject2.png"
import noteTaker from "../components/assets/noteTaker.png"
import password from "../components/assets/password.png"
import scheduler from "../components/assets/scheduler.png"
import weatherApp from "../components/assets/WeatherApp.png"

const Projects = [
    {
        id: 1,
        name: "eventFinder",
        deploymentUrl: "https://mmmphoto.github.io/Event-Finder/",
        githubRepo: "https://github.com/MMMPhoto/Event-Finder",
        imgSrc: `${eventFinder}`
    },
    {
        id: 2,
        name: "smashMe",
        deploymentUrl: "https://supersmashme.herokuapp.com/",
        githubRepo: "https://github.com/gabeab34/Smash.ME",
        imgSrc: `${smashMe}`
    },
    {
        id: 3,
        name: "weatherApp",
        deploymentUrl: "https://gabeab34.github.io/GAB-Weatherapp-C6/",
        githubRepo: 'https://github.com/gabeab34/GAB-Weatherapp-C6',
        imgSrc: `${weatherApp}`
    },
    {
        id: 4,
        name: "noteTaker",
        deploymentUrl: "https://gab-note-taker.herokuapp.com/",
        githubRepo: "https://github.com/gabeab34/GAB-NoteTaker-C11",
        imgSrc: `${noteTaker}`
    },
    {
        id: 5,
        name: "scheduler",
        deploymentUrl: "https://gabeab34.github.io/GAB-Calender-C5/",
        githubRepo: "https://github.com/gabeab34/GAB-Calender-C5",
        imgSrc: `${scheduler}`
    },
    {
        id: 6,
        name: "password",
        deploymentUrl: "https://gabeab34.github.io/GAB-PasswordGenerator-JS-C3/",
        githubRepo: "https://github.com/gabeab34/GAB-PasswordGenerator-JS-C3",
        imgSrc: `${password}`
    }
];

export default Projects
