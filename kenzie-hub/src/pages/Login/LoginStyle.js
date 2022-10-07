import styled from "styled-components";

const Section = styled.section`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     width: 500px;
     max-width: 100%;
     height: 90vh;
     margin: 32px auto 0px auto;

     h1{
          font:var(--title-1);
          color: var(--color-primary);
          margin-bottom: 32px;
     }

`

const LoginForm = styled.form`
     display: flex;
     flex-direction: column;
     gap:16px;
     width: 100%;
     max-width: 600px;
     height: 500px;
     padding: 16px;
     border-radius: 6px;
     background-color: var(--gray-3);

     h2{
          font:var(--title-2);
          color: var(--gray-0);
          text-align: center;
          margin: 16px auto;
     }

     label{
          font: var(--headLine);
          color: var(--gray-0);
          /* margin-bottom: 12px; */

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

     span{
          margin: 16px auto;
          font: var(--headLine);
          color: var(--gray-1);
     }

`


export { Section, LoginForm}