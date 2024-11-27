import styled from "styled-components"
import { HiAcademicCap } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";''
import { ColorOne, ColorTwo, Font_Two, Font_One } from "../../../assets/Colors"


const CardStyle = styled.div`
    color: ${Font_One};
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .icon__card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .line {
        width: 0.4rem;
        background-color: ${ColorTwo};
        height: 100%;
        border-radius: 0 0 4px 4px;
    }
    h1 {
        font-size: 1.5rem;
    }
    strong {
        color: ${Font_Two};
    }
    p {
        color: ${Font_Two};
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style-type: disc;
        padding: 0 2rem;
    }
    li::marker {
        color: ${Font_Two};
    }
    .content {
        padding: 1.5rem 0;
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }
    .icon__content {

    }
    @media screen and (max-width: 1080px) {
        padding: 0;
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
    color: ${Font_One};
    font-size: 2rem;

    &:hover {
        background-color: ${Font_One};
        color: ${ColorOne};
    }

    &:hover img {
        filter: brightness(0.5);
    }
`

const IconCardStyle = styled.div`
    background: ${ColorOne};
    background: linear-gradient(180deg, ${ColorOne} 40%, ${ColorTwo} 100%);
    padding: .75rem;
    border-radius: 50%;
    color: white;
`

const GrowthCard = ({Name, Period, Texts, Institution, CertificateURL}) => {
    return (
        <CardStyle>
            <div className="icon__card">
                <IconCardStyle><HiAcademicCap size={"3rem"}/></IconCardStyle>
                <span className="line"></span>
            </div>
            <div className="content">
                <PeriodStyle><h3>{Period}</h3></PeriodStyle>
                <h1>{Name} {Institution && <strong> - {Institution}</strong>}</h1>
                <ul>
                    {Texts.map((text, index) => {
                        return (<li key={index}><p>{text}</p></li>)
                    })}
                </ul>
                {CertificateURL && 
                    <CertificateButton href={CertificateURL} target="_blank">
                        <TbCertificate/>
                    </CertificateButton>
                }
                
            </div>
        </CardStyle>
    )
}

export default GrowthCard