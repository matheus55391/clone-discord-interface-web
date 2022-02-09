import{s as n,j as h,T as u,M as f,A as m,r as x,W as b,R as v,a as y}from"./vendor.d8fc64aa.js";const w=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function c(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(i){if(i.ep)return;i.ep=!0;const o=c(i);fetch(i.href,o)}};w();const T=n.div`
    background-color: var(--tertiary);  
    grid-area: SL;

    display: flex;
    
    flex-direction: column;
    align-items: center;
    padding: 10px 0;

    max-height: 100vh;
    overflow-y: scroll;
   
    ::-webkit-scrollbar{
        display: none;
    }
`,k=n.div`

    width: 32px;
    border-radius: 1px;
    height: 10px;
    
    
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;

`,e=h.exports.jsx,a=h.exports.jsxs,C=h.exports.Fragment,L=()=>a(T,{children:[e(r,{}),e(k,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{})]}),I=n.button`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 8px;
    padding: 5px 3px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: var(--symbol);

`,r=()=>e(I,{}),S=n.div`
    grid-area: SN;
    background-color: #2F3136;
    color: var(--white);

    justify-content: center;
    align-items: center;
    
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(0px);
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`,F=n.span`

    color: var(--white);
    font-size: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-left: 10px;
    padding-right: 10px;
    


`,j=()=>e(S,{children:e(F,{children:"Servidor"})}),M=n.div`

    grid-area: CI;
    background-color: #36393F;        
    overflow: hidden;
    text-overflow: ellipsis;  
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(0px);
    font-weight: bolder;
`,U=n.div`

    color: var(--white);
    font-size: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
    
`,B=n(u)`
    width: 24px;
    height: 24px;
    color: var(--white);
`,z=n.div`
    @media screen and (min-width: 600px){
        display: none;
    }
    width: 30px;
    height: 25px;
    padding: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`,N=n(f)`
    width: 24px;
    height: 24px;
    color: var(--white);
`,$=()=>a(M,{children:[e(z,{children:e(N,{})}),e(B,{}),e(U,{children:"\u{1F920} bate-papo"})]}),H=n.div`

    grid-area: CL;
    
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    max-height: 100vh;
    overflow-y: scroll;
    width: 100%;
    ::-webkit-scrollbar {        
        width: 5px;   
    }
    ::-webkit-scrollbar-thumb {
        
        background-color: #282a2d;
        border-radius: 15px;
    }
`,t=n.button`
 

    text-align: left;
    color: gray;
    margin: 5px 10px 1px 10px;
    padding: 5px 5px;
    cursor: pointer;   
    background-color: transparent;
    font-weight: bold;
    border-radius: 3px;
    height: 34px;
    font-size : 100%;
    &:hover{
        background-color: #36393F;
        color: #FFFFFF;
    }

`,q=()=>a(H,{children:[e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"})]}),A=n.div`

    grid-area: UL;
    background-color: #2F3136;    
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    max-height: 100vh;
    overflow-y: scroll;
    width: 100%;
    ::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #282a2d;
        border: 2px solid #282a2d;
        border-radius: 10px;
    }

`,E=()=>e(A,{}),O=n.div`

    grid-area: CH;

    background-color: #36393F;

    display: flex;
    flex-direction: column;
    justify-content:space-between;


`,R=n.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`,W=n.div`
    width: 100%;
    padding: 0 16px;
`,P=n.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 7px;
    color: var(--white);
    background: var(--chat-input);
    position: relative;
    &::placeholder{
        color: var(--gray);
    }
    ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    }
  
`,D=n(m)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`,G=()=>{const[s,l]=x.exports.useState(""),[c,p]=x.exports.useState([]),i=d=>{l(d.target.value)},o=d=>{d.code==="Enter"&&s&&(p([...c,{author:"Fulano",date:"08/02/2022",content:s,hasMention:!1,isBot:!1}]),l(""))};return a(O,{children:[e(R,{children:c.map((d,g)=>e(ee,{author:"Meguinha",date:"21/06/2020",content:d.content},g))}),a(W,{children:[e(P,{value:s,onChange:i,onKeyPress:o,type:"text",placeholder:"Conversando no chat"}),e(D,{})]})]})},K=n.div`
    @media screen and (max-width: 600px){
        display: none;
    }
    background-color: #292B2F;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;

`,Y=n.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin: 0px 8px 0px 8px;
    padding: 5px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: var(--symbol);
`;n.img`

`;n.div`

`;const J=()=>e(K,{children:e(Y,{})}),Q=n.div`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin-right: 4px;
   
    
    & + div {
        margin-top: 13px;
    }

    &:hover {

        background-color: var(--quinary);
    }
`,V=n.div`

    width: 40px;
    height: 40px;

    background: #343639;
    border-radius:50%;

`,X=n.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 17px;
`,Z=n.div`
    display: flex;
    align-items: center;
    > strong {
        color: var(--white);
        font-size: 16px;
    }
    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
    > time {
        margin-left: 6px;
        color: var(--gray);
        font-size: 10px
    }
`,_=n.div`
    text-align: left;
    font-size: 14px;
    color: var(--white);

`,ee=s=>a(Q,{children:[e(V,{}),a(X,{children:[a(Z,{children:[e("strong",{children:s.author}),s.isBot&&e("span",{children:"Bot"}),e("time",{children:s.date})]}),e(_,{children:s.content})]})]}),te=n.div`
    display: grid;

    @media screen and (min-width: 601px){
        grid-template-columns: 71px 240px auto 240px ;
        grid-template-rows: 46px auto 52px;
        grid-template-areas:
            'SL SN CI CI' 
            'SL CL CH UL'
            'SL UI CH UL'
        ;

    }    

    @media screen and (max-width: 600px){
        grid-template-columns: 0px 0px auto 0px ;
        grid-template-rows: 46px auto 52px;
        grid-template-areas:
            'SL SN CI CI' 
            'SL CL CH UL'
            'SL UI CH UL'
        ;
    }



    height: 100vh;

`,re=()=>a(te,{children:[e(L,{}),e(j,{}),e($,{}),e(q,{}),e(E,{}),e(G,{}),e(J,{})]}),ne=b`
    *{
        margin: 0;
        box-sizing: border-box;
        
    }

    html, body, #root{
        height: 100%;
        
    }

    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --primary: #36393F;
        --secondary: #2f3136;
        --tertiary: #202225;
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;
        
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
        --link: #5d80d6;
    }

    
`,ie=()=>a(C,{children:[e(re,{}),e(ne,{})]});v.render(e(y.StrictMode,{children:e(ie,{})}),document.getElementById("root"));
