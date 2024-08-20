import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"

const MessageStyle = styled.div`
    width: 100%;
    background-color: ${ColorOne};
    color: ${White};
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem 0;
`

const Message = ({children}) => {
    return (
        <MessageStyle>
            <h2>{children}</h2>
        </MessageStyle>
    )
}

export default Message