import styled from "styled-components"
import { ColorOne, Font_One } from "../../assets/Colors"

const TitleStyle = styled.h1`
    color: ${Font_One};
    font-size: 2rem;
    strong {
        color: ${ColorOne};
    }
`

const SectionTitle = ({ children }) => {
    return (
        <TitleStyle>{children}</TitleStyle>
    )
}

export default SectionTitle