const cors = require('cors');
const { initialiseDatabase } = require("./db/db.connect");
const Events = require("./models/events.models")
const eventImages = require("./assets/assets");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
// initialiseDatabase()
app.listen(PORT, () => {
  console.log("Successfully connected to port", PORT);
});

app.get("/", (req, res) => {
  res.send("Meetup Backend Running 🚀");
});
//  const sampleEvents = [
//   {
//     title: "React Developer Meetup",
//     type: "Offline",
//     image: eventImages.react,
//     date: new Date("2026-08-15"),
//     topic: "Advanced React",
//     description:
//       "Learn advanced React concepts including hooks, performance optimization, state management, and scalable application architecture.",
//     sessionTimings: "10:00 AM - 4:00 PM",
//     speaker: "John Doe",
//     price: 499,
//     venue: "TCS Auditorium",
//     address: "Salt Lake, Kolkata",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["React", "Frontend", "JavaScript"],
//   },

//   {
//     title: "Angular Conference",
//     type: "Offline",
//     image: eventImages.angular,
//     date: new Date("2026-09-01"),
//     topic: "Enterprise Angular",
//     description:
//       "A full-day conference covering Angular architecture, TypeScript best practices, micro frontends, and enterprise development.",
//     sessionTimings: "9:00 AM - 5:00 PM",
//     speaker: "Michael Scott",
//     price: 999,
//     venue: "Biswa Bangla Convention Centre",
//     address: "New Town, Kolkata",
//     dressCode: "Business Casual",
//     ageRestriction: "18+",
//     tags: ["Angular", "TypeScript", "Enterprise"],
//   },

//   {
//     title: "JavaScript Summit",
//     type: "Offline",
//     image: eventImages.javascript,
//     date: new Date("2026-09-20"),
//     topic: "Modern JavaScript",
//     description:
//       "Explore modern JavaScript features, ES2026 updates, performance techniques, and real-world coding practices.",
//     sessionTimings: "9:00 AM - 3:00 PM",
//     speaker: "Emma Watson",
//     price: 399,
//     venue: "ITC Sonar",
//     address: "EM Bypass, Kolkata",
//     dressCode: "Smart Casual",
//     ageRestriction: "18+",
//     tags: ["JavaScript", "Frontend", "Web Development"],
//   },

//   {
//     title: "Career Networking Event",
//     type: "Offline",
//     image: eventImages.networking,
//     date: new Date("2026-10-01"),
//     topic: "Career Growth",
//     description:
//       "Meet recruiters, senior engineers, and industry leaders to expand your professional network and career opportunities.",
//     sessionTimings: "5:00 PM - 8:00 PM",
//     speaker: "Industry Leaders Panel",
//     price: 199,
//     venue: "Novotel",
//     address: "New Town, Kolkata",
//     dressCode: "Formal",
//     ageRestriction: "18+",
//     tags: ["Networking", "Career", "Jobs"],
//   },

//   {
//     title: "Hackathon 2026",
//     type: "Offline",
//     image: eventImages.hackathon,
//     date: new Date("2026-10-10"),
//     topic: "Innovation Challenge",
//     description:
//       "A 24-hour hackathon where teams build innovative solutions and compete for exciting prizes and internships.",
//     sessionTimings: "24 Hours",
//     speaker: "Mentor Panel",
//     price: 0,
//     venue: "Tech Hub",
//     address: "Sector V, Kolkata",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["Hackathon", "Coding", "Competition"],
//   },

//   {
//     title: "Vue.js Workshop",
//     type: "Online",
//     image: eventImages.vue,
//     date: new Date("2026-08-20"),
//     topic: "Vue 3 Fundamentals",
//     description:
//       "Master Vue 3 Composition API, reactive programming, routing, and state management.",
//     sessionTimings: "11:00 AM - 2:00 PM",
//     speaker: "Sarah Lee",
//     price: 0,
//     platform: "Zoom",
//     meetingLink: "https://zoom.us/j/vue-workshop",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["Vue", "Frontend", "JavaScript"],
//   },

//   {
//     title: "Full Stack Bootcamp",
//     type: "Online",
//     image: eventImages.fullStack,
//     date: new Date("2026-09-10"),
//     topic: "MERN Stack Development",
//     description:
//       "Build full-stack web applications using MongoDB, Express, React, and Node.js from scratch.",
//     sessionTimings: "10:00 AM - 6:00 PM",
//     speaker: "David Miller",
//     price: 799,
//     platform: "Google Meet",
//     meetingLink: "https://meet.google.com/fullstack-bootcamp",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["MERN", "React", "NodeJS"],
//   },

//   {
//     title: "AI for Developers",
//     type: "Online",
//     image: eventImages.ai,
//     date: new Date("2026-09-15"),
//     topic: "Generative AI",
//     description:
//       "Learn how Generative AI, ChatGPT, and Large Language Models are transforming software development.",
//     sessionTimings: "2:00 PM - 5:00 PM",
//     speaker: "Andrew Wilson",
//     price: 299,
//     platform: "Zoom",
//     meetingLink: "https://zoom.us/j/ai-developers",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["AI", "GenAI", "LLM"],
//   },

//   {
//     title: "Node.js Masterclass",
//     type: "Online",
//     image: eventImages.nodejs,
//     date: new Date("2026-10-15"),
//     topic: "Backend Development",
//     description:
//       "Build scalable APIs with Express, authentication systems, middleware, and production deployment.",
//     sessionTimings: "11:00 AM - 4:00 PM",
//     speaker: "Robert King",
//     price: 499,
//     platform: "Microsoft Teams",
//     meetingLink: "https://teams.microsoft.com/node-masterclass",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["NodeJS", "Backend", "Express"],
//   },

//   {
//     title: "MongoDB Deep Dive",
//     type: "Online",
//     image: eventImages.mongodb,
//     date: new Date("2026-10-20"),
//     topic: "Database Design",
//     description:
//       "Learn schema design, indexing, aggregation pipelines, optimization, and real-world database architecture.",
//     sessionTimings: "10:00 AM - 1:00 PM",
//     speaker: "Lisa Brown",
//     price: 399,
//     platform: "Zoom",
//     meetingLink: "https://zoom.us/j/mongodb-deepdive",
//     dressCode: "Casual",
//     ageRestriction: "18+",
//     tags: ["MongoDB", "Database", "NoSQL"],
//   },
// ];

// const seedEvents = async () => {
//   try {
//     await initialiseDatabase();

//     await Events.deleteMany();

//     const insertedEvents = await Events.insertMany(sampleEvents);

//     console.log(
//       `✅ Successfully seeded ${insertedEvents.length} events`
//     );

//     process.exit(0);
//   } catch (error) {
//     console.error("❌ Error seeding events:", error);
//     process.exit(1);
//   }
// };

// seedEvents();
// const seedEvents = async () => {
//   try {
//     await initialiseDatabase();

//     await Events.deleteMany();
//     await Events.insertMany(sampleEvents);

//     console.log("✅ 10 sample events inserted");

//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };
const getEvents = async () => {
  try {
    return await Events.find();
  } catch (error) {
    console.log("error in getting events", error);
    throw error;
  }
};
app.get("/events", async (req, res) => {
  try {
    await initialiseDatabase(); // ✅
    const events = await getEvents();
    if (events.length > 0) {
      res.status(200).json({ message: "All events fetched", events });
    } else {
      res.status(404).json({ error: "No events found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching events" });
  }
});
const getEventsById = async (eventId) => {
  try {
    return await Events.findById(eventId);
  } catch (error) {
    console.log("Error in getting events by Id", error);
    throw error;
  }
};

app.get("/events/:eventId", async (req, res) => {
  try {
    await initialiseDatabase(); // ✅
    const eventId = req.params.eventId;
    const event = await getEventsById(eventId);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(200).json("Event id not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching Event By Id" });
  }
});
// seedEvents();