// Mock data for the dashboard
export const mockDashboardProjects = [
  {
    id: "1",
    title: "Title One",
    lastModified: "12m",
    thumbnail: null
  },
  {
    id: "2", 
    title: "Title Two",
    lastModified: "18m",
    thumbnail: null
  },
  {
    id: "3",
    title: "Title Three", 
    lastModified: "94m",
    thumbnail: null
  },
  {
    id: "4",
    title: "Title Four",
    lastModified: "120m", 
    thumbnail: null
  },
  {
    id: "5",
    title: "Title Five",
    lastModified: "44m",
    thumbnail: null
  },
  {
    id: "6",
    title: "Title Six",
    lastModified: "80m",
    thumbnail: null
  }
];

export const mockRootProps = {
  userName: "UserName",
  currentPage: 1,
  totalPages: 1,
  projects: mockDashboardProjects
};

// Props types for dashboard components
export interface DashboardProps {
  userName: string;
  projects: ProjectCardData[];
  currentPage: number;
  totalPages: number;
}

export interface ProjectCardData {
  id: string;
  title: string;
  lastModified: string;
  thumbnail?: string | null;
}