import styled from "styled-components";


export const Main = styled.main`
border: solid 2px green;
height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Container = styled.section`
border: solid 2px red;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const BoxImg = styled.div`
/* border: solid 2px blue; */
width: 70vw;
.rec .rec-arrow-right{
    background-color: red;
}
img{
    width: 20vw;
}
`