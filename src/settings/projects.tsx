import {
    portfolioBasicMain,
    portfolioBasicLandingPage,
    portfolioBasicRwd,
    starWarsMain,
    starWarsLandingPage,
    starWarsRwd,
    codersChessMain,
    codersChessLandingPage,
    codersChessRwd,
    estateMain,
    estateLandingPage,
    estateRwd,
    portfolioMain,
    portfolioLandingPage,
    portfolioRwd
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

return projects = [
    {
        id: language.pages.projects.p5_website.header,
        name: language.pages.projects.p5_website.header,
        shortDescription: language.pages.projects.p5_website.description,
        path: "/projects/website",
        next: language.pages.projects.next,
        photos: {
            alt: language.pages.projects.p5_website.description,
            thumb: {
                desktop: portfolioMain,
                mobile: portfolioMain
            },
            overview: {
                desktop: portfolioLandingPage,
                mobile: portfolioLandingPage
            },
            rwd: {
                desktop: portfolioRwd,
                mobile: portfolioRwd
            }
        },
        links: {
            live: language.pages.projects.p5_website.links.live,
            github: language.pages.projects.p5_website.links.github
        },
        date: language.pages.projects.p5_website.date,
        text: [
            language.pages.projects.p5_website.details.intro,
            language.pages.projects.p5_website.details.text,
            language.pages.projects.p5_website.details.finish
        ],
        stack: [
            language.pages.projects.p5_website.stack.html,
            language.pages.projects.p5_website.stack.css,
            language.pages.projects.p5_website.stack.js,
            language.pages.projects.p5_website.stack.ts,
            language.pages.projects.p5_website.stack.react,
            language.pages.projects.p5_website.stack.node,
        ],
        hide: false
    },
    {
        id: language.pages.projects.p2_starWarsQuiz.header,
        name: language.pages.projects.p2_starWarsQuiz.header,
        shortDescription: language.pages.projects.p2_starWarsQuiz.description,
        path: "/projects/star-wars-quiz",
        next: language.pages.projects.next,
        photos: {
            alt: language.pages.projects.p2_starWarsQuiz.description,
            thumb: {
                desktop: starWarsMain,
                mobile: starWarsMain
            },
            overview: {
                desktop: starWarsLandingPage,
                mobile: starWarsLandingPage
            },
            rwd: {
                desktop: starWarsRwd,
                mobile: starWarsRwd
            }
        },
        links: {
            live: language.pages.projects.p2_starWarsQuiz.links.live,
            github: language.pages.projects.p2_starWarsQuiz.links.github
        },
        date: language.pages.projects.p2_starWarsQuiz.date,
        text: [
            language.pages.projects.p2_starWarsQuiz.details.intro,
            language.pages.projects.p2_starWarsQuiz.details.text,
            language.pages.projects.p2_starWarsQuiz.details.finish
        ],
        stack: [
            language.pages.projects.p2_starWarsQuiz.stack.html,
            language.pages.projects.p2_starWarsQuiz.stack.css,
            language.pages.projects.p2_starWarsQuiz.stack.js
        ],
        hide: false
    },
    {
        id: language.pages.projects.p3_codersChess.header,
        name: language.pages.projects.p3_codersChess.header,
        shortDescription: language.pages.projects.p3_codersChess.description,
        path: "/projects/coders-chess",
        next: language.pages.projects.next,
        photos: {
            alt: language.pages.projects.p3_codersChess.description,
            thumb: {
                desktop: codersChessMain,
                mobile: codersChessMain
            },
            overview: {
                desktop: codersChessLandingPage,
                mobile: codersChessLandingPage
            },
            rwd: {
                desktop: codersChessRwd,
                mobile: codersChessRwd
            }
        },
        links: {
            live: language.pages.projects.p3_codersChess.links.live,
            github: language.pages.projects.p3_codersChess.links.github
        },
        date: language.pages.projects.p3_codersChess.date,
        text: [
            language.pages.projects.p3_codersChess.details.intro,
            language.pages.projects.p3_codersChess.details.text,
            language.pages.projects.p3_codersChess.details.finish
        ],
        stack: [
            language.pages.projects.p3_codersChess.stack.html,
            language.pages.projects.p3_codersChess.stack.css,
            language.pages.projects.p3_codersChess.stack.js,
            language.pages.projects.p3_codersChess.stack.ts,
        ],
        hide: false
    },
    {
        id: language.pages.projects.p4_estate.header,
        name: language.pages.projects.p4_estate.header,
        shortDescription: language.pages.projects.p4_estate.description,
        path: "/projects/real-estate",
        next: language.pages.projects.next,
        photos: {
            alt: language.pages.projects.p4_estate.description,
            thumb: {
                desktop: estateMain,
                mobile: estateMain
            },
            overview: {
                desktop: estateLandingPage,
                mobile: estateLandingPage
            },
            rwd: {
                desktop: estateRwd,
                mobile: estateRwd
            }
        },
        links: {
            live: language.pages.projects.p4_estate.links.live,
            github: language.pages.projects.p4_estate.links.github
        },
        date: language.pages.projects.p4_estate.date,
        text: [
            language.pages.projects.p4_estate.details.intro,
            language.pages.projects.p4_estate.details.text,
            language.pages.projects.p4_estate.details.finish
        ],
        stack: [
            language.pages.projects.p4_estate.stack.html,
            language.pages.projects.p4_estate.stack.css,
            language.pages.projects.p4_estate.stack.js,
            language.pages.projects.p4_estate.stack.ts,
            language.pages.projects.p4_estate.stack.react,
            language.pages.projects.p4_estate.stack.node,
        ],
        hide: false
    },
    {
        id: language.pages.projects.p1_portfolio.header,
        name: language.pages.projects.p1_portfolio.header,
        shortDescription: language.pages.projects.p1_portfolio.description,
        path: "/projects/portfolio",
        next: language.pages.projects.next,
        photos: {
            alt: language.pages.projects.p1_portfolio.description,
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
            live: language.pages.projects.p1_portfolio.links.live,
            github: language.pages.projects.p1_portfolio.links.github
        },
        date: language.pages.projects.p1_portfolio.date,
        text: [
            language.pages.projects.p1_portfolio.details.intro,
            language.pages.projects.p1_portfolio.details.text,
            language.pages.projects.p1_portfolio.details.finish
        ],
        stack: [
            language.pages.projects.p1_portfolio.stack.html, language.pages.projects.p1_portfolio.stack.css
        ],
        hide: false
    }
];
};
