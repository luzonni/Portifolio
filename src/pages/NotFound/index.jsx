import { TbError404 } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";


import styled from "styled-components"
import { ColorOne, Font_Two, Font_One } from "../../assets/Colors"
import { Link } from "react-router-dom";

const ErrorStyle = styled.section`
    width: 80%;
    margin: 8rem auto;
    color: ${Font_Two};
    display: flex;
    justify-content: center;
    padding: 3rem;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 3rem;
    }
    .icons {
        display: flex;
        align-items: center;
        .att {
            font-size: 5rem;
        }
        .error {
            font-size: 8rem;
        }
    }
    .backHome {
        text-decoration: none;
        color: ${Font_One};
        padding: 1rem;
        border-radius: 6px;
        margin-top: 1rem;
        background-color: ${ColorOne};
    }

    @media screen and (max-width: 1080px){
        width: 90%;
        padding: 0;
        font-size: 2rem;
        margin: 12rem auto;
        h1 {
            font-size: 2rem;
        }
        .icons {
            padding: 0;
        }
    }
`

const NotFound = () => {
    return (
        <ErrorStyle>
            <div className="icons">
                <BiSolidError className="att" color={ColorOne}/>
                <TbError404 className="error" color={ColorOne}/>
            </div>
            <h1>Page not found...</h1>
            <Link className="backHome" to={"/"}>Back to Home</Link>
        </ErrorStyle>
    )
}

export default NotFound