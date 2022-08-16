import Card from '../card/card.component';
import './_directory.style.scss';


const Directory = ({categories}) => {
   return (
      <div className="directory-container">
        {categories.map(({title, id, imageUrl}) => {
          return(
            <Card product={title} key={id} image={imageUrl}/>
          )
        })}
      </div>
    );
}

export default Directory;