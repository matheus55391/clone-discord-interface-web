import{s as n,j as p,A as u,r as x,W as f,R as b,a as m}from"./vendor.2bee8200.js";const v=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&h(a)}).observe(document,{childList:!0,subtree:!0});function d(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function h(o){if(o.ep)return;o.ep=!0;const i=d(o);fetch(o.href,i)}};v();const y=n.div`
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
`,w=n.div`

    width: 32px;
    border-radius: 1px;
    height: 10px;
    
    
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;

`,e=p.exports.jsx,l=p.exports.jsxs,T=p.exports.Fragment,k=()=>l(y,{children:[e(r,{}),e(w,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{}),e(r,{})]}),C=n.button`
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

`,r=()=>e(C,{}),L=n.div`
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
    


`,S=()=>e(L,{children:e(F,{children:"Servidor"})}),I=n.div`

    grid-area: CI;
    background-color: #36393F;        
    overflow: hidden;
    text-overflow: ellipsis;  

    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(0px);
`,j=n.div`

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
    
`,M=()=>e(I,{children:e(j,{children:"# \u{1F920} bate-papo"})}),B=n.div`

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

`,z=()=>l(B,{children:[e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"}),e(t,{children:"Teste"})]}),N=n.div`

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

`,U=()=>e(N,{}),$=n.div`

    grid-area: CH;

    background-color: #36393F;

    display: flex;
    flex-direction: column;
    justify-content:space-between;


`,A=n.div`
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
`,E=n.div`
    width: 100%;
    padding: 0 16px;
`,O=n.input`
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
  
`,R=n(u)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`,q=()=>{const[s,c]=x.exports.useState(""),[d,h]=x.exports.useState([]),o=a=>{c(a.target.value)},i=a=>{a.code==="Enter"&&s&&(h([...d,{author:"Fulano",date:"08/02/2022",content:s,hasMention:!1,isBot:!1}]),c(""))};return l($,{children:[e(A,{children:d.map((a,g)=>e(Q,{author:"Meguinha",date:"21/06/2020",content:a.content},g))}),l(E,{children:[e(O,{value:s,onChange:o,onKeyPress:i,type:"text",placeholder:"Conversando no chat"}),e(R,{})]})]})},H=n.div`
    background-color: #292B2F;  
    grid-area: UI;
    display: flex;
    
    flex-direction: row;
    
    align-items: center;

`,P=n.div`
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

`;const W=()=>e(H,{children:e(P,{})}),D=n.div`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin-right: 4px;
    background-color: transparent;
    
    & + div {
        margin-top: 13px;
    }
`,G=n.div`

    width: 40px;
    height: 40px;

    background: #343639;
    border-radius:50%;

`,K=n.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 17px;
`,Y=n.div`
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
`,J=n.div`
    text-align: left;
    font-size: 14px;
    color: var(--white);

`,Q=s=>l(D,{children:[e(G,{}),l(K,{children:[l(Y,{children:[e("strong",{children:s.author}),s.isBot&&e("span",{children:"Bot"}),e("time",{children:s.date})]}),e(J,{children:s.content})]})]}),V=n.div`
    display: grid;

    grid-template-columns: 71px 240px auto 240px ;
    grid-template-rows: 46px auto 52px;

    grid-template-areas:
        'SL SN CI CI' 
        'SL CL CH UL'
        'SL UI CH UL'
    ;

    height: 100vh;

`,X=()=>l(V,{children:[e(k,{}),e(S,{}),e(M,{}),e(z,{}),e(U,{}),e(q,{}),e(W,{})]}),Z=f`
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

    
`,_=()=>l(T,{children:[e(X,{}),e(Z,{})]});b.render(e(m.StrictMode,{children:e(_,{})}),document.getElementById("root"));
