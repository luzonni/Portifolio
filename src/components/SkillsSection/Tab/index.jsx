import styled from "styled-components"
import { ColorOne, ColorTwo, Gray } from "../../../assets/Colors"

const TabStyle = styled.div`
    width: 100%;
    color: ${Gray};
    font-size: 1.5rem;
    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    li {
        width: 100%;
        text-align: center;
        padding: 1rem 2rem;
        border-bottom: 0.5rem solid ${ColorTwo};
        cursor: pointer;
    }

    .selected {
        color: ${ColorOne};
        border-bottom: 0.5rem solid ${ColorOne};
    }

    .tab_button {
        display: none;
    }

    @media screen and (max-width: 1080px) {
        li {
            display: none;
        }

        .tab_button {
            display: block;
        }

        .selected {
            display: block;
        }
    }

`

const Tab = ({ Tabs, Index, setTab }) => {
    const plusTab = () => {
        var index = Index + 1
        if(index >= Tabs.length) {
            index = 0
        }
        setTab(index)
    }
    const minusTab = () => {
        var index = Index - 1
        if(index < 0) {
            index = Tabs.length-1
        }
        setTab(index)
    }
    return (
        <TabStyle>
            <ul>
                <li className="tab_button" onClick={() => minusTab()}>{"<"}</li>
                {Tabs.map((tab, index) => {
                    return (
                        <li key={index} className={tab === Tabs[Index] && "selected"} onClick={() => setTab(index)}>{tab}</li>
                    )
                })}
                <li className="tab_button" onClick={() => plusTab()}>{">"}</li>
            </ul>
        </TabStyle>
    )
}

export default Tab