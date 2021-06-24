import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const BackpackComponent = ({ name, id, image, removeFromBackpack }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromBackpack.bind(this, id)} color="red">
          Let go
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{name}</List.Content>      
    </List.Item>
  </List>
);

const MenuComponent = ({ count, items }) => (
  <Menu>
    <Menu.Item name="browse">Pokedex</Menu.Item>

    <Menu.Menu position="right">
      <Popup
        trigger={
          <Menu.Item name="help">
            Backpack
          </Menu.Item>
        }
        content={items.map(pokemon => (
          <BackpackComponent {...pokemon} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
