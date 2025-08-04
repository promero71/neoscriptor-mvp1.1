// Interfaces y tipos de la aplicación

// Project types
export interface Project {
  id: string;
  title: string;
  format: string;
  genre: string;
  currentPhase: 'bible' | 'script' | 'storyboard' | 'animatic' | 'production';
}

// Character types
export interface Character {
  id: string;
  name: string;
  role: string;
  archetype: string;
  age: number;
  motivation: string;
  wound: string;
  arc: string;
  portraitUrl?: string;
}

// Bible types
export interface Bible {
  title: string;
  genre: string;
  themes: string[];
  toneVisual: string;
  logline: string;
  controllingIdea: string;
  characters: Character[];
  world: {
    rules: string[];
    palette: string[];
    moodboardUrls: string[];
  };
}

// World types
export interface World {
  rules: string[];
  palette: string[];
  moodboardUrls: string[];
}

// Module types
export type ModuleType = 'bible' | 'script' | 'storyboard' | 'animatic' | 'production';

// Script types
export interface Script {
  id: string;
  version: string;
  pages: number;
  targetPages: number;
  beatsCompletePct: number;
  changesPct: number;
  createdAt: Date;
}

// Scene types
export interface Scene {
  id: string;
  order: number;
  slugline: string;
  beatId: string;
  synopsis: string;
  wordCount: number;
  characterIds: string[];
}