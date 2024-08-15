import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"

const TitleStyle = styled.h1`
    color: ${White};
    font-size: 2rem;
    strong {
        color: ${ColorOne};
    }
`

const SectionTitle = ({ Text, Strong }) => {
    return (<TitleStyle>{Text}<strong>{Strong}</strong></TitleStyle>)
}

export default SectionTitle