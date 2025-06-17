export const calendarTitle = "Calendar of Events in Stanley College";

export const days = [...Array(7)].map(
  (_, i) => new Date(2025, 5, 16 + i) // 从某天开始往后推7天
);

export const events = [
  {
    title: "Morning Jog with Friends",
    start: new Date(2025, 5, 17, 7, 30),
    location: "Park",
    link: "https://www.google.com",
  },
  {
    title: "Work Session - Project Planning",
    start: new Date(2025, 5, 17, 9, 0),
    location: "Home Office",
    link: "https://www.google.com",
  },
  {
    title:
      "Lunch with Colleagues and Discussion aaaaaaa so it wa wadsadsad dadsa",
    start: new Date(2025, 5, 18, 12, 0),
    location: "Downtown",
    link: "https://www.google.com",
  },
];
