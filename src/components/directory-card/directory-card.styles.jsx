import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({image}) => `url(${image})`}
`

export const DirectoryCardContainer = styled.div`
  min-width: 30%;
  height: 22rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: .5rem;
  margin: 0 .75rem 1.5rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
     
     ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
     
  &:first-child {
    margin-right: .75rem;
  }
     
  &:last-child {
    margin-left: .75rem;
    height: 35rem;
  }

  &:nth-child(4) {
    height: 35rem;
  }
`

export const DetailsBox = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: .5rem;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  text-transform: uppercase;
 
  h2 {
    font-weight: 500;
    margin: 0 .6rem 0;
    font-size: 2rem;
    color: #4a4a4a;
  }

  p {
    font-weight: 300;
    font-size: 1.4rem;
  }

  &:hover {
    opacity: 0.9;
  }
`