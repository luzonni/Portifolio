import styled from "styled-components"
import { ColorOne, ColorTwo, Gray, White } from "../../assets/Colors"


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

    h1 {
        color: ${White};
        font-size: 1.75rem;
    }

    strong {
        font-size: 2.25rem;
        color: ${ColorOne};
        font-weight: 700;
        border-bottom: 0.3rem solid ${ColorTwo};
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

        strong {
            font-size: 1.5rem;
            color: ${ColorOne};
            font-weight: 700;
            border-bottom: 0;
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
                <h1>Olá! Meu nome é <strong>Lucas Zonzini Lisboa</strong></h1>
                <p>Desenvolvedor Junior Java.</p>
                <p>Em 2020, despertei uma intensa curiosidade em explorar a criação de jogos de computador. 
                    Desde então, tenho dedicado meu tempo incessantemente para aprimorar minhas habilidades 
                    na arte da programação. A busca constante pelo conhecimento tornou-se uma parte essencial 
                    do meu percurso, levando-me a absorver tudo relacionado a novas linguagens, APIs, bibliotecas, 
                    sistemas e muito mais. Até o presente momento, meu deleite consiste em utilizar meu tempo 
                    livre para programar e desenvolver meus próprios jogos. Meu grande sonho é transformar 
                    essa paixão em uma carreira concreta, trabalhando com códigos e contribuindo para a 
                    indústria de desenvolvimento de sistemas.</p>
            </Content>
        </PresentationSectionStyle>
    )
}

export default PresentationSection