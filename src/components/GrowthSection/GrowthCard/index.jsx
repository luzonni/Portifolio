import styled from "styled-components"
import { ColorOne, ColorTwo, Gray, White } from "../../../assets/Colors"


const CardStyle = styled.div`
    position: relative;
    border-left: 4px solid ${ColorTwo};
    color: ${White};
    padding: .6rem 2rem;
    h1 {
        font-size: 1.5rem;
    }
    strong {
        color: ${Gray};
    }
    p {
        color: ${Gray};
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style-type: disc;
        padding: 0 2rem;
    }
    li::marker {
        color: ${Gray};
    }
    .content {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }
    @media screen and (max-width: 1080px) {
        padding: 0.5rem 1rem;
        width: 100%;
        h1 {
            font-size: 1.25rem;
        }
    }
`

const PeriodStyle = styled.div`
    display: flex;
    font-size: 1rem;
    margin-left: 1rem;
    h3 {
        border-radius: 8px;
        background-color: ${ColorTwo};
        padding: .4rem;;
    }
`

const CertificateButton = styled.a`
    background-color: ${ColorOne};
    width: 100%;
    padding: .5rem .8rem .3rem .8rem;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;
    transition: 250ms;
    img {
        width: 2rem;
        transition: 250ms;
    }

    &:hover {
        background-color: ${ColorTwo};
    }

    &:hover img {
        filter: brightness(0.5);
    }
`

const IconCardStyle = styled.div`
    position: absolute;
    background: ${ColorOne};
    background: linear-gradient(180deg, ${ColorOne} 40%, ${ColorTwo} 100%);
    padding: .75rem;
    border-radius: 50%;
    left: -2.4rem;
    top: -1rem;
    img {
        width: 3rem;
    }

    @media screen and (max-width: 1080px) {
        left: -1.6rem;
        top: -0.25rem;
        img {
            width: 1.5rem;
        }
    }
`

const GrowthCard = ({Name, Period, Texts, Institution, CertificateURL}) => {
    return (
        <CardStyle>
            <div className="content">
                <IconCardStyle><img src="./imgs/course_icon.png" alt="Course Icon" /></IconCardStyle>
                <PeriodStyle><h3>{Period}</h3></PeriodStyle>
                <h1>{Name} {Institution && <strong> - {Institution}</strong>}</h1>
                <ul>
                    {Texts.map(text => {
                        return (<li><p>{text}</p></li>)
                    })}
                </ul>
                {CertificateURL && 
                    <CertificateButton href={CertificateURL} target="__#">
                        <img className="icon" src="./icons/certificate.svg" alt="Icone" />
                    </CertificateButton>
                }
                
            </div>
        </CardStyle>
    )
}

export default GrowthCard