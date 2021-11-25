import melodyImg from './melody.jpg'
import adamImg from './adam.jpg'

// icons
import email from './icons/email.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import portfolio from './icons/portfolio.png'

const team = [
  {
    name: "Melody Acosta",
    img: melodyImg,
    role: "UX/UI Designer",
    about: "Melody is a UX designer and researcher based in New York City. Prior to UX, she was a mental health clinician providing group and individual psychotherapy. Melody has a passion for discovering patterns and creating innovative solutions by defining existing journeys to improve experiences.",
    socialMedia: [
      {
        name: "Portfolio",
        img: portfolio,
        link: 'https://melodyux.design/',
      },
      {
        name: "Email",
        img: email,
        link: 'mailto:melodyux.design@gmail',
      },
      {
        name: 'LinkedIn',
        img: linkedin,
        link: 'https://www.linkedin.com/in/melodyacosta/'
      }
    ]
  },
  {
    name: "Adam Thometz",
    img: adamImg,
    role: "Software Engineer",
    about: "Adam is a full-stack software engineer based in New York City. He currently works as a music teacher for autistic students in grades K-5 and is looking to transition into the tech industry. Adam loves finding creative solutions to difficult problems and using his special education background to make websites more accessible.",
    socialMedia: [
      {
        name: 'Github',
        img: github,
        link: 'https://github.com/Adam-Thometz/'
      },
      {
        name: 'Email',
        img: email,
        link: 'mailto:adamthometz@gmail.com'
      },
      {
        name: 'LinkedIn',
        img: linkedin,
        link: 'https://www.linkedin.com/in/adam-thometz/'
      }
    ]
  }
]

export default team;