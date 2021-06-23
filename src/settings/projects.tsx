import chess from '../assets/projects/chess.png';

const projects: any = [
    {
        id: "portfolio",
        name: "Portfolio",
        shortDescription: "Portfolio które właśnie oglądasz",
        path: "/projects/portfolio",
        photos: {
            alt: "personal portfolio website",
            thumb: {
                desktop: chess,
                mobile: ''
            },
            overview: {
                desktop: '',
                mobile: ''
            },
            rwd: {
                desktop: '',
                mobile: ''
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

export default projects;