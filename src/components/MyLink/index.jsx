import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { Font_One, ColorOne } from "../../assets/Colors"


const Style = styled.div`
    box-sizing: border-box;
    .link {
        color: ${Font_One};
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 500;
    }

    .selected {
        color: ${ColorOne};
    }
`

const MyLink = ({ to, children }) => {
    const locate = useLocation()
    return (
        <Style>
            <Link className={`link ${ locate.pathname === to && "selected" }`} to={to}>{children}</Link>
        </Style>
    )
}

export default MyLink