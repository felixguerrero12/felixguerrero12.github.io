// components/ProjectCard.tsx
interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tech: string[];
}

// components/ProjectCard.tsx
export default function ProjectCard({
                                        title,
                                        description,
                                        link,
                                        tech
                                    }: ProjectCardProps) {
    return (
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <div className="mb-2">
                <div className="flex flex-wrap gap-1">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 px-2 py-0.5 rounded-full text-xs text-gray-600"
                        >
              {item}
            </span>
                    ))}
                </div>
            </div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
            >
                View Project →
            </a>
        </div>
    )
}