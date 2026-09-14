/* ============================================================
   PROJECT DATA — edit these for Smail's real projects
   • thumbnail / photos : relative image paths
   • videos             : EMBED urls
                          ✅ https://www.youtube.com/embed/VIDEO_ID
                          ❌ https://www.youtube.com/watch?v=VIDEO_ID
   ============================================================ */

const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    thumbnail: "assets/images/projects/project-1-thumb.jpg",
    createdAt: "2026-03-14",
    description:
      "Describe the project here. What was the goal, what did you build, " +
      "and what was the result?\n\n" +
      "You can add multiple paragraphs by using \\n\\n between them.",
    photos: [
      "assets/images/projects/project-1-a.jpg",
      "assets/images/projects/project-1-b.jpg"
    ],
    videos: []
  },
  {
    id: 2,
    title: "Project Two",
    thumbnail: "assets/images/projects/project-2-thumb.jpg",
    createdAt: "2026-01-22",
    description:
      "Second project description. Replace this with a real write-up of what " +
      "you did, the tools you used, and what you learned.",
    photos: [
      "assets/images/projects/project-2-a.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ]
  },
  {
    id: 3,
    title: "Project Three",
    thumbnail: "assets/images/projects/project-3-thumb.jpg",
    createdAt: "2025-11-08",
    description:
      "Third project description. Keep it short and concrete — one or two " +
      "paragraphs is enough for a portfolio card.",
    photos: [
      "assets/images/projects/project-3-a.jpg"
    ],
    videos: []
  }
];