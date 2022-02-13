import{s as r,j as h,T as b,M as v,r as l,S as y,A as w,W as k,R as C,a as L}from"./vendor.b6e7a19e.js";const S=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))x(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&x(p)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function x(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}};S();const F=r.div`
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
`,I=r.div`

    width: 32px;
    border-radius: 1px;
    height: 10px;
    
    
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;

`,e=h.exports.jsx,s=h.exports.jsxs,j=h.exports.Fragment,M=()=>s(F,{children:[e(t,{}),e(I,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{}),e(t,{})]}),U=r.button`
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

`,t=()=>e(U,{}),$=r.div`
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

`,B=r.span`

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
    


`,z=()=>e($,{children:e(B,{children:"Servidor"})}),N=r.div`

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
`,A=r.div`

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
    
`,E=r(b)`
    width: 28px;
    height: 28px;
    color: var(--gray);
`,O=r.div`
    @media screen and (min-width: 600px){
        display: none;
    }
    width: 40px;
    
    padding: 1px;
    margin: 0px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`,P=r(v)`
    width: 30px;
    height: 30px;
    color: var(--gray);
`,R=()=>s(N,{children:[e(O,{children:e(P,{})}),e(E,{}),e(A,{children:"\u{1F920} bate-papo"})]}),T=r.div`

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
`,q=r.button`
 

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

`,H=()=>e(T,{children:e(q,{children:"Chat"})}),W=r.div`

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

`,D=()=>e(W,{}),g=l.exports.createContext({}),G=({children:o})=>{const[a]=l.exports.useState("matheus55391"),[c]=l.exports.useState("https://avatars.githubusercontent.com/u/35656197?v=4");return e(g.Provider,{value:{name:a,img:c},children:o})},u=()=>{const{name:o,img:a}=l.exports.useContext(g);return{name:o,img:a}},K=r.div`

    grid-area: CH;

    background-color: #36393F;

    display: flex;
    flex-direction: column;
    justify-content:space-between;


`,Y=r(y)`
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
`,J=r.div`
    width: 100%;
    
    @media screen and (min-width: 601px){
        padding: 0px 16px;
    }
    @media screen and (max-width: 600px){
        padding: 5px 8px;    
        flex-grow: 1;
        max-height: 80px;

    }
`,Q=r.input`
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
  
`,V=r(w)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`,X=()=>{const[o,a]=l.exports.useState(""),[c,x]=l.exports.useState([]),{name:n,img:i}=u(),p=d=>{a(d.target.value)},f=d=>{d.key==="Enter"&&o&&(x([...c,{author:`${n}`,avatar:`${i}`,date:"08/02/2022",content:o,hasMention:!1,isBot:!1}]),a(""))};return s(K,{children:[e(Y,{children:c.map((d,m)=>e(de,{avatar:d.avatar||"",author:d.author,date:"21/06/2020",content:d.content},m))}),s(J,{children:[e(Q,{value:o,onChange:p,onKeyUp:f,type:"text",placeholder:"Conversando no chat"}),e(V,{})]})]})},Z=r.div`
    @media screen and (max-width: 600px){
        display: none;
    }
    background-color: #292B2F;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;

`,_=r.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0px 8px 0px 8px;
    padding: 5px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: var(--symbol);
    overflow:hidden;
`,ee=r.img`
    width: 140%;
    height: 140%;
`,te=r.div`
    color: var(--white);
`,re=()=>{const{name:o,img:a}=u();return s(Z,{children:[e(_,{children:e(ee,{src:`${a}`})}),e(te,{children:`${o}`})]})},ne=r.div`
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
`,oe=r.img`

    width: 40px;
    height: 40px;

    background: #343639;
    border-radius:50%;

`,ie=r.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 17px;
`,ae=r.div`
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
`,se=r.div`
    text-align: left;
    font-size: 14px;
    color: var(--white);

`,de=o=>s(ne,{children:[e(oe,{src:o.avatar}),s(ie,{children:[s(ae,{children:[e("strong",{children:o.author}),o.isBot&&e("span",{children:"Bot"}),e("time",{children:o.date})]}),e(se,{children:o.content})]})]}),ce=r.div`
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

`,le=()=>s(ce,{children:[e(M,{}),e(z,{}),e(R,{}),e(H,{}),e(D,{}),e(X,{}),e(re,{})]}),pe=k`
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

    
`,xe=()=>s(j,{children:[e(le,{}),e(pe,{})]});C.render(e(L.StrictMode,{children:e(G,{children:e(xe,{})})}),document.getElementById("root"));
