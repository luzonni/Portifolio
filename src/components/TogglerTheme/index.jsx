import styled from "styled-components"
import { ColorOne, ColorThree, Font_One } from "../../assets/Colors"

const TogglerThemeStyle = styled.div`
    position: fixed;
    right: 1rem;
    bottom: -3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: ${Font_One};
    background-color: ${ColorThree};
    padding: 1rem;
    border-radius: 25% 25% 0 0;
    transition: 240ms;
    animation: textAnimation 420ms infinite;
    .title {
        display: flex;
        flex-direction: row;
        text-transform: uppercase;
        font-weight: bold;
    }

    &:hover {
        bottom: 0;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: ${ColorOne};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`

const TogglerTheme = ({ toggleTheme }) => {
    const valor = localStorage.getItem("theme");
    return(
        <TogglerThemeStyle>
            <div className="title">
                <h1>T</h1>
                <h1>H</h1>
                <h1>E</h1>
                <h1>M</h1>
                <h1>E</h1>
            </div>
            <label class="switch">
                <input type="checkbox" checked={(valor && valor === "dark") ? true : false} onChange={() => toggleTheme()} />
                <span class="slider"></span>
            </label>
        </TogglerThemeStyle>
    )
}

export default TogglerTheme