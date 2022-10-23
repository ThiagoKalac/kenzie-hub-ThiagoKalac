import styled from "styled-components";
import "animate.css"

const Nav = styled.nav`

     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     height: 72px;
     animation: lightSpeedInLeft 1.5s ease;
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
     animation: lightSpeedInRight 1.5s ease;    
          .textWelcomeUser{
               font:var(--title-2);
               color: var(--gray-0);
          }

          .textModule{
               font:var(--title-3);
               color: var(--gray-1);
          }


     @media (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
     }      
`

const Main = styled.main`
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 24px;
     animation: backInDown 1s ease;
     animation-delay: 0.5s;
     animation-fill-mode: backwards;
     
          .divAddTechnology{
               display: flex;
               justify-content: space-between;
               align-items: center;

               p{
                    font:var(--title-4);
                    color: var(--gray-0);
               }

               button{
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
          }

          ul{
               display: flex;
               flex-direction: column;
               background-color: var(--gray-3);
               border-radius: 4px;
               gap: 16px;
               padding: 16px;

               h3{
                    font:var(--title-2);
                    color: var(--gray-0);
                    text-align: center;
               }
          }
          

        
`
export {Nav,Header,Main}