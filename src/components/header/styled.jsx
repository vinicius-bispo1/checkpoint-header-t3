import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
  const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 15vw;
background-color: #4A5051;
display: flex;
flex-direction: column;
align-items: center;

`

export const BoxLogo = styled.div`
/* border: solid 1px gold; */
height: 38vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: white;
img{
    width: 10vw;
    border-radius: 50%;
}
`

export const BoxMenu = styled.nav`
/* border: solid 1px yellow; */
height: 38vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
li{
    list-style: none;
    border-bottom: solid 1px white;
    height: 12.5vh;
    width: 15vw;
    ${center}
}
li:nth-child(1){
   border-top: solid 1px white; 
}
a{
 color: white;  
 text-decoration: none;
}

`
export const BoxIcon = styled.div`
/* border: solid 1px red; */
width: 15vw;
height: 28vh;
${center}
flex-direction: column;
justify-content: space-evenly;
`