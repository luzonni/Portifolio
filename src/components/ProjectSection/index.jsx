import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import ProjectCard from "./ProjectCard"

const ProjectSectionStyle = styled.section`
    width: 80%;
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`

const ListProjects = styled.div`
    padding: 6rem 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    @media screen and (max-width: 1080px) {
        padding: 2rem 0.5rem 0 0.5rem;
    }
`

const ProjectSection = ({Projects}) => {
    return (
        <ProjectSectionStyle>
            <SectionTitle Text="My " Strong="Projects"/>
            <ListProjects>
                {Projects.map(project => {
                    return (
                        <ProjectCard 
                            Name={project.Name}
                            Thumb={project.Thumb} 
                            Icons={project.Icons}
                            Texts={project.Texts}
                            URL={project.Link}
                        />
                    )
                })}
            </ListProjects>
        </ProjectSectionStyle>
    )
}

export default ProjectSection