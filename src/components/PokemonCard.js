import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {

  const [isFront, setIsFront] = useState(true);
  
  const spriteSide = isFront ? sprites.front : sprites.back;

  function handleClick() {
    // setIsFront(!isFront);
    setIsFront(isFront => !isFront);

  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <img src={spriteSide} alt={name} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
