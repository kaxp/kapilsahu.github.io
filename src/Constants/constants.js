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
  peggy,
  capshun,
  commentr,
  denzil,
  empire,
  gogo,
  hvn,
  pma,
  star,
  unpaniq,
  woo,
  peggy1,
  appstore,
  playstore,
  web,
  kozo,
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
  peggy,
  capshun,
  commentr,
  denzil,
  empire,
  gogo,
  hvn,
  pma,
  star,
  unpaniq,
  woo,
  peggy1,
  appstore,
  playstore,
  web,
  kozo,
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

    "I'm Kapil Sahu, a 27-year-old software engineer situated in India. My journey in the tech world is fueled by a profound passion for mobile and web technologies.",

    "When I'm not immersed in code, you'll often find me lost in the pages of a good book. I also happen to be a devoted cat enthusiast and find joy in the occasional video game session.",

    "What truly excites me is collaborating with individuals and teams who share my enthusiasm for crafting exceptional softwares. Your visit to my portfolio means a lot—thank you for stopping by!",
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
      "Fazz Agen is a trusted platform that empowers users to sell various digital products and PPOB (Payment Point Online Banking) services, including mobile credits, bill payments, e-wallet top-ups, and bank transfers.",
    image: fazz,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.payfazz.android",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 2,
    name: "BankSathi",
    description:
      "Banksathi, now the 3rd largest credit card issuer in India as of June 2023 is a leading financial app, offers a zero-investment opportunity to sell financial products from top banks like HDFC, Kotak, SBI, AU Bank, Axis Bank.",
    image: bs,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.app.banksathi",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 3,
    name: "Empire Cinemas",
    description:
      "Empire Cinemas provides a convenient and streamlined movie experience for audiences in Lebanon, Saudi Arabia, and Iraq. The chain offers diverse movie experiences, including formats like DOLBY ATMOS, SCREEN X, IMAX, SPHERA, 4DX, MINIS, PREMIERE, FLEXOUND, and more.",
    image: empire,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.binary.empirecinema",
    appStoreUrl: "https://apps.apple.com/in/app/empire-cinemas/id1459864736",
    isActive: true,
  },
  {
    id: 4,
    name: "PAYFAZZ Master Agen",
    description:
      "PAYFAZZ Master Agent is an all-in-one application designed for seamless financial transactions allowing you to transfer funds, send and withdraw cash, top-up, pay water and electricity bills, etc safely and swiftly.",
    image: pma,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.safecash.transferapp&hl=enl&gl=US",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 5,
    name: "Peggy",
    description:
      "Peggy is the social marketplace that allows you to discover, buy, and sell art. A place for the art-curious and the art-expert, for the art gallery and artist.",
    image: peggy,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.peggy.mobile&hl=enl&gl=US",
    appStoreUrl:
      "https://apps.apple.com/in/app/peggy-buy-and-sell-art/id1584224807",
    isActive: true,
  },
  {
    id: 6,
    name: "High Vibe",
    description:
      "Highvibe Network integrates Web3 and blockchain technology, fostering personal growth and education connections while bridging the gap between crypto and culture through NFTs, DeFi Rewards, and a metaverse-friendly social fabric.",
    image: hvn,
    webUrl: "https://www.highvibe.network/",
    playStoreUrl: "",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 7,
    name: "Kozo",
    description:
      "Kozo: An invite-only expense management app for production houses, simplifying financial processes from petty cash to invoices. Trusted by Bollywood giants like Dharma Productions and Yash Raj Films.",
    image: kozo,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=io.binarynumbers.kozo",
    appStoreUrl: "https://apps.apple.com/in/app/kozo/id1487797528",
    isActive: true,
  },
  {
    id: 8,
    name: "Capshun",
    description:
      "Capshun is your go-to AI tool for instant photo captions and hashtags. Boasting a library of over 50,000 handpicked options, it's the ultimate solution for your Instagram and Facebook pictures and stories.",
    image: capshun,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.capshun.co&hl=enl&gl=US",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 9,
    name: "Star Cinemas",
    description:
      "Star Cinemas, a premier theater chain based in the UAE, boasts over 100 screens throughout the region. Star Cinemas provides a contemporary cinema experience complemented by food and beverage services.",
    image: star,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=tech.brij.star_cinema&hl=en_IE&gl=US",
    appStoreUrl: "https://apps.apple.com/us/app/star-cinemas/id1568091870",
    isActive: true,
  },
  {
    id: 10,
    name: "WooYourBoo",
    description:
      "WooYourBoo is a relationship app that uses love languages to enhance communication between couples, offering enjoyable features like quizzes, activities, rewards, and gamification for effective relationship-building and reconnection.",
    image: woo,
    webUrl: "https://www.wooyourboo.com/app",
    playStoreUrl: "",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 11,
    name: "GOGO Cinemas",
    description:
      "GogoCinemas is a platform providing a unique cinema experience with options like Private Screening for a VIP experience, Crowdsourced Screening to enjoy movies with friends, and Confirmed Screening for instant confirmation with pre-set tickets.",
    image: gogo,
    webUrl: "https://www.gogocinema.com/",
    playStoreUrl: "",
    appStoreUrl: "",
    isActive: false,
  },
  {
    id: 12,
    name: "Commentr",
    description:
      "Commentr is a streamlined social media app that allows users to earn money and rewards by engaging in discussions and commenting on posts.",
    image: commentr,
    webUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.commentrapp.commentr",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 13,
    name: "Denzil Machado",
    description:
      "Denzil Machado is a seasoned creative professional with 20+ years of experience in design, photography, film, and advertising. ",
    image: denzil,
    webUrl: "https://www.denzilmachado.com/",
    playStoreUrl: "",
    appStoreUrl: "",
    isActive: true,
  },
  {
    id: 14,
    name: "Unpaniq",
    description:
      "Unpaniq is a system for activating medical emergency protocols. With a simple tap, it connects users with the nearest medical facilities.",
    image: unpaniq,
    webUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    isActive: false,
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
      "I possess extensive proficiency in Flutter, showcasing more than 4 years of hands-on experience in crafting more then 10 cutting-edge applications for both Android and iOS platforms.",
  },
  {
    id: "android",
    title: "Android",
    icon: androidIcon,
    description:
      "Android became my inaugural development stack, setting the foundation for my journey in software development. I've leveraged this expertise in two impactful projects, including one for a valued client.",
  },
  {
    id: "firebase",
    title: "Firebase",
    icon: firebaseIcon,
    description:
      "I've elevated functionality and delivered unparalleled user experiences with the help of various Firebase services such as analytics, push notifications, cloud Firestore, etc. in most of my applications.",
  },
  {
    id: "reactNative",
    title: "React Native",
    icon: reactNativeIcon,
    description:
      "Experienced in React Native, my secondary hybrid stack for mobile development, I've utilised RN for developing new features for a production based project for over a span of 6 months.",
  },
];

const tools = [
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
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages and mobile apps, resulting in dynamic user interfaces and products.",
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
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures, primirarily used for Android development.",
  },

  {
    id: "node",
    title: "Node JS",
    icon: nodeIcon,
    description:
      "Node.js serves as my primary language, where I mastered the creation and deployment of APIs. While I haven't applied it to production-based projects yet.",
  },
  {
    id: "mixpanel",
    title: "Mixpanel",
    icon: mixpanelIcon,
    description:
      "I possess a robust comprehension of the Mixpanel SDK and its dashboard. My expertise lies in crafting insightful funnels, providing the team and organization with a clear visualization of the impact generated by the features implemented in our applications.",
  },
  {
    id: "appsflyer",
    title: "Appsflyer",
    icon: appsflyerIcon,
    description:
      "Expertly leverage Appsflyer SDK, seamlessly integrating it into various projects to analyze attribution, user journeys, and campaign successes.",
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
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking.",
  },
  {
    id: "jira",
    title: "Jira",
    icon: jiraIcon,
    description:
      "Expertise in utilizing Jira for seamless project development, meticulous timeline management, and efficient issue tracking, all within the Agile Project Management framework.",
  },
  {
    id: "notion",
    title: "Notion",
    icon: notionIcon,
    description:
      "Utilizing Notion, I efficiently manage my development and learning resources while facilitating seamless sharing with my peers.",
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
    description:
      "The Google India Challenge Scholarship for Android Development is an Android app development course aimed at fostering learning and skill development in the mobile field.",
  },
  {
    id: 2,
    icon: intel,
    title: "Intel® Edge AI Scholarship",
    issueDate: "Mar 2020",
    url: "https://drive.google.com/file/d/1cftoQblpagb3qIrcUdkkvodAkZpQgQSo/view",
    description:
      "The Intel® Edge AI Scholarship is a program that aims to provide learning opportunities in the field of Edge AI (Artificial Intelligence) development. It focused on teaching how to implement AI solutions on edge devices, rather than relying on centralized cloud servers using Intel OpenVino toolkit.",
  },
  // {
  //   id: 3,
  //   icon: aws1,
  //   title: "AWS Machine Learning Scholarship",
  //   issueDate: "Aug 2020",
  //   url: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/3c27e024-f5db-49c6-874a-36321c9a6ceb.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&bsft_clkid=5c38e276-9e78-460a-99ae-7b6ef7bab4",
  //   description: "",
  // },
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
  tools,
};
