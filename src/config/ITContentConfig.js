import star from "../assets/icons/star.svg";
import thalia from "../assets/images/thalia.png";
import portal1 from "../assets/images/portal1.png";
import portal2 from "../assets/images/portal2.png";
import canvas from "../assets/images/canvas.png";

export const heading1 = "Technical Assistance";

export const heading2 = "FAQs";

export const arrowHeadings = [
  {
    firstImg: star,
    firstCont: "Something not working? ",
    secondCont: "We’ve got your back!",
  },
];

export const ITCont = `Stanley College Perth provides robust IT support to ensure that you have the technical assistance you need.
Our Services Include:
Technical Assistance: Help with software installation, troubleshooting, and technical issues.
Online Learning Support: Assistance with accessing and using online learning platforms and resources.
IT Workshops: Workshops on using college IT resources, cybersecurity, and digital literacy.
`;

export const ITStaff = [
  {
    title: "IT Support Team",
    name: "itsupport@stanleycollege.edu.au  ",
    campus: "(08) 6371 9999 ",
    image: thalia,
  },
];

export const qaList = [
  {
    question: "How to login into student email?",
    answer:
      "The details of your student email are provided in your Orientation Invitation Email when you commenced your studies.",
  },
  {
    question: "How to login into the student portal?",
    answer:
      "Login into your student portal using your student number and password. You can login using your student ID and password that you have created. If you do not have login details, then you can sign up using your student email. A signup confirmation will be sent in your student email with a temporary password will be sent to your email which you can change later.",
    button: "Student Portal",
    link: "https://perth.equatorit.net/StudentPortal/#public/login/SIC",
    image: [portal1, portal2],
  },
  {
    question: "How to login into Canvas?",
    answer: `Canvas login details are provided in student email once you have commenced your studies. If you forgot password for the Canvas, you could email to lms.helpdesk@stanleycollege.edu.au or studentservices@stanleycollege.edu.au for the password reset.
    
    All the portal links are available on the Stanley College website. Click on the Student and Staff login and it will take you to the access links page.`,
    image: [canvas],
  },
  {
    question: "Having trouble logging into student email?",
    answer: `● Are you using the correct email format? Email format is yourstudentnumber@stanleycollege.edu.au (VET) yourstudentnumber@sche.edu.au
● Are you entering the correct password or forgotten password? Try to reset your password using reset password link.
● Still having trouble logging in the student email, then you can contact via email to studentservices@stanleycollege.edu.au or visit any campus of Student services.`,
  },
];
