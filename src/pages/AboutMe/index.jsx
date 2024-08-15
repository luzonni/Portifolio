import styled from "styled-components"
import { ColorOne } from "../../assets/Colors"

const AboutStyle = styled.div`
    h2 {
        color: ${ColorOne};
    }
`

const AboutMe = () => {
    return (
        <AboutStyle>
            <h2>Sobre mim!</h2>
        </AboutStyle>
    )
}

export default AboutMe