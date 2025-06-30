import zarin from "../assets/images/zarin.jpg";
import giulia from "../assets/images/giulia.png";
import darshwini from "../assets/images/darshwini.jpg";
import jinal from "../assets/images/jinal.jpg";
import jayanta from "../assets/images/jayanta.jpg";
import accounting from "../assets/images/accounting.jpg";
import bs from "../assets/images/bs.png";
import it from "../assets/images/it.png";
import shield from "../assets/icons/Warning Shield.png";
import online from "../assets/icons/Online Group Studying.svg";
import change from "../assets/icons/Change.svg";
import timetable from "../assets/icons/Timetable.svg";
import changeContact from "../assets/images/changeContact.png";

export const heading1 = "We are Here to Help";

export const heading2 = "Other Services";

export const heading3 = "FAQs";

export const secondHeading1 = "Book a one-on-one 15-minute appointment";

export const studentSupport = [
  {
    title: "Student Support Team",
    name: "Zarin Sharmily",
    campus: "(West Perth Campus)",
    image: zarin,
    button: "Book a Meeting",
    link: "https://calendar.app.google/TwZ9vFHnz51zZJiX6",
    language: "Bengali, English, Japanese, Hindi, Urdu",
  },
  {
    title: "Student Support Team (Higher Education)",
    name: "Giulia Posillipo",
    campus: "(West Perth Campus)",
    image: giulia,
    button: "Book a Meeting",
    link: "https://calendar.app.google/1U1EhkTpQXN6T45TA",
    language: "English, Spanish, and Italian",
  },
  {
    title: "Scheduling Team",
    name: "Darshwini Poonen",
    campus: "(West Perth Campus)",
    image: darshwini,
    button: "Book a Meeting",
    link: "https://calendar.app.google/iHyHRydzvedKH9r17 ",
    language: "English, Mauritian Creole, French, Hindi",
  },
  {
    title: "Schedules Team",
    name: "Jayanta Pandeea",
    campus: "(West Perth Campus)",
    image: jayanta,
    button: "Book a Meeting",
    link: "https://calendar.app.google/kSGJKivuzsjJ2ESw6",
    language: "Mauritian Creole, French, English",
  },
  {
    title: "Student Support Team (Higher Education)",
    name: "Jinal Patel",
    campus: "(Adelaide Campus)",
    image: jinal,
    button: "Book a Meeting",
    link: "https://calendar.app.google/3bvraWZDRSymHfXt5 ",
    language: "English, Hindi, Gujarati",
  },
];

export const otherServices = [
  {
    name: "Academic Support",
    content: `	•	Conversation Club: Join weekly sessions at West Perth Campus to practice your English and build confidence in real conversations.
	•	Academic Writing Help: Book a session with an Academic Support Lecturer to improve your essay writing, referencing, and academic communication.
	•	External Support: Participate in language and networking activities provided by StudyPerth or StudyAdelaide.`,
    button: "Learn More",
    image: bs,
    url: "https://www.stanleycollege.edu.au/personalised-academic-guidance/",
  },
  {
    name: "Financial Support",
    content: `	•	Payment Extensions: Apply for a payment plan if you need more time to pay your fees.
    •	Late Fee Policy: Understand what happens if you miss a payment deadline and how to avoid penalties.
    •	Support Contacts: Reach out to our finance team for help with invoices, payment methods, or questions.`,
    button: "Learn More",
    image: accounting,
    reverse: true,
    url: "https://www.stanleycollege.edu.au/studying-with-us/scholarships-and-financial-assistance/",
  },
  {
    name: "Complaints & Appeals",
    content: `	•	Submit a Complaint: Use our online form (CAFO) to raise an issue about your course or experience.
	•	Appeals Process: Learn how to formally appeal academic decisions like grades or progress warnings.
	•	Your Rights: You’re entitled to support throughout the process, including interpreters and support persons.`,
    button: "Learn More",
    image: it,
    url: "https://www.stanleycollege.edu.au/studying-with-us/cafo-form/",
  },
];

export const qaList = [
  {
    question:
      "How Can I Send My Official Documents to World Education Services (WES)?",
    answer: `If you need to send your official academic documents to World Education Services (WES) for credential evaluation, please follow the steps below:

1. Review WES Requirements
Before submitting any requests, please check the specific documentation requirements on the WES website to ensure you are requesting the correct documents.

2. Submit an Application for Award / Qualification
Stanley College provides digital official documents that are accepted by WES. Physical submissions are no longer accepted.

●  Complete the Application for Award / Qualification form
●  Indicate the documents you require for your WES application.

3. Receive Your Documents via My eQuals
Once your application is processed, you will receive an email with a secure link to access your documents through My eQuals.

4. Share Your Documents with WES

●  Log into My eQuals.
●  Navigate to the “Documents” section.
●  Click the “Share” icon next to the document you wish to send.
●  Select “Send my documents to a registered organisation”
●  Choose “World Education Services (WES)” as the recipient.
●  Enter your WES reference number and confirm the share.

If you need assistance at any stage, please contact Stanley College Student Services.`,
    button: "Application for Award / Qualification Form",
    link: "https://highereducation.formstack.com/admin/session/auth_provider_form/1832/6198052?returnTo=/workflows/award_request",
  },
  {
    question: "How do I change my class schedules?",
    answer:
      "You can change your class schedules by sending the email to studentservices@stanleycollege.edu.au. Please note that, the change of schedules for your desired times are based on availability of classes.",
  },
  {
    question: "My attendance is wrong, or I was marked absent for no reason.",
    answer:
      "This information is entered by your Trainer. You can contact the trainer directly to update this information. Or you can email Student Services (studentservices@stanleycollege.edu.au) and we will contact your trainer.",
  },
  {
    question: "Can my attendance be removed?",
    answer:
      "Your attendance can be removed only based on the medica condition and compassionate circumstances, requiring for the student to provide medical certificate in case of medical reason.",
  },
  {
    question: "How can I check if I have any holidays?",
    answer:
      "You can check your scheduled holidays in your student portal by referring to the “results” tab.",
  },
  {
    question: "Can I apply for a payment plan?",
    answer: `Yes, if you're experiencing financial hardship, you may be eligible for a payment plan through our Hardship Payment Scheme. This option is available to continuing international onshore students on a student visa who are temporarily unable to pay their tuition fees due to unexpected and extenuating circumstances beyond their control. These circumstances must directly impact your ability to pay by the due date. 
    
    For further details including; eligibility, terms and conditions and requirements, please check the link below.`,
    button: "Learn More",
    link: "https://info.stanleycollege.edu.au/hubfs/Marketing-Publications/HE-Compliance-Docs/Financial-Hardship-Payment-Scheme-Guidelines.pdf",
  },
  {
    question: "How can I update my contact details?",
    answer:
      "If there are any changes in your phone number or address, you can update it from your student portal from the option in the Profile.",
    image: [changeContact],
  },
];

export const supportCardData = [
  {
    logo: shield,
    title: "Warning Letter Received",
    description: "Guidance on understanding and responding to warning letters",
  },
  {
    logo: online,
    title: "Course Progress",
    description:
      "Discuss your academic progress and get support to stay on track",
  },
  {
    logo: change,
    title: "Changing Your Course",
    description:
      "Explore your options and the process for changing your course",
  },
  {
    logo: timetable,
    title: "Changing  Your  Timetable",
    description:
      "Find out how to adjust your schedule to better suit your needs",
  },
];
