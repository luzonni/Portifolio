import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { ColorOne, ColorTwo, Gray, White } from "../../assets/Colors"

const StepsStyle = styled.section`
    width: 80%;
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1080px) {
        width: 90%;
        margin: 2rem auto 0 auto;
    }
`

const StepByStep = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    color: ${White};
    gap: 3rem;
    .step_item{
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1.25rem;
        h1 {
            font-size: 1.75rem;
            border-bottom: 0.2rem solid ${ColorOne};
        }
    }
    .contents {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
            border-left: 2px solid ${Gray};
            padding-left: 0.5rem;
        }
    }
    @media screen and (max-width: 1080px) {
        margin-top: 1rem;
        padding: 0;
        gap: 2rem;
        border-left: 4px solid ${ColorOne};
        .step_item {
            font-size: 1rem;
            gap: 0;
            h1 {
                padding: 0 0.5rem;
                font-size: 1.25rem;
            }
        }
        .contents {
            border-left: 3px solid ${ColorOne};
            p {
                padding: 0.5rem;
                border: 0;
            }
        }
    }
`


const StepsSection = ({Steps}) => {
    return (
        <StepsStyle>
            <SectionTitle>Until <strong>Here</strong></SectionTitle>
            <StepByStep>
                {Steps && 
                    Steps.map(step => (
                        <li className="step_item">
                            <h1>{step.Year}</h1> 
                            <div className="contents">
                                {step.Content.map(c => <p>{c}</p>)}
                            </div>
                        </li>
                    ))}
            </StepByStep>
        </StepsStyle>
    )
}

export default StepsSection