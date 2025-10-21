export interface Portfolio {
  id: number;
  name: string;
  bio: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  likes: number;
  country: string;
}

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}
