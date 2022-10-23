import styled from "styled-components";
import "animate.css"

const ModalDialog = styled.dialog`

     display: flex;
     flex-direction: column;
     width: 100%;
     max-width: 500px;
     border-style: none;
     margin: 0 auto;
     border-radius: 8px;
     animation: fadeInDown 1s ease;

     .divHeaderModal{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background-color: var(--gray-2);
          font: var(--text-card);
          color: var(--gray-0);


          button{
               background-color: transparent;
               border-style: none;
               font: var(--button);
               color: var(--gray-1);
               cursor: pointer;
          }
     }


     & form{
          display: flex;
          flex-direction: column;
          gap:16px;
          padding: 16px;
          width: 100%;
          background-color: var(--gray-3);
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;

          label{
               font: var(--headLine);
               color: var(--gray-0);
               margin-bottom: 8px;
          }
  
          select{
               outline: none;
               margin-bottom: 6px;
               padding: 12px;
               border: none;
               border-radius: 4px;
               font: var(--input); 
               color:var(--gray-1);
               background-color: var(--gray-2);
          }
     }


`

export default ModalDialog
