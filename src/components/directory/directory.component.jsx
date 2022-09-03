import Card from '../card/card.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({categories}) => {
   return (
      <DirectoryContainer>
        {categories.map(({title, id, imageUrl}) => {
          return(
            <Card product={title} key={id} image={imageUrl}/>
          )
        })}
      </DirectoryContainer>
    );
};

export default Directory;