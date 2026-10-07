import type { Project } from '../types';
import { projectsStatic } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import BorderedColumn from './BorderedColumn';
import { useContent } from '../i18n/content';

export default function Projects() {
  const t = useContent();
  const projects: Project[] = projectsStatic.map((item, i) => ({ ...item, ...t.projects.items[i] }));
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" className="relative z-10 px-[6vw] pt-6 pb-[100px]">
      <BorderedColumn maxWidth={1100} className="px-8 md:px-10 py-9">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="flex flex-col gap-12">
          <ProjectCard project={featured} index="01" variant="featured" />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={String(i + 2).padStart(2, '0')} />
            ))}
          </div>
        </div>
      </BorderedColumn>
    </section>
  );
}
