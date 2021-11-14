import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BACK_LINK_TEXT } from '../../constants';
import ChosenTabContext from '../../contexts/chosen-tab';

const BackLink = () => {

  const t = useContext(ChosenTabContext);

  return (
    <Link 
      to={t._currentValue2} 
      className='btn back'>
        &larr;&nbsp;&nbsp;{BACK_LINK_TEXT}
    </Link>
   )

}

export default BackLink;