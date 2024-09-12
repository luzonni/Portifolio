import styled from "styled-components"
import { ColorOne, ColorTwo, Gray, White } from "../../assets/Colors"
import { useParams } from "react-router-dom"
import Projects from "../../assets/base/Projects.json"
import { FaProjectDiagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import GitHubFrame from "./GitHubFrame";
import MyLink from "../../components/MyLink";
import { IoMdArrowRoundBack } from "react-icons/io";



const ProjectPageStyle = styled.main`
    width: 80%;
    margin: 4rem auto;
    .back {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-bottom: 4px solid ${ColorTwo};
        margin: 1rem 0;
    }
    .icon {
        font-size: 3rem;
        transition: 120ms;
    }
    .back :hover {
        color: ${ColorOne};
    }
`

const Title = styled.h1`
    display: flex;
    gap: 1rem;
    font-size: 3.5rem;
    color: ${White};
    padding: 1rem;
    border-radius: 10px; 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    margin: 1rem 0;
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
            <div className="back">
                <MyLink to={"/"}><IoMdArrowRoundBack className="icon"/></MyLink>
            </div>
            <Banner>
                <img src={project.Thumb} alt="Project Banner" />
            </Banner>
            <Title className="title"><FaProjectDiagram className="icon"/> {project.Name}</Title>
            <GitHubFrame MarckDown={readme} Link={project.Link[0]}/>
        </ProjectPageStyle>
    )
}

export default ProjectPage