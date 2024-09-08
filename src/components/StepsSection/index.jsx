import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { ColorOne, White } from "../../assets/Colors"

const StepsStyle = styled.section`
    width: 80%;
    margin: 4rem auto 0 auto;
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