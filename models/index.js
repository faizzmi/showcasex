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
    const feature = projectList
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3)
        .map(({ projectId, projectName, projectHeader, framework, projectStack }) => ({
            projectId,
            projectName,
            projectHeader,
            framework,
            projectStack
        }));

    return feature;
}
