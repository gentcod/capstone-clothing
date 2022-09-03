import './card.styles.jsx'
 import { CardContainer, BackgroundImage, DetailsBox  } from './card.styles';

const Card = (props) => {

   const { product, image} = props;

   return (
      <CardContainer>
        <BackgroundImage image={image}>
        </BackgroundImage>
        <DetailsBox>
         <h2>{product}</h2>
         <p>Show Now</p>
        </DetailsBox>
      </CardContainer>
   );
};

export default Card;