import { NavLink } from 'react-router-dom';
import ChosenTabContext from '../../contexts/chosen-tab';

const MenuLink = (props) => {

  const changeTab = (tab) => {
    ChosenTabContext._currentValue2 = tab;
  };

  return (
    <NavLink 
      to={props.url} 
      activeClassName='tab-active' 
      className='tab' 
      onClick={() => changeTab(props.url)}>
        {props.title}
      </NavLink>
  );
  
}

export default MenuLink;