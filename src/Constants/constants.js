import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faDiceD6,
  faEnvelope,
  faWindowRestore,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  avatar,
  awsIcon,
  calculator,
  cssIcon,
  eslintIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  neoIcon,
  nodeIcon,
  pawsitivePrototype,
  psqlIcon,
  pyIcon,
  raspIcon,
  reactIcon,
  viteIcon,
  flutterIcon,
  notionIcon,
  mixpanelIcon,
  firebaseIcon,
  appsflyerIcon,
  jiraIcon,
  androidIcon,
  reactNativeIcon,
  fazz,
  bn,
  deqode,
  stealth,
  bs,
  aws1,
  google,
  intel,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  flutterIcon,
  notionIcon,
  mixpanelIcon,
  firebaseIcon,
  appsflyerIcon,
  jiraIcon,
  androidIcon,
  reactNativeIcon,
  fazz,
  bn,
  deqode,
  stealth,
  bs,
  aws1,
  google,
  intel,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there! I'm delighted to have you here :)",

    "I'm Kapil Sahu, a 27-year-old software engineer based in India. My journey in the tech world is fueled by a profound passion for mobile technologies and user experience design.",

    "When I'm not immersed in code, you'll often find me lost in the pages of a good book. I also happen to be a devoted cat enthusiast and find joy in the occasional video game session.",

    "What truly excites me is collaborating with individuals and teams who share my enthusiasm for crafting exceptional user experiences. Your visit to my portfolio means a lot—thank you for stopping by!",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    id: 1,
    name: "Fazz Agen",
    description:
      "A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.",
    image: pawsitivePrototype,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.payfazz.android",
    demo_link: "https://arasarmemory.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 2,
    name: "BankSathi : Earn From Anywhere",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: calculator,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.app.banksathi",
    demo_link: "https://bl33hscalculator.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 3,
    name: "PAYFAZZ Master Agen",
    description:
      "Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.",
    image: pawsitivePrototype,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.safecash.transferapp&hl=enl&gl=US",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 4,
    name: "Empire Cinemas",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: calculator,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.binary.empirecinema",
    demo_link: "https://bl33hscalculator.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },

  {
    id: 5,
    name: "Capshun",
    description:
      "A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.",
    image: pawsitivePrototype,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.capshun.co&hl=enl&gl=US",
    demo_link: "https://arasarmemory.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 6,
    name: "Commentr",
    description:
      "Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.",
    image: pawsitivePrototype,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.commentrapp.commentr",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
  },
  {
    id: 7,
    name: "Star Cinemas",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: calculator,
    source_code_link:
      "https://play.google.com/store/apps/details?id=tech.brij.star_cinema&hl=en_IE&gl=US",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },

  {
    id: 8,
    name: "GOGO Cinemas",
    description:
      "A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.",
    image: pawsitivePrototype,
    source_code_link: "https://www.gogocinema.com/",
    demo_link: "https://arasarmemory.netlify.app/",
  },
  {
    id: 9,
    name: "WooYourBoo",
    description:
      "Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.",
    image: pawsitivePrototype,
    source_code_link: "https://www.wooyourboo.com/app",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
  },
  {
    id: 10,
    name: "High Vibe",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: calculator,
    source_code_link: "https://www.highvibe.network/vibes",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },
  {
    id: 11,
    name: "Peggy",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: pawsitivePrototype,
    source_code_link:
      "https://play.google.com/store/search?q=peggy&c=apps&hl=enl&gl=US",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },
  {
    id: 12,
    name: "Denzil Machado",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: calculator,
    source_code_link: "https://www.denzilmachado.com/",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },
  {
    id: 13,
    name: "Unpaniq",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: pawsitivePrototype,
    source_code_link: "",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "flutter",
    title: "Flutter",
    icon: flutterIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "android",
    title: "Android",
    icon: androidIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "firebase",
    title: "Firebase",
    icon: firebaseIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "jira",
    title: "Jira",
    icon: jiraIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "notion",
    title: "Notion",
    icon: notionIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "reactNative",
    title: "React Native",
    icon: reactNativeIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "mixpanel",
    title: "Mixpanel",
    icon: mixpanelIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "appsflyer",
    title: "Appsflyer",
    icon: appsflyerIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React JS",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "node",
    title: "Node JS",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
];

const experiences = [
  {
    title: "Sr. Software Engineer",
    company_name: "Banksathi",
    icon: bs,
    iconBg: "#ebfdf6",
    date: "Mar 2023 - Present",
    url: "banksathi.com",
  },
  {
    title: "Mobile Engineer SE2",
    company_name: "Fazz",
    icon: fazz,
    iconBg: "#FFFFFF",
    date: "Nov 2021 - Dec 2022",
    url: "https://fazz.com/",
  },
  {
    title: "Solution Engineer",
    company_name: "Deqode",
    icon: deqode,
    iconBg: "#FFFFFF",
    date: "Sep 2020 - Oct 2021",
    url: "https://deqode.com/",
  },
  {
    title: "Mobile Developer",
    company_name: "Binary Numbers IO",
    icon: bn,
    iconBg: "#FFFFFF",
    date: "Aug 2018 - Aug 2020",
    url: "https://binarynumbers.io/",
  },
];

const scholarships = [
  {
    id: 1,
    icon: google,
    title: "Google India Challenge Scholarship",
    issueDate: "Aug 2018",
    url: "https://drive.google.com/file/d/1_pr7ZYXwyEW5DV-S8_p_D9niud-G45qi/view?usp=sharing",
  },
  {
    id: 2,
    icon: intel,
    title: "Intel® Edge AI Scholarship",
    issueDate: "Mar 2020",
    url: "https://drive.google.com/file/d/1cftoQblpagb3qIrcUdkkvodAkZpQgQSo/view",
  },
  {
    id: 3,
    icon: aws1,
    title: "AWS Machine Learning Scholarship",
    issueDate: "Aug 2020",
    url: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/3c27e024-f5db-49c6-874a-36321c9a6ceb.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&bsft_clkid=5c38e276-9e78-460a-99ae-7b6ef7bab4",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  icons,
  introduction,
  markerSvg,
  media,
  memoji,
  projects,
  skills,
  experiences,
  scholarships,
};
