export interface Project {
  id: string;
  title: string;
  format: string;
  genre: string;
  currentPhase: 'bible' | 'script' | 'storyboard' | 'production';
}

export const mockProject: Project = {
  id: "proj_001",
  title: "Echoes of Nebula",
  format: "Largometraje",
  genre: "Thriller",
  currentPhase: "bible",
};

export const projects: Project[] = [
  mockProject,
  { ...mockProject, id: "proj_002", title: "Crónicas de un Futuro Pasado" },
  { ...mockProject, id: "proj_003", title: "El Silencio del Mar" },
  // He añadido este proyecto con id: "4" porque vi que intentaste acceder a él en la terminal.
  { ...mockProject, id: "4", title: "Proyecto de Prueba 4" },
];

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
  }
}