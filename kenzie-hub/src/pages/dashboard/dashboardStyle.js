import styled from "styled-components";


const Nav = styled.nav`

     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 72px;
     padding: 24px;
     margin: 32px auto 64px auto;

     h1{
          font:var(--title-1);
          color: var(--color-primary);
     }


     a{
          padding: 8px 12px;
          border:none;
          border-radius: 4px;
          color:var(--gray-0);
          font: var(--button);
          background-color: var(--gray-3);
          cursor: pointer;
          text-align: center;

               &:hover,&:focus,&:active{
                    background-color: var(--gray-1);
                    transition: 0.2s ease-in-out;
               }

          }
     

`

const Header = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 118px;
     padding: 24px;
          
          .textWelcomeUser{
               font:var(--title-2);
               color: var(--gray-0);
          }

          .textModule{
               font:var(--title-3);
               color: var(--gray-1);
          }
`

const Main = styled.main`
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 24px;
     padding: 24px;
          
          p{
               font:var(--title-3);
               color: var(--gray-0);
          }

          span{
               font: 500 16px var(--font);
               color: var(--gray-0);
          }
`
export {Nav,Header,Main}