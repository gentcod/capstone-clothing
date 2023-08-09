import styled from 'styled-components';

import {SpinnerContainer} from '../spinner/spinner.styles';

export const BaseButton = styled.button`
   height: 3rem;
   border: none;
   outline: none;
   display: flex;
   background-color: #222;
   text-transform: uppercase;
   text-align: center;
   color: #fff;
   padding: .5rem 2.5rem;
   border-radius: 3px;
   margin: 0 auto;
   margin-top: 1rem;
   backface-visibility: hidden;
   cursor: pointer;
   transition: all .5s;
   align-items: center;
   justify-content: center;


   &:hover {
      transform: scale(1.05);
      background-color: #fff;
      color: #222;
      font-weight: 700;
      border: 1px solid #222;
   }

   &:active {
      transform: scale(1) translateY(1rem);
   }
`

export const GoogleSignInButton = styled(BaseButton)`
   background-color: #4285f4;

   &:hover {
      background-color: #aac9fa;
      color: #1f251f;
      border: 1px solid #4285f4;
   }
`

export const InvertedButton = styled(BaseButton)`
   width: 30rem;
   height: 4rem;
   background-color: rgba(#fff, 0.5);
   color: #fff;
   font-weight: 700;
   border: 1px solid #222;
   padding: 1.5rem 10rem;
   font-size: 1rem;
   text-align: center;

   &:hover {
      background-color: #eee;
      color: #222;
      font-weight: 900;
      border: 1px solid #000;
   }
`

export const ButtonContainer = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   align-items: center;
`;

export const ButtonSpinner = styled(SpinnerContainer)`
   width: 2rem;
   height: 2rem;
   top: 20%;
   margin-top: 0;
`