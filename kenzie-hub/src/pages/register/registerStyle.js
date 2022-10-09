import styled from "styled-components";

const Section = styled.section`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     width: 500px;
     max-width: 100%;
     margin: 16px auto;

     .containerLogo{

          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;

          h1{
               font:var(--title-1);
               color: var(--color-primary);
               margin-bottom: 32px;
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
     }

`

const RegisterForm = styled.form`
     display: flex;
     flex-direction: column;
     gap:7px;
     width: 100%;
     max-width: 600px;
     padding: 16px;
     border-radius: 6px;
     background-color: var(--gray-3);

     h2{
          font:var(--title-2);
          color: var(--gray-0);
          text-align: center;
          margin: 8px auto;
     }
     
     span{
          margin: 8px auto;
          font: var(--headLine);
          color: var(--gray-1);
     }

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

     .boxInputVisiblePassword{
          display: flex;
          flex-direction: column;
          position: relative;

          .iconVisiblePassaword{
               position: absolute;
               top: 6px;
               right: 13px;
               width: 28px;
               height: 28px;     
               color: var(--gray-1);
          }
     }

  

     button{
          background-color: var(--color-primary-negative);
     }

`


export { Section, RegisterForm}


