import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"
import { useParams } from "react-router-dom"
import Projects from "../../assets/base/Projects.json"
import { FaProjectDiagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import GitHubFrame from "./GitHubFrame";


const ProjectPageStyle = styled.main`
    width: 80%;
    margin: 4rem auto;
    position: relative;
`

const Title = styled.h1`
    position: absolute;
    left: 1rem;
    top: 1rem;
    display: flex;
    gap: 1rem;
    font-size: 3.5rem;
    color: ${White};
    padding: 1rem;
    border-radius: 10px; 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); 
    .icon {
        color: ${ColorOne};
    }
`

const Banner = styled.div`
    width: 100%;
    img {
        width: 100%;
        border-radius: 2rem;
    }
`

const ProjectPage = () => {
    const { name } = useParams()
    const project = Projects.filter(project => project.Name === name)[0]
    const [readme, setReadme] = useState('');
    useEffect(() => {
        fetch(project.Link[1], {
        headers: {
            Accept: 'application/vnd.github.v3.raw',
        },
        })
        .then((response) => response.text())
        .then((data) => setReadme(data))
        .catch((error) => console.error('Erro ao buscar README:', error));
    }, []);
    return (
        <ProjectPageStyle>
            <Title className="title"><FaProjectDiagram className="icon"/> {project.Name}</Title>
            <Banner>
                <img src={project.Thumb} alt="Project Banner" />
            </Banner>
            <GitHubFrame MarckDown={readme} Link={project.Link[0]}/>
        </ProjectPageStyle>
    )
}

export default ProjectPage