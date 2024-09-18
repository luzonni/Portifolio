import { GoBook } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { Gray, White } from "../../../assets/Colors";
import ReactMarkdown from 'react-markdown';

const FrameStyle = styled.section`
    color: ${White};
    background-color: #0d1017;
    border: 2px solid #3f434b;
    border-radius: 6px;
`
const Tab = styled.ul`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #3f434b;
    padding: 0 1rem;
    .tab_item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 1.25rem;
        font-size: 1.25rem;
        a {
            color: ${White};
            text-decoration: none;
        }
    }
    
    .selected {
        border-bottom: 2px solid #f18570;
    }
    @media screen and (max-width: 1080px) {
        .tab_item {
            font-size: 0.75rem;
        }
    }
`

const Content = styled.div`
    padding: 2rem 3rem;
    box-sizing: border-box;
    h1 {
        font-size: 3rem;
        border-bottom: 1px solid ${Gray};
        padding: 0.5rem 0;
        margin-bottom: 1.5rem;
    }
    h2 {
        font-size: 2rem;
        border-bottom: 1px solid ${Gray};
        padding: 0.5rem 0;
        margin: 0.5rem 0;
    }
    h3 {
        font-size: 1.5rem;
        padding: 0.5rem 0;
        margin: 0.5rem 0;
    }
    p {
        padding: 1rem;
        color: ${Gray};
    }
    img {
        max-width: 20rem;
    }
    @media screen and (max-width: 1080px) {
        padding: 1rem;
        h1 {
            font-size: 1.75rem;
            margin-bottom: 0.25rem;
        }
        h2 {
            font-size: 1.5rem;
            margin-bottom: 0.25rem;
        }
        h3 {
            font-size: 1rem;
            margin-bottom: 0.25rem;
        }
        p {
            font-size: 0.75rem;
            padding: 0.25rem;
        }
    }
`


const GitHubFrame = ({MarckDown, Link}) => {
    return (
        <FrameStyle>
            <Tab>
                <li className="tab_item selected"><GoBook /> REDME</li>
                <li className="tab_item"><a href={Link} target="_blank"><FaGithub /> GitHub</a></li>
            </Tab>
            <Content>
                <ReactMarkdown>{MarckDown}</ReactMarkdown>
            </Content>
        </FrameStyle>
    )
}

export default GitHubFrame