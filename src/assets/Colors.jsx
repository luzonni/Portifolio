import theme from "styled-theming"

const Light_One = "#6E28E9"
const Light_Two = "#e4e4e4"
const Light_Three = "#d6d6d6"
const Light_Hole = "#f8f8f8"

const Dark_One = "#6E28E9"
const Dark_Two = "#201757"
const Dark_Three = "#110D28"
const Dark_Hole = "#0A071B"

export const Font_One = theme('mode', {
    light: "#000000",
    dark: "#ffffff"
})
export const Font_Two = theme('mode', {
    light: "#3f3f3f",
    dark: "#acacac"
})
export const ColorOne = theme('mode', {
    light: Light_One,
    dark: Dark_One
})
export const ColorTwo = theme('mode', {
    light: Light_Two,
    dark: Dark_Two
})
export const ColorThree = theme('mode', {
    light: Light_Three,
    dark: Dark_Three
})
export const ColorHole = theme('mode', {
    light: Light_Hole,
    dark: Dark_Hole
})

