// Datos simulados para la aplicación

// src/lib/mock-data.ts

export const mockProject = {
  id: "proj_001",
  title: "Echoes of Nebula",
  format: "Largometraje",
  genre: "Thriller",
  currentPhase: "bible" as const,
};

export const mockBible = {
  title: "Echoes of Nebula",
  genre: "Thriller",
  themes: ["Redención", "Traición", "Poder"],
  toneVisual: "Oscuro",
  logline: "Un padre soltero enfrenta su pasado criminal para proteger a su hija.",
  controllingIdea: "Un hombre huye de su pasado, pero debe enfrentarlo para salvar a su hija.",
  characters: [
    {
      id: "char_001",
      name: "Carlos",
      role: "Protagonista",
      archetype: "Héroe",
      age: 42,
      motivation: "Proteger a su hija",
      wound: "Culpa por un crimen no resuelto",
      arc: "De la huida al enfrentamiento",
      portraitUrl: "/images/carlos.jpg",
    },
  ],
  world: {
    rules: ["No se puede mentir sin consecuencias físicas"],
    palette: ["#2A1B3D", "#E63946", "#F1FAEE"],
    moodboardUrls: ["/images/mood1.jpg", "/images/mood2.jpg"],
  },
};