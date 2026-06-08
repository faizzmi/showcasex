import { projectList } from "./projects"

export const introductory = {
    header: 'I Build Things/ That Ship.',
    subheader: 'Full-stack developer with a frontend obsession. I turn ideas into fast, beautiful, and functional products — from government enterprise systems to AI-powered apps.',
    servicesOffer: [
        'Frontend Development',
        'Full-Stack Engineering',
        'Data Analytics',
        'AI Integration'
    ]
}

export const featureProjectsList = () => {
    const primaryFeaturedIds = ["18", "19", "20"];
    const fallbackFeaturedIds = ["16", "10", "17"];
 
    const primaryFeature = projectList.filter((project) =>
        primaryFeaturedIds.includes(project.projectId)
    );
 
    const featured = primaryFeature.length >= 3
        ? primaryFeature
        : projectList.filter((project) => fallbackFeaturedIds.includes(project.projectId));
 
    return featured.map(({ projectId, projectName, projectHeader, headerImage, framework, projectStack }) => ({
        projectId,
        projectName,
        projectHeader,
        headerImage,
        framework,
        projectStack
    }));
}
