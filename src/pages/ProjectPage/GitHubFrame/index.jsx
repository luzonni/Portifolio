import { GoBook } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { White } from "../../../assets/Colors";
import ReactMarkdown from 'react-markdown';

const FrameStyle = styled.section`
margin-top: 2rem;
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
`

const Content = styled.div`
    padding: 2rem 3rem;
    box-sizing: border-box;
    & > h1 {
        font-size: 3rem;
    }
    img {
        max-width: 100%;
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