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
  {
    title: "Afternoon Yoga Class",
    start: new Date(2025, 5, 18, 15, 0),
    location: "Yoga Studio",
    link: "https://www.google.com",
  },
  {
    title: "Dinner with Family",
    start: new Date(2025, 6, 19, 19, 30),
    location: "Home",
    link: "https://www.google.com",
  },
  {
    title: "Movie Night with Friends",
    start: new Date(2025, 6, 20, 21, 0),
    location: "Cinema",
    link: "https://www.google.com",
  },
  {
    title: "Weekend Getaway",
    start: new Date(2025, 6, 21, 10, 0),
    location: "Beach",
    link: "https://www.google.com",
  },
  {
    title: "Grocery Shopping",
    start: new Date(2025, 6, 22, 11, 0),
    location: "Supermarket",
    link: "https://www.google.com",
  },
];
