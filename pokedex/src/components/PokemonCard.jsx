import React from 'react';
import { Card, Image, Button, Header, Modal } from 'semantic-ui-react';

const PokemonCard = pokemon => {
  const { image, name, id, tag, addToBackpack, addedCount } = pokemon;
  const [open, setOpen] = React.useState(false)

  return (

    <Card>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Details</Button>}
      >
        <Modal.Header>{id}</Modal.Header>
        <Modal.Content image>
        <Image size='medium' src={image} wrapped />
        <Modal.Description>
            <Header>{name.toUpperCase()}</Header>
            <p>Base info and stats</p>
            <Button onClick={addToBackpack.bind(this, pokemon)}>
              Catch {addedCount > 0 && `(✓)` }
              </Button>
            <h3>{addedCount > 0 && `You got this one!`}</h3>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>          
          <Button
            content="OK"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>      
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>        
        <Card.Header>{name.toUpperCase()}</Card.Header>
        <Card.Meta>
          <span className="date">{tag}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          {id}
        </a>        
        </Card.Content>            
      <Button onClick={addToBackpack.bind(this, pokemon)}>
        Catch {addedCount > 0 && `(✓)` }
      </Button>          
    </Card>         
  );
};

export default PokemonCard;
