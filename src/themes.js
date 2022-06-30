import { createGlobalStyle } from "styled-components"
export const LightTheme = {
    body: "#f5f5f5",
    fontColor: "black",
    nav: "rgb(241, 250, 252)",
    table: "rgb(241, 250, 252)",
    thColor: ""
}

export const DarkTheme = {
    body: "rgb(5, 5, 58)",
    fontColor: "white",
    table: "",
    thColor: "red"


}

export const GlobaslStyle = createGlobalStyle `
body{
    background-color: ${(props)=> props.theme.body};
    color: ${(props) => props.theme.fontColor};
}
.navbar{
    background-color: ${(props)=> props.theme.nav};
}
.nav-link,td{
    color: ${(props) => props.theme.fontColor};
}
table{
    background-color: ${(props)=> props.theme.table};
  
th{
    color: ${(props) => props.theme.thColor};
}
`;