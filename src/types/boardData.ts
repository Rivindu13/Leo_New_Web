// src/data/boardData.ts

export interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  category: string;
}

export const boardMembers: BoardMember[] = [
  // 🔵 EXCO
  {
    id: 1,
    name: "Leo Sachini Narahenpitage",
    position: "President",
    image: "/board/exco/President.jpg",
    category: "Executive Committee",
  },
  {
    id: 2,
    name: "Leo Lasith Saranga",
    position: "Immediate Past President",
    image: "/board/exco/Immediate Past President.jpg",
    category: "Executive Committee",
  },
  {
    id: 3,
    name: "Leo Piyumi Umayangana",
    position: "1st Vice President",
    image: "/board/exco/1st Vice President.jpg",
    category: "Executive Committee",
  },
  {
    id: 4,
    name: "Leo Rivindu Dulan",
    position: "2nd Vice President",
    image: "/board/exco/2nd Vice President.jpg",
    category: "Executive Committee",
  },
  {
    id: 5,
    name: "Leo Sachini Wickramasinghe",
    position: "Secretary",
    image: "/board/exco/Secretary.jpg",
    category: "Executive Committee",
  },
  {
    id: 6,
    name: "Leo Kisara Ranasinghe",
    position: "Treasurer",
    image: "/board/exco/Treasurer.jpg",
    category: "Executive Committee",
  },
  {
    id: 7,
    name: "Leo Hasini Dinuwari",
    position: "Assistant Secretary",
    image: "/board/exco/Assistant Secretary2.jpg",
    category: "Executive Committee",
  },
  {
    id: 8,
    name: "Leo Venumi samaraweera",
    position: "Assistant Secretary",
    image: "/board/exco/Assistant Secretary1.jpg",
    category: "Executive Committee",
  },
  {
    id: 9,
    name: "Leo Kaveesha bandara",
    position: "Assistant Treasurer",
    image: "/board/exco/Assistant Treasurer1.jpeg",
    category: "Executive Committee",
  },
  {
    id: 10,
    name: "Leo Gaveshi theekshana",
    position: "Assistant Treasurer",
    image: "/board/exco/Assistant Treasurer2.jpg",
    category: "Executive Committee",
  },

  // 🟡 ADVISORS
  {
    id: 11,
    name: "Lion Chamaine Coonghe",
    position: "Club Advisor",
    image: "/board/advisors/advisor1.jpeg",
    category: "Club Advisors",
  },
  {
    id: 12,
    name: "Prof. Lion Vishaka Sooriyabandara",
    position: "Club Advisor",
    image: "/board/advisors/advisor2.jpg",
    category: "Club Advisors",
  },

  // 🟣 SENIOR DIRECTORS
  {
    id: 34,
    name: "Leo Kulith Bulegoda",
    position: "Senior Director",
    image: "/board/senior/Senior Director1.jpeg",
    category: "Senior Directors",
  },
  {
    id: 35,
    name: "Leo Nimesh Prasanjith",
    position: "Senior Director",
    image: "/board/senior/Senior Director2.jpeg",
    category: "Senior Directors",
  },

  // 🟣 ADMIN CREW
  {
    id: 13,
    name: "Leo Mihiranga Fernando",
    position: "Director",
    image: "/board/admin/Director1A.jpg",
    category: "Administrative Crew",
  },
  {
    id: 14,
    name: "Leo Yehan Sandaruwan",
    position: "Director",
    image: "/board/admin/Director2A.jpg",
    category: "Administrative Crew",
  },
  {
    id: 15,
    name: "Leo Savithri Fernando",
    position: "Assistant Director",
    image: "/board/admin/Assistant Director1A.jpeg",
    category: "Administrative Crew",
  },

  // 🟢 Marketing CREW
  {
    id: 16,
    name: "Leo Bhagya Kulasooriya",
    position: "Director",
    image: "/board/marketing/Director1M.jpg",
    category: "Marketing Crew",
  },
  {
    id: 17,
    name: "Leo Hiruna Nimsara",
    position: "Director",
    image: "/board/marketing/Director2M.jpg",
    category: "Marketing Crew",
  },
  {
    id: 18,
    name: "Leo Apsara Samarakoon",
    position: "Assistant Director",
    image: "/board/marketing/Assistant Director1M.jpeg",
    category: "Marketing Crew",
  },

   // 🟢 Media CREW
  {
    id: 19,
    name: "Leo Navodi Liyanage",
    position: "Director",
    image: "/board/media/Director1M.jpg",
    category: "Media & IT Crew",
  },
  {
    id: 20,
    name: "Leo Pathun De Silva",
    position: "Director",
    image: "/board/media/Director2M.jpg",
    category: "Media & IT Crew",
  },
  {
    id: 21,
    name: "Leo Malith Gamage",
    position: "Assistant Director",
    image: "/board/media/Assistant Director1M.jpg",
    category: "Media & IT Crew",
  },

   // 🟢 Finance  CREW
  {
    id: 22,
    name: "Leo Shehan Tharaka",
    position: "Director",
    image: "/board/finance/Director1F.jpeg",
    category: "Finance Crew",
  },
  {
    id: 23,
    name: "Leo Piumi Nikeshala",
    position: "Director",
    image: "/board/finance/Director2F.jpg",
    category: "Finance Crew",
  },
  {
    id: 24,
    name: "Leo Shashini Tamara",
    position: "Assistant Director",
    image: "/board/finance/Assistant Director1F.jpg",
    category: "Finance Crew",
  },

   // 🟢 Club Services  CREW
  {
    id: 25,
    name: "Leo Lithila Thenura",
    position: "Director",
    image: "/board/club/Director1C.jpeg",
    category: "Club Services Crew",
  },
  {
    id: 26,
    name: "Leo Navodya Wijesekara",
    position: "Director",
    image: "/board/club/Director2C.jpeg",
    category: "Club Services Crew",
  },
  {
    id: 27,
    name: "Leo Rashodha Liyanarachchi",
    position: "Assistant Director",
    image: "/board/club/Assistant Director1C.jpeg",
    category: "Club Services Crew",
  },

  // 🟢 PR  CREW
  {
    id: 28,
    name: "Leo Chalaksha Jayarathne",
    position: "Director",
    image: "/board/public/Director1P.jpg",
    category: "Public Relations Crew",
  },
  {
    id: 29,
    name: "Leo Nisansa Devindi",
    position: "Director",
    image: "/board/public/Director2P.jpg",
    category: "Public Relations Crew",
  },

  // 🟢 Editorial  CREW
  {
    id: 30,
    name: "Leo Janaththri Aththanayake",
    position: "Chief Editor",
    image: "/board/editorial/Chief Editor1.jpg",
    category: "Editorial Crew",
  },
  {
    id: 31,
    name: "Leo Navodya Dasni",
    position: "Chief Editor",
    image: "/board/editorial/Chief Editor2.jpg",
    category: "Editorial Crew",
  },
  {
    id: 32,
    name: "Leo Thanuja Rankothge",
    position: "Junior Editor",
    image: "/board/editorial/Junior Editor1.jpg",
    category: "Editorial Crew",
  },
  {
    id: 33,
    name: "Leo Rashmi Nidukya",
    position: "Junior Editor",
    image: "/board/editorial/Junior Editor2.jpg",
    category: "Editorial Crew",
  },
  // 🟢 Project Cordinators
  {
    id: 36,
    name: "Leo Sanudi Wilegoda",
    position: "Project Coordinator",
    image: "/board/pc/pc1.jpg",
    category: "Project Cordinators",
  },
  {
    id: 37,
    name: "Leo Dasuni Thathsarani",
    position: "Project Coordinator",
    image: "/board/pc/pc2.jpg",
    category: "Project Cordinators",
  },
  {
    id: 38,
    name: "Leo Malithi Maheesha",
    position: "Project Coordinator",
    image: "/board/pc/pc3.jpeg",
    category: "Project Cordinators",
  },
  {
    id: 39,
    name: "Leo Vijai Mahawaththa",
    position: "Project Coordinator",
    image: "/board/pc/pc4.jpg",
    category: "Project Cordinators",
  },
  {
    id: 40,
    name: "Leo Praveen Bandara",
    position: "Project Coordinator",
    image: "/board/pc/pc5.jpeg",
    category: "Project Cordinators",
  },
  {
    id: 41,
    name: "Leo Kaveesha Jayawardana",
    position: "Project Coordinator",
    image: "/board/pc/pc6.jpg",
    category: "Project Cordinators",
  },
  {
    id: 42,
    name: "Leo Buddhima Madushani",
    position: "Project Coordinator",
    image: "/board/pc/pc7.jpg",
    category: "Project Cordinators",
  },
  {
    id: 43,
    name: "Leo Chamodi Asangika",
    position: "Project Coordinator",
    image: "/board/pc/pc8.jpg",
    category: "Project Cordinators",
  },
  {
    id: 44,
    name: "Leo Dasuni Gunarathne",
    position: "Project Coordinator",
    image: "/board/pc/pc9.jpg",
    category: "Project Cordinators",
  },
  {
    id: 45,
    name: "Leo Nimna Wijayawardhana",
    position: "Project Coordinator",
    image: "/board/pc/pc10.jpg",
    category: "Project Cordinators",
  },
  {
    id: 46, 
    name: "Leo Kavindu Pansilu",
    position: "Project Coordinator",
    image: "/board/pc/pc11.jpg",
    category: "Project Cordinators",
  },
  {
    id: 47,
    name: "Leo Vimani Landekumbura",
    position: "Project Coordinator",
    image: "/board/pc/pc12.jpg",
    category: "Project Cordinators",
  },
  {
    id: 48,
    name: "Leo Tharangi Nagasinghe",
    position: "Project Coordinator",
    image: "/board/pc/pc13.jpg",
    category: "Project Cordinators",
  },
  {
    id: 49,
    name: "Leo Tharindi Sahabandu",
    position: "Project Coordinator",
    image: "/board/pc/pc14.jpg",
    category: "Project Cordinators",
  },
  {
    id: 50,
    name: "Leo Thilini Kahawaththa",
    position: "Project Coordinator",
    image: "/board/pc/pc15.jpg",
    category: "Project Cordinators",
  },
  {
    id: 51,
    name: "Leo Vihansa Thathsiluni",
    position: "Project Coordinator",
    image: "/board/pc/pc16.jpg",
    category: "Project Cordinators",
  },
  {
    id: 52,
    name: "Leo Mithun De Silva",
    position: "Project Coordinator",
    image: "/board/pc/pc17.jpeg",
    category: "Project Cordinators",
  },
  {
    id: 53,
    name: "Leo Sayumi Palliyage",
    position: "Project Coordinator",
    image: "/board/pc/pc18.jpg",
    category: "Project Cordinators",
  }
];