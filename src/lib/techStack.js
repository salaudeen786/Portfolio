const techItems = [
  { name: "React", color: "#61DAFB", category: "frontend" },
  { name: "JavaScript", color: "#F7DF1E", category: "language" },
  { name: "TypeScript", color: "#3178C6", category: "language" },
  { name: "Next.js", color: "#ffffff", category: "frontend" },
  { name: "Node.js", color: "#339933", category: "backend" },
  { name: "Express", color: "#ffffff", category: "backend" },
  { name: "MongoDB", color: "#47A248", category: "database" },
  { name: "PostgreSQL", color: "#4169E1", category: "database" },
  { name: "Docker", color: "#2496ED", category: "devops" },
  { name: "Git", color: "#F05032", category: "devops" },
  { name: "ASP.NET Core", color: "#512BD4", category: "backend" },
  { name: "Laravel", color: "#FF2D20", category: "backend" },
];

const seedPositions = [
  { x: 20, y: 15 },
  { x: 55, y: 10 },
  { x: 75, y: 25 },
  { x: 40, y: 30 },
  { x: 82, y: 42 },
  { x: 68, y: 58 },
  { x: 50, y: 50 },
  { x: 28, y: 60 },
  { x: 12, y: 40 },
  { x: 85, y: 72 },
  { x: 35, y: 80 },
  { x: 60, y: 78 },
];

export function buildConstellation() {
  const connectionMap = [
    [1, 2, 3, 4],
    [0, 2, 4],
    [0, 1, 3],
    [0, 4, 8],
    [0, 1, 5, 6, 7, 10],
    [4, 6, 7],
    [4, 5, 7, 10],
    [4, 5, 6],
    [3, 4, 9],
    [8, 10, 11],
    [4, 6, 9],
    [9, 10],
  ];

  return techItems.map((tech, i) => ({
    x: seedPositions[i].x,
    y: seedPositions[i].y,
    tech,
    connections: connectionMap[i],
  }));
}
