import { projectList } from "./projects"

export const introductory = {
    header: 'Crafting Sophisticated,/ Intuitive Digital Experiences.',
    subheader: 'My work revolves around transforming abstract concepts into functional, visually compelling solutions.',
    servicesOffer: [
        'Frontend Developemnet',
        'Mobile Developemnet',
        'Agile Development',
        'AI Integration'
    ]
}

export const featureProjectsList = () => {
    const featuredProjectIds = ["10", "11", "16"];

    const feature = projectList
        // .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        // .slice(0, 3)
        .filter((project) => featuredProjectIds.includes(project.projectId))
        .map(({ projectId, projectName, projectHeader, headerImage, framework, projectStack }) => ({
            projectId,
            projectName,
            projectHeader,
            headerImage,
            framework,
            projectStack
        }));

    return feature;
}
