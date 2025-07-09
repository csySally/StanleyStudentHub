import job from "../assets/icons/Job.svg";
import platfrom from "../assets/icons/Virtual Machine.svg";
import resume from "../assets/icons/Resume.svg";
import equality from "../assets/icons/Equality.svg";
import wbt1 from "../assets/images/wbt1.png";
import wbt2 from "../assets/images/wbt2.png";
import accounting from "../assets/images/accounting.jpg";
import bs from "../assets/images/bs.png";
import it from "../assets/images/it.png";

export const heading1 = "Need Help with Placement?";

export const heading2 = "Student Stories";

export const secondH1 = "Book a one-on-one 15-minute appointment";

export const wbtCardData = [
  {
    logo: job,
    title: "Job Search Support",
    description: "Get help finding part-time or casual roles during your study",
  },
  {
    logo: platfrom,
    title: "Employment Platforms",
    description:
      "Explore job ads on Seek, CareerOne, or your campus noticeboard",
  },
  {
    logo: resume,
    title: "Resume & Interview Tips",
    description: "Learn how to prepare for Australian job applications",
  },
  {
    logo: equality,
    title: "Workplace Rights",
    description: "Know your entitlements through the Fair Work Ombudsman",
  },
];

export const wbtSupport = [
  {
    title: "Employment Team",
    name: "Karan Thapa",
    campus: "(Cookery, Hospitality & PYP) ",
    button: "Book a meeting",
    image: wbt1,
  },
  {
    title: "Employment Team",
    name: "Gulnaz Batool",
    campus: "(Community Services, Early Childhood Education & Health) ",
    button: "Book a meeting",
    image: wbt2,
    link: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3uU5AFK40QWWGEHlPA1zCHRLb8Sx9nkgg-XDLq2ocwtMVfRimmIIXYxu-PHeACmM-LGkRKLNFT?gv=true",
  },
];

export const studentStories = [
  {
    name: "I am so lucky that I got help from Stanley College with my career.",
    content: `My name is  Abcd Efgh. I am a student from Stanley College with a Bachelor of Nursing degree. I had some problems finding a job but I got help from many teachers and workshop.My name is  Abcd Efgh. I am a student from Stanley College with a Bachelor of Nursing degree. `,
    image: bs,
  },
  {
    name: "I am so lucky that I got help from Stanley College with my career.",
    content: `My name is  Abcd Efgh. I am a student from Stanley College with a Bachelor of Nursing degree. I had some problems finding a job but I got help from many teachers and workshop.My name is  Abcd Efgh. I am a student from Stanley College with a Bachelor of Nursing degree. `,
    image: accounting,
    reverse: true,
  },
  {
    name: "I am so lucky that I got help from Stanley College with my career.",
    content: `My name is  Abcd Efgh. I am a student from Stanley College with a Bachelor of Nursing degree. I had some problems finding a job but I got help from many teachers and workshop.My name is  Abcd Efgh. I am a student from Stanley College with a Bachelor of Nursing degree. `,
    image: it,
  },
];
