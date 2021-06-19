import { getPokemonTitle, getPokemonStatus } from '../../utils';

const LargeCard = (props) => {

  const imgPicture = props.id > 720 ? 'nophoto.gif' : props.id + '.png';
  const imgUrl = '../../images/' + imgPicture;
  const status = getPokemonStatus(props.id, props.caught);
  const name = getPokemonTitle(props.id, props.data);

  return (
    <div className="card-large">
      <div className="card-large-info">
        <h2 className="pokemon-name">{name}</h2>
        <div className="details">
          <p><strong>id:</strong> {props.id}</p>
          <span className="separator"></span>
          <p><strong>Пойман:</strong> <span className="caught">{status}</span></p>
        </div>
        <img src={imgUrl} className="card-large-picture" alt={name}></img>
      </div>
  </div>
  );
  
};

export default LargeCard;