import { Router, Route, NavLink } from "react-router-dom";
import ChosenTabContext from "../../contexts/chosen-tab";

const MenuLink = (props) => {

  const changeTab = (evt, tab) => {
    ChosenTabContext._currentValue2 = tab;
  };

  return (
    <NavLink 
      to={props.url} 
      activeClassName="tab-active" 
      className="tab" 
      onClick={(evt) => changeTab(evt, props.url)}>
        {props.title}
      </NavLink>
  );
  
}

export default MenuLink;