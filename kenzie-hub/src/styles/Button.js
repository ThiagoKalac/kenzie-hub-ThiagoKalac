import styled from "styled-components";

export const BtnMain = styled.button`
     width: 100%;
     padding: 12px;
     height: 40px;
     border:none;
     border-radius: 4px;
     color:var(--gray-0);
     font: var(--button);
     background-color: var(--color-primary);
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 16px;

     &:hover,&:focus,&:active{
          background-color: var(--color-primary-focus);
          transition: 0.2s ease-in-out;
     }

     &:disabled{
          background-color: var(--color-primary-negative);
          cursor: not-allowed;
     }

     .animationLoadign{
          width: 30px;
          height: 30px;
          border: 6px solid var(--gray-0);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          animation: rotationLoadign 1s infinite;
     }

     @keyframes rotationLoadign {
          to{
               transform: rotate(1turn);
          }
     }

`





