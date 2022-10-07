import styled from "styled-components";

const Input = styled.input`

          outline: none;
          margin-bottom: 6px;
          padding: 12px;
          border: none;
          border-radius: 4px;
          font: var(--input); 
          color:var(--gray-1);
          background-color: var(--gray-2);

&::placeholder{
     color:var(--gray-1);
     font: var(--input)
}

&:focus{
     outline: 2px solid var(--gray-0);
     color:var(--gray-0);
}
`

export default Input