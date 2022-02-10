import styled from "styled-components";

export const Grid = styled.div`
    display: grid;

    @media screen and (min-width: 601px){
        grid-template-columns: 71px 240px auto 240px ;
        grid-template-rows: 46px auto 52px;

    }    

    @media screen and (max-width: 600px){
        grid-template-columns: 0px 0px auto 0px ;
        grid-template-rows: 46px auto 52px;

    }


    grid-template-areas:
            'SL SN CI CI' 
            'SL CL CH UL'
            'SL UI CH UL'
    ;
    height: 100vh;

`