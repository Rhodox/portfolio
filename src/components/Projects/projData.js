import mealAppScreenshot from "../../images/mealAppScreenshot.png";
import portfolioScreenshot from "../../images/portfolioScreenshot.png";
import medHubScreenshot from "../../images/medHubScreenshot.png";

import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const ProjectData = [
  {
    title: "Portfolio Website",
    date: "Jan 2020",
    imgPreview: portfolioScreenshot,
    description:
      "My personal portfolio containing information about me as well as my knowledge and previous experience",
    techUsed: "ReactJS, CSS, JavaScript",
    gHub: "https://github.com/Rhodox/portfolio",
    icon: <IoIcons.IoMdGlobe />,
  },
  {
    title: "MedHub",
    date: "Dec 2020",
    imgPreview: medHubScreenshot,
    description:
      "A proof-of-concept, simple, general health app which helps users plan out their day, stay in touch with their medical experts, as well get help for personal medical and mental health needs.",
    techUsed: "ReactJS, MongoDB, Express, bCrypt, socket.io",
    gHub: "https://github.com/SebastienKronlund/SALT-Final-Project",
    icon: <IoIcons.IoMdMedical />,
  },
  {
    title: "Meal App",
    date: "Nov 2020",
    imgPreview: mealAppScreenshot,
    description:
      "A project made during a hack-day. Displays a random list of meals and instructions on making them using the Spoonacular API",
    techUsed: "ReactJS, Express",
    gHub: "https://github.com/Rhodox/salt-meal-app",
    icon: <GiIcons.GiCookingPot />,
  },
];
