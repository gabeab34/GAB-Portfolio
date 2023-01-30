import eventFinder from "../components/assets/EventFinder_Screenshot.png"
// import smashMe from "../components/assets/ScreenshotProject2.png"
import noteTaker from "../components/assets/noteTaker.png"
import password from "../components/assets/password.png"
import scheduler from "../components/assets/scheduler.png"
import weatherApp from "../components/assets/WeatherApp.png"
import viewfromhere from "../components/assets/viewfromhere.png"

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
        name: "View-From-Here",
        deploymentUrl: "https://viewfromhere.herokuapp.com/",
        githubRepo: "https://github.com/MMMPhoto/View-From-Here",
        imgSrc: `${viewfromhere}`
    },
    {
        id: 3,
        name: "weatherApp",
        deploymentUrl: "https://gabeab34.github.io/GAB-WeatherApp/",
        githubRepo: "https://github.com/gabeab34/GAB-WeatherApp",
        imgSrc: `${weatherApp}`
    },
    {
        id: 4,
        name: "NoteTaker",
        deploymentUrl: "https://gab-note-taker.herokuapp.com/",
        githubRepo: "https://github.com/gabeab34/GAB-NoteTakerApp",
        imgSrc: `${noteTaker}`
    },
    {
        id: 5,
        name: "scheduler",
        deploymentUrl: "https://gabeab34.github.io/GAB-DayScheduler/",
        githubRepo: "https://github.com/gabeab34/GAB-DayScheduler",
        imgSrc: `${scheduler}`
    },
    {
        id: 6,
        name: "password",
        deploymentUrl: "https://gabeab34.github.io/GAB-PasswordGeneratorJS/",
        githubRepo: "https://github.com/gabeab34/GAB-PasswordGeneratorJS",
        imgSrc: `${password}`
    }
];

export default Projects
