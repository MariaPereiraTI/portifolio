import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projetos" className="relative z-10 px-[6vw] pt-10 pb-[100px]">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          number="02"
          title="Projetos"
          subtitle="Alguns trabalhos de front-end que construí do zero, do design à implementação."
        />
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
