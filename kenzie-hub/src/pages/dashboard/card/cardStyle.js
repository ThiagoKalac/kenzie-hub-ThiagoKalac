import styled from "styled-components";

const LiCard = styled.li `
     
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 16px 24px;
     height: 49px;
     border-radius: 4px;
     background-color: var(--gray-4);

     &:hover,&:focus,&:active{
          background-color: var(--gray-2);
          transition: 0.2s ease-in-out;
     }
          
          p{
               font: var(--text-card);
               color: var(--gray-0);
          }
     
          div{

               display: flex;
               justify-content: space-between;
               align-items: center;
               gap: 16px;

                    p{
                         font: var(--headLine);
                         color: var(--gray-1); 
                    }

                    svg{
                         color: var(--gray-0);
                         width: 24px;
                         height: 24px;
                         cursor: pointer;
                    }
          }
               

`







export default LiCard