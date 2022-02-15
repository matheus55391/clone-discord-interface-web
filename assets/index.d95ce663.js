import{s as t,m as C,j as i,a as e,T as k,M as F,r as x,S as L,A as S,u as B,R as I,b as u,N as $,W as E,B as j,c as z,d as M}from"./vendor.f91fe9e3.js";const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function d(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=d(n);fetch(n.href,a)}};N();var U="/Discord-Clone/assets/background.982194cc.png";const D=t.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-image: url(${U});
    background-size: 100% 100%;

`,R=t(C.div)` 

    display: flex;
    flex-direction: row;
    gap: 24px;
    //align-items: center;
    background-color: #36393F;

    padding: 34px ;    

    @media (max-width: 500px){
        width: 100vw;
        height: 100vh;
    }
    @media (min-width: 501px){
        border-radius: 8px;
        width: 600px;
        height: 410px;
    }
    @media (min-width: 901px){
        width: 800px;
        
    }
    
`;t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }

`;t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    align-items: center;
    text-align: center;
    @media (max-width: 900px){
        display: none;
    }

`;const T=t.div`
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
`,A=t.div`

    width: 32px;
    border-radius: 1px;
    height: 10px;
    
    
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;

`,P=()=>i(T,{children:[e(o,{}),e(A,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{}),e(o,{})]}),H=t.button`
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

`,o=()=>e(H,{}),O=t.div`
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

`,q=t.span`

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
    


`,G=()=>e(O,{children:e(q,{children:"Servidor"})}),Q=t.div`

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
`,W=t.div`

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
    
`,K=t(k)`
    width: 28px;
    height: 28px;
    color: var(--gray);
`,Y=t.div`
    @media screen and (min-width: 600px){
        display: none;
    }
    width: 40px;
    
    padding: 1px;
    margin: 0px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`,V=t(F)`
    width: 30px;
    height: 30px;
    color: var(--gray);
`,_=()=>i(Q,{children:[e(Y,{children:e(V,{})}),e(K,{}),e(W,{children:"\u{1F920} bate-papo"})]}),J=t.div`

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
`,X=t.button`
 

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

`,Z=()=>e(J,{children:e(X,{children:"Chat"})}),ee=t.div`

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

`,te=()=>e(ee,{}),f={nome:"",img:"https://avatars.githubusercontent.com/u/35656197?v=4"},b=x.exports.createContext({}),oe=({children:r})=>{const[s,d]=x.exports.useState({name:f.nome,img:f.img}),l=n=>{d({name:n,img:s.img})};return e(b.Provider,{value:{user:s,setName:l},children:r})},m=()=>{const{user:r,setName:s}=x.exports.useContext(b);return{user:r,setName:s}},re=t.div`

    grid-area: CH;

    background-color: #36393F;

    display: flex;
    flex-direction: column;
    justify-content:space-between;


`,ne=t(L)`
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
`,ie=t.div`
    width: 100%;
    
    @media screen and (min-width: 601px){
        padding: 0px 16px;
    }
    @media screen and (max-width: 600px){
        padding: 5px 8px;    
        flex-grow: 1;
        max-height: 80px;

    }
`,ae=t.input`
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
  
`,se=t(S)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`,de=()=>{const[r,s]=x.exports.useState(""),[d,l]=x.exports.useState([]),{user:n}=m(),a=c=>{s(c.target.value)},p=c=>{c.key==="Enter"&&r&&(l([...d,{author:`${n.name}`,avatar:`${n.img}`,date:"08/02/2022",content:r,hasMention:!1,isBot:!1}]),s(""))};return i(re,{children:[e(ne,{children:d.map((c,h)=>e(ve,{avatar:c.avatar,author:c.author,date:"21/06/2020",content:c.content},h))}),i(ie,{children:[e(ae,{value:r,onChange:a,onKeyUp:p,type:"text",placeholder:"Conversando no chat"}),e(se,{})]})]})},ce=t.div`
    @media screen and (max-width: 600px){
        display: none;
    }
    background-color: #292B2F;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;

`,le=t.div`
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
`,pe=t.img`
    width: 140%;
    height: 140%;
`,xe=t.div`
    color: var(--white);
`,ge=()=>{const{user:r}=m();return i(ce,{children:[e(le,{children:e(pe,{src:`${r.img}`})}),e(xe,{children:`${r.name}`})]})},he=t.div`
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
`,ue=t.img`

    width: 40px;
    height: 40px;

    background: #343639;
    border-radius:50%;

`,me=t.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 17px;
`,fe=t.div`
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
`,be=t.div`
    text-align: left;
    font-size: 14px;
    color: var(--white);

`,ve=r=>i(he,{children:[e(ue,{src:r.avatar}),i(me,{children:[i(fe,{children:[e("strong",{children:r.author}),r.isBot&&e("span",{children:"Bot"}),e("time",{children:r.date})]}),e(be,{children:r.content})]})]}),we=t.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }
`,ye=t.img`

    padding-bottom: 30px;
    @media (min-width: 501px){
        display: none;
    }
`,Ce=t.h3`

    font-size: 26px;
    margin: 0px 0px 8px;
    color: #ffffff;
`,ke=t.p`

    color: #B9BBBE;
    font-size: 16px;
`,Fe=t.form`

    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 10px 25px 25px 25px;
    color: #fff;
    width: 100%;
    height: 100%;
`,Le=t.div`

    text-align: center;
`,v=t.p`

    font-size: 14px;
    margin: 20px 0px 10px 0px;
    font-weight: bold;
    padding-left: 4px;
    color: ${r=>r.bad?"red":"#B9BBBE"};    
`,w=t.input`

    background-color: #2f3136;
    border: 1px solid ${r=>r.bad?"red":"#202225"};
    border-radius: 4px;
    height: 48px;
    color: #fff;
    padding: 10px;
    &:focus {
        border: 1px solid ${r=>r.bad?"red":"#007FFF"};
    }
`,Se=t.button`

    cursor: pointer;
    background-color: #5865F2;    
    margin-top: 30px;
    border-radius: 4px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    transition: background-color 0.2s;
    &:hover{
        background-color: #404EED;
        
    }
`;var Be="/Discord-Clone/assets/discordlogo.641b1091.svg";const Ie=()=>{const[r,s]=x.exports.useState(!1),[d,l]=x.exports.useState(!1),[n,a]=x.exports.useState(""),[p,c]=x.exports.useState(""),{setName:h}=m(),y=B();return i(we,{children:[i(Le,{children:[e(ye,{src:Be}),e(Ce,{children:"Boas-vindas de volta!"}),e(ke,{children:"Estamos muito animados em te ver novamente!"})]}),i(Fe,{onSubmit:g=>{g.preventDefault(),n||s(!0),p||l(!0),n&&p&&(h(n),a(""),c(""),y("/Discord-Clone/channels"))},children:[i(v,{bad:r,children:["LOGIN ",r?"- Este campo \xE9 obrigat\xF3rio":""]}),e(w,{autoFocus:!0,type:"text",value:n,onChange:g=>{a(g.target.value),s(!1)},bad:r,maxLength:45}),i(v,{bad:d,children:["SENHA ",d?"- Este campo \xE9 obrigat\xF3rio":""]}),e(w,{type:"password",value:p,onChange:g=>{c(g.target.value),l(!1)},bad:d,maxLength:45}),e(Se,{onClick:()=>{},children:"Entrar"})]})]})};var $e="/Discord-Clone/assets/qr-code.a6db07aa.svg";const Ee=t.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    align-items: center;
    text-align: center;
    @media (max-width: 900px){
        display: none;
    }
`,je=t.img`
    
    max-width: 158px;
    margin-bottom: 15px;
    width: 176px;
    height: 176px;
`,ze=t.h3`

    font-size: 22px;
    color: #FFFFFF;
    padding: 0px 5px 25px;
`,Me=t.p`

    color: #B9BBBE;
    font-size: 14px;
`,Ne=()=>i(Ee,{children:[e("a",{href:"https://github.com/matheus55391/Discord-Clone",target:"_blank",rel:"meugit",children:e(je,{src:$e})}),e(ze,{children:"Acesse o projeto com o C\xF3digo QR"}),i(Me,{children:["Escaneie isto com a ",e("strong",{children:"c\xE2mera do seu smartphone"})," para acessar o reposit\xF3rio do projeto."]})]}),Ue=()=>e(D,{children:i(R,{initial:{opacity:.2},animate:{opacity:1},transition:{duration:.4},children:[e(Ie,{}),e(Ne,{})]})}),De=t.div`
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

`,Re=()=>i(De,{children:[e(P,{}),e(G,{}),e(_,{}),e(Z,{}),e(te,{}),e(de,{}),e(ge,{})]}),Te=()=>i(I,{children:[e(u,{path:"/Discord-Clone/Login",element:e(Ue,{})}),e(u,{path:"/Discord-Clone/Channels",element:e(Re,{})}),e(u,{path:"*",element:e($,{to:"/Discord-Clone/login"})})]}),Ae=E`
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

    
`,Pe=()=>e(j,{children:i(oe,{children:[e(Te,{}),e(Ae,{})]})});z.render(e(M.StrictMode,{children:e(Pe,{})}),document.getElementById("root"));
