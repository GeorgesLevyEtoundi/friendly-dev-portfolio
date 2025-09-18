import { useState } from 'react';
import type { Route } from './+types/index';
import type { Project } from '~/types';

// components
import ProjectCard from '~/components/ProjectCard';

export async function loader({
	request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
	const res = await fetch('http://localhost:8000/projects');
	const data = await res.json();

	return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
	const { projects } = loaderData as { projects: Project[] };

	const [currentPage, setCurrentPage] = useState(1);
	const projectPerPage = 10;

	// calculate total pages
	const totalPages = Math.ceil(projects.length / projectPerPage);

	// get current page projects
	const indexOfLast = currentPage * projectPerPage;
	const indexOfFirst = indexOfLast - projectPerPage;
	const currentProjects = projects.slice(indexOfFirst, indexOfLast);

	// Pagination button renderer
	const renderPagination = () => (
		<div className="flex justify-center gap-2 mt-8">
			{Array.from({ length: totalPages }, (_, idx) => (
				<button
					key={idx + 1}
					onClick={() => setCurrentPage(idx + 1)}
					className={`px-3 py-1 cursor-pointer rounded ${
						currentPage === idx + 1
							? 'bg-blue-600 text-white'
							: 'bg-gray-700 text-gray-200'
					}`}
				>
					{idx + 1}
				</button>
			))}
		</div>
	);

	return (
		<>
			<h2 className="text-3xl font-bold mb-8 text-white">🚀 Projects</h2>

			<div className="grid gap-6 sm:grid-cols-2">
				{currentProjects.map(project => (
					<ProjectCard
						key={project.id}
						project={project}
					/>
				))}
			</div>

			{totalPages > 1 && renderPagination()}
		</>
	);
};

export default ProjectsPage;
