// Funciones de IA (simuladas)

// Mock function to generate logline
export async function generateLogline(projectData: any): Promise<string> {
  // In a real implementation, this would call an AI API
  return "Un padre soltero enfrenta su pasado criminal para proteger a su hija.";
}

// Mock function to suggest themes
export async function suggestThemes(genre: string, format: string): Promise<string[]> {
  // In a real implementation, this would call an AI API
  const themesMap: Record<string, string[]> = {
    "Thriller": ["Redención", "Traición", "Poder", "Venganza"],
    "Drama": ["Familia", "Perdón", "Crecimiento", "Sacrificio"],
    "Comedia": ["Amistad", "Amor", "Aventura", "Superación"],
    "Ciencia Ficción": ["Tecnología", "Futuro", "Humanidad", "Exploración"],
    "Fantasía": ["Magia", "Aventura", "Bien vs Mal", "Descubrimiento"]
  };
  
  return themesMap[genre] || ["Tema 1", "Tema 2", "Tema 3"];
}

// Mock function to generate character profile
export async function generateCharacterProfile(characterName: string, role: string): Promise<any> {
  // In a real implementation, this would call an AI API
  return {
    motivation: `Motivación para ${characterName}`,
    wound: `Herida emocional de ${characterName}`,
    arc: `Arco de personaje para ${characterName}`
  };
}

// Mock function to generate world rules
export async function generateWorldRules(genre: string, themes: string[]): Promise<string[]> {
  // In a real implementation, this would call an AI API
  return [
    "Regla del mundo 1",
    "Regla del mundo 2",
    "Regla del mundo 3"
  ];
}

// Mock function to generate beats
export async function generateBeats(controllingIdea: string): Promise<any[]> {
  // In a real implementation, this would call an AI API
  return [
    { label: "Inciting Incident", targetPage: 10 },
    { label: "Plot Point 1", targetPage: 25 },
    { label: "Midpoint", targetPage: 45 },
    { label: "Plot Point 2", targetPage: 75 },
    { label: "Climax", targetPage: 85 }
  ];
}

// Mock function to generate scenes
export async function generateScenes(beats: any[]): Promise<any[]> {
  // In a real implementation, this would call an AI API
  return beats.map((beat, index) => ({
    slugline: `ESCENA ${index + 1} - ${beat.label}`,
    synopsis: `Descripción de la escena ${index + 1} basada en ${beat.label}`,
    characterIds: []
  }));
}