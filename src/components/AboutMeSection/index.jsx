import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { Gray, White } from "../../assets/Colors"

const AboutStyled = styled.section`
    .container__apresentation {
        display: flex;
        gap: 1rem;
        padding: 2rem 6rem;
        justify-content: center;
    }
    .container__apresentation img {
        box-sizing: border-box;
        width: 22rem;
        border-radius: 15px;
    }
    .container__content {
        width: 30%;
        padding: 2rem;
    }
    .container__content p {
        padding-top: 1rem;
        color: ${Gray};
    }
    @media screen and (max-width: 1080px) {
        .container__apresentation {
            align-items: center;
            flex-direction: column;
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
        }
        .container__content {
            width: 100%;
            padding: 0;
            margin: 0;
        }
        .container__apresentation img {
            width: 60%;
            box-sizing: border-box; 
        }
    }
`

const AboutMeSection = () => {
    return (
        <AboutStyled>
            <div className="container__apresentation">
                <img src="./imgs/me.jpeg" alt="My photo" />
                <div className="container__content">
                    <SectionTitle>About <strong>me</strong></SectionTitle>
                    <p>Em 2020, despertei uma intensa curiosidade em explorar a criação de jogos de computador. Desde então, tenho dedicado meu tempo incessantemente para aprimorar minhas habilidades na arte da programação. A busca constante pelo conhecimento tornou-se uma parte essencial do meu percurso, levando-me a absorver tudo relacionado a novas linguagens, APIs, bibliotecas, sistemas e muito mais. Até o presente momento, meu deleite consiste em utilizar meu tempo livre para programar e desenvolver meus próprios jogos. Meu grande sonho é transformar essa paixão em uma carreira concreta, trabalhando com códigos e contribuindo para a indústria de desenvolvimento de sistemas.</p>
                    <p>Possuo metas consistentes, sempre trabalhando em projetos e fazendo cursos para aprimorar ou conquistar habilidades.</p>
                </div>
            </div>
        </AboutStyled>
    )
}

export default AboutMeSection