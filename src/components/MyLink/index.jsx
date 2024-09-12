import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { White, ColorOne } from "../../assets/Colors"


const Style = styled.div`
    box-sizing: border-box;
    .link {
        color: ${White};
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