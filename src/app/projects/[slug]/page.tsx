import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/project/ProjectHero";
import ImageGallery from "@/components/project/ImageGallery";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectSidebar from "@/components/project/ProjectSidebar";

export default async function Page({

params,

}:{

params:Promise<{slug:string}>;

}){

const {slug}=await params;

const project=projects.find(
(p)=>p.slug===slug
);

if(!project){

notFound();

}

return(

<main className="mx-auto max-w-7xl px-6 py-32">

<ProjectHero
project={project}
/>

<div className="mt-20 grid gap-16 lg:grid-cols-[2fr_1fr]">

<div>

<ProjectSection
title="Overview"
>

{project.description}

</ProjectSection>

<ProjectSection
title="Problem"
>

{project.problem}

</ProjectSection>

<ProjectSection
title="Solution"
>

{project.solution}

</ProjectSection>

<ProjectSection
title="Gallery"
>

<ImageGallery
images={project.gallery}
/>

</ProjectSection>

</div>

<ProjectSidebar
project={project}
/>

</div>

</main>

);

}