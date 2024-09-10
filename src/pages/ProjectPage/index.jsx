import styled from "styled-components"
import { ColorOne, ColorThree, White } from "../../assets/Colors"
import { useParams } from "react-router-dom"
import Projects from "../../assets/base/Projects.json"
import { FaProjectDiagram } from "react-icons/fa";


const ProjectPageStyle = styled.main`
    width: 80%;
    margin: 4rem auto;
    position: relative;
`

const Title = styled.h1`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    gap: 1rem;
    font-size: 3.5rem;
    color: ${White};

    .icon {
        color: ${ColorOne};
    }
`

const Banner = styled.div`
    
`

const ProjectPage = () => {
    const { name } = useParams()
    const project = Projects.filter(project => project.Name === name)[0]
    return (
        <ProjectPageStyle>
            <Title className="title"><FaProjectDiagram className="icon"/> {project.Name}</Title>
            <Banner>
                <img src={project.Thumb} alt="Project Banner" />
            </Banner>
        </ProjectPageStyle>
    )
}

export default ProjectPage