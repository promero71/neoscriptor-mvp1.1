// components/Shared/ProjectCard.tsx
import Link from "next/link";

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    phase: string;
    lastUpdated: string;
    progress: number;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}/dashboard`}>
      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-400">Fase: {project.phase}</p>
        <p className="text-sm text-gray-500">Última actualización: {project.lastUpdated}</p>

        {/* Barra de progreso */}
        <div className="mt-4">
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div
              className="bg-yellow-500 h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">{project.progress}% completado</p>
        </div>
      </div>
    </Link>
  );
}