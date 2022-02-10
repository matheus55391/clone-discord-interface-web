import{s as r,j as p,T as g,M as u,S as f,A as m,r as x,W as b,R as y,a as v}from"./vendor.b6e7a19e.js";const w=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};w();const k=r.div`
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
`,C=r.div`

    width: 32px;
    border-radius: 1px;
    height: 10px;
    
    
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;

`,e=p.exports.jsx,s=p.exports.jsxs,L=p.exports.Fragment,F=()=>s(k,{children:[e(t,{}),e(C,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{})]}),S=r.button`
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

`,t=()=>e(S,{}),I=r.div`
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

`,j=r.span`

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
    


`,M=()=>e(I,{children:e(j,{children:"Servidor"})}),B=r.div`

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
`,z=r.div`

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
    padding: 0px 0px 0px 0px;
    
`,U=r(g)`
    width: 28px;
    height: 28px;
    color: var(--gray);
`,N=r.div`
    @media screen and (min-width: 600px){
        display: none;
    }
    width: 40px;
    
    padding: 1px;
    margin: 0px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`,$=r(u)`
    width: 30px;
    height: 30px;
    color: var(--gray);
`,A=()=>s(B,{children:[e(N,{children:e($,{})}),e(U,{}),e(z,{children:"\u{1F920} bate-papo"})]}),E=r.div`

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
`,O=r.button`
 

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

`,R=()=>e(E,{children:e(O,{children:"Chat"})}),T=r.div`

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

`,q=()=>e(T,{}),H=r.div`

    grid-area: CH;

    background-color: #36393F;

    display: flex;
    flex-direction: column;
    justify-content:space-between;


`,W=r(f)`
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
`,D=r.div`
    width: 100%;
    
    @media screen and (min-width: 601px){
        padding: 0px 16px;
    }
    @media screen and (max-width: 600px){
        padding: 5px 8px;    
        align-self:flex-end;

    }
`,G=r.input`
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
  
`,K=r(m)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`,P=()=>{const[i,d]=x.exports.useState(""),[l,c]=x.exports.useState([]),n=a=>{d(a.target.value)},o=a=>{a.key==="Enter"&&i&&(c([...l,{author:"Fulano",date:"08/02/2022",content:i,hasMention:!1,isBot:!1}]),d(""))};return s(H,{children:[e(W,{children:l.map((a,h)=>e(te,{author:"Meguinha",date:"21/06/2020",content:a.content},h))}),s(D,{children:[e(G,{value:i,onChange:n,onKeyUp:o,type:"text",placeholder:"Conversando no chat"}),e(K,{})]})]})},Y=r.div`
    @media screen and (max-width: 600px){
        display: none;
    }
    background-color: #292B2F;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;

`,J=r.div`
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
`;r.img`

`;r.div`

`;const Q=()=>e(Y,{children:e(J,{})}),V=r.div`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin-right: 4px;
   
    
    & + div {
        margin-top: 13px;
    }

    &:hover {

        background-color: #303236;
    }
`,X=r.div`

    width: 40px;
    height: 40px;

    background: #343639;
    border-radius:50%;

`,Z=r.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 17px;
`,_=r.div`
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
`,ee=r.div`
    text-align: left;
    font-size: 14px;
    color: var(--white);

`,te=i=>s(V,{children:[e(X,{}),s(Z,{children:[s(_,{children:[e("strong",{children:i.author}),i.isBot&&e("span",{children:"Bot"}),e("time",{children:i.date})]}),e(ee,{children:i.content})]})]}),re=r.div`
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

`,ne=()=>s(re,{children:[e(F,{}),e(M,{}),e(A,{}),e(R,{}),e(q,{}),e(P,{}),e(Q,{})]}),oe=b`
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

    
`,ie=()=>s(L,{children:[e(ne,{}),e(oe,{})]});y.render(e(v.StrictMode,{children:e(ie,{})}),document.getElementById("root"));
