import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"
import { IoBuild } from "react-icons/io5";


const MessageStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    background-color: ${ColorOne};
    color: ${White};
    font-size: 1.25rem;
    text-align: center;
    padding: 1rem 0;
`

const Message = ({children}) => {
    return (
        <MessageStyle>
            <IoBuild />
            <h2>{children}</h2>
        </MessageStyle>
    )
}

export default Message