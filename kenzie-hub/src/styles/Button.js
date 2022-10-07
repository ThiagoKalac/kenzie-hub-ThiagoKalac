import styled from "styled-components";

export const BtnMain = styled.button`
     width: 100%;
     padding: 12px;
     border:none;
     border-radius: 4px;
     color:var(--gray-0);
     font: var(--button);
     background-color: ${props=> props.backgroundColor };
     cursor: pointer;

     &:hover,&:focus,&:active{
          background-color: ${props=> props.hover };
          transition: 0.2s ease-in-out;
     }



`





