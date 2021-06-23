import {
    portfolioBasicMain,
    portfolioBasicLandingPage,
    portfolioBasicRwd
} from '../assets/projects';
import language_EN from '../language/en.json'
import language_PL from '../language/pl.json'

import { selectedLanguage } from '../reducers/state';
import { useSelector } from 'react-redux';
let projects: any = [];
export default function ProjectsComponent() {
    const actualLanguage = useSelector(selectedLanguage);
    switch (actualLanguage) {
        case "Polski":
            window.language = language_PL;
            break;
        case "English":
            window.language = language_EN;
            break;
        default:
            window.language = language_EN;
            break;
    }
    console.log("actualLanguage : ", actualLanguage);

return projects = [
    {
        id: language.pages.projects.p1_portfolio.header,
        name: language.pages.projects.p1_portfolio.header,
        shortDescription: "Portfolio które właśnie oglądasz",
        path: "/projects/portfolio",
        photos: {
            alt: "personal portfolio website",
            thumb: {
                desktop: portfolioBasicMain,
                mobile: portfolioBasicMain
            },
            overview: {
                desktop: portfolioBasicLandingPage,
                mobile: portfolioBasicLandingPage
            },
            rwd: {
                desktop: portfolioBasicRwd,
                mobile: portfolioBasicRwd
            }
        },
        links: {
            live: "https://przemekmajka.pl",
            github: "https://github.com/Pshemcio/portfolio/"
        },
        date: "05/2021",
        text: [
            "Strona na której aktualnie się znajdujesz. Jest to jak do tej pory jeden z bardziej rozbudowanych projektów jakie stworzyłem.",
            "Do stworzenia portfolio postanowiłem użyć ReactJS - głownie ze względu na możliwość wykorzystania routingu. Za jego pomocą udało mi się stworzyć animowane przejścia między podstronami.",
            "Strona wykorzystuje bibliotekę LocomotiveScroll, dzięki której scrollowanie na desktopach jest bardzo gładkie i przyjemne dla oka. Okrąg podążający za kursorem to już czysty JS."
        ],
        stack: [
            "React", "React router", "Styled Components", "LocomotiveScroll"
        ],
        hide: false
    },
];

};
