import styled from "styled-components"


export const Flex = styled.div`
    display:flex;
    align-items:center;

    & > div {
        flex:1
    }

    @media(max-width:768px){
        flex-direction:column;
        margin:15px;
     }


`