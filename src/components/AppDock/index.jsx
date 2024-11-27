import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import styled from "styled-components"
import { Font_Two, Font_One } from "../../assets/Colors";


const AppsDockStyle = styled.div`
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    padding: 1.25rem 3rem;
    margin-top: 2rem;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); 
    border-radius: 15px;
    .app {
        color: ${Font_One};
        font-size: 3rem;
        transition: 120ms;
        display: flex;
        align-items: center;
    }
    .app:hover {
        color: ${Font_Two};
        transform: scale(1.5);
    }

    @media screen and (max-width: 1080px) {
        margin: 0 auto;
        gap: 2rem;
        padding: 1rem;
        justify-content: space-between;
        box-sizing: border-box;
        .app {
            font-size: 2rem;
        }
    }
`

const AppDock = () => {
    return (
        <AppsDockStyle>
            <a className="app" href="https://www.linkedin.com/in/luzonni/" target="_blank"><FaLinkedin /></a>
            <a className="app" href="https://github.com/luzonni" target="_blank"><FaGithub /></a>
            <a className="app" href="https://www.instagram.com/lucaszonzini_/" target="_blank"><FaInstagramSquare /></a>
        </AppsDockStyle>
    )
}

export default AppDock