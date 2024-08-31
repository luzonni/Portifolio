import styled from "styled-components"
import { Gray, White } from "../../assets/Colors"
import AppDock from "../AppDock"


const PresentationSectionStyle = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9rem auto;
    gap: 1.25rem;
    img {
        width: 20rem;
        border-radius: 20px;
    }

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 80vh;
        background-image: url("./imgs/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.4;
    }
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
        img {
            display: none;
        }
    }
    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
    align-items: start;
    
    h1 {
        color: ${White};
        font-size: 3rem;
    }

    p {
        width: 40rem;
        color: ${Gray};
    }

    @media screen and (max-width: 1080px) {
        width: 100%;
        padding: 0 2rem;
        text-align: center;
        box-sizing: border-box;
        h1 {
            color: ${White};
            font-size: 1rem;
        }
        p {
            width: 100%;
            color: ${Gray};
        }
    }
`

const PresentationSection = () => {
    return (
        <PresentationSectionStyle>
            <img src="./imgs/me.jpeg" alt="" />
            <Content>
                <h1>Lucas Zonzini Lisboa</h1>
                <p>Engenheiro de Software | Cientista de dados | Explorador</p>
                <AppDock />
            </Content>
        </PresentationSectionStyle>
    )
}

export default PresentationSection