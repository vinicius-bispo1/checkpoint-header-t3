import styled from "styled-components";


export const Main = styled.main`
border: solid 2px green;
height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
`