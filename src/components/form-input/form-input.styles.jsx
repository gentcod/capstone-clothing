import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
   font-size: 1rem;
   top: -.5rem;
`

export const FormInputLabel = styled.label`
   font-size: 1.1rem;
   font-weight: 300;
   color: #4b4949;
   position: absolute;
   top: 2rem;
   cursor: pointer;

   transition: all .8s;

   ${({shrink}) => shrink && shrinkLabelStyles}
`
export const FormInputContainer = styled.div`
   display: flex;
   flex-direction: row;
   position: relative;
`
export const FormInputContent = styled.input`
   margin-top: 1rem;
   margin-bottom: 2rem;
   display: block;
   border-bottom: 1px solid #222;
   width: 100%;

   &:focus ~ ${FormInputLabel} {
      ${shrinkLabelStyles}
   }
`