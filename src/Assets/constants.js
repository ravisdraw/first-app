import certificateData from "./certificateData";

export const quotes = [
    "Dream big. Achieve bigger.",
    "Practice, unlock potential",
    "Practice, create success",
    "Believe. Achieve. Succeed.",
    "Lead. Inspire. Succeed.",
    "Innovate. Disrupt. Succeed.",
    "Practice, then success",
    "Practice, master your craft",
    "Practice, achieve greatness",
    "Think big. Act bigger.",
    "Passion. Vision. Purpose.",
    "Lead. Empower. Succeed.",
    "Risk more. Achieve more."
];

export const tagValues = [
    {
        id: 0,
        title: 'Ravikumar R,',
        subTitle: 'a software Developer',
        subSubTitle: 'With 2.5 years of  experience at TCS'
    },
    {
        id: 1,
        title: 'JavaScript Projects',
        subTitle: 'Only using HTML/CSS/JS',
        subSubTitle: 'Project Count : 10'
    },
    {
        id: 2,
        title: 'React JS Projects',
        subTitle: 'Only using JSX,CSS,Required Public APIs',
        subSubTitle: 'Project Count : 5'
    },
]

const iconNames = {
    react: "mdi:react",
    js: "ph:file-js-fill",
    python: "ion:logo-python",
    figma: "ph:figma-logo-duotone",
    angular: "ph:angular-logo-fill",
    insta: "uil:instagram-alt",
    java: "fontisto:java",
    bot: "bxs:bot",
    home: "ic:sharp-home",
    vsCode: "mdi:vs-code",
    bracket: "mdi:code-braces-box",
    phone: "ic:baseline-perm-phone-msg",
    profile: "gg:profile"
}

export const navItems = [
    {
        id: 1,
        path: '/',
        icon: iconNames.home,
        text: 'Home'
    },
    {
        id: 2,
        path: '/',
        icon: iconNames.vsCode,
        text: 'Skills'
    },
    {
        id: 3,
        path: '/',
        icon: iconNames.bracket,
        text: 'Experience'
    },
    {
        id: 4,
        path: '/',
        icon: iconNames.phone,
        text: 'Hire Me'
    },
    {
        id: 5,
        path: '/',
        icon: iconNames.profile,
        text: 'Profile'
    }
]


export const cardItems = [
    {
        id: 1,
        title: "Certifications",
        subTitle: "Source: Udemy , Mothertong , Skillrack",
        icon: iconNames.python,
        colors: 'linear-gradient(to right, #22c1c3, #fdbb2d)',
        subSubTitle: 'Certifications Count : ' + certificateData.length
    },
    {
        id: 2,
        title: "Skills",
        subTitle: "Angular , Python , React , Automation",
        icon: iconNames.vsCode,
        colors: 'linear-gradient(to right, #FFDD00, #FBB034)',
        subSubTitle: 'Certification count : 10'
    },
    {
        id: 3,
        title: "Experience",
        subTitle: "Angular , Selenium Automation ",
        icon: iconNames.bracket,
        colors: 'linear-gradient(to right, #009FFD, #2A2A72)',
        subSubTitle: 'Certification count : 10'
    },
    {
        id: 4,
        title: "Hire Me",
        subTitle: "Ready to tackle challenges",
        icon: iconNames.profile,
        colors: 'linear-gradient(to right, #ff5e62, #ff9966)',
        subSubTitle: 'Certification count : 10'
    },
    {
        id: 5,
        title: "Profile",
        subTitle: "Discover my unique story",
        icon: iconNames.profile,
        colors: 'linear-gradient(to right, #184AEB, #71ECFE)',
        subSubTitle: 'Certification count : 10'
    },
]

export const icons = [
    {
        id: 1,
        text: "Javascript",
        icon: iconNames.js
    },
    {
        id: 2,
        text: "React JS",
        icon: iconNames.react
    },
    {
        id: 3,
        text: "Python",
        icon: iconNames.python
    },
    {
        id: 4,
        text: "UI/UX",
        icon: iconNames.figma
    },
    {
        id: 5,
        text: "Angular",
        icon: iconNames.angular
    },
    {
        id: 6,
        text: "Real Time Apps",
        icon: iconNames.insta
    }
]