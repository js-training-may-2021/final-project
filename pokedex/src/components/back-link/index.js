import { Link } from 'react-router-dom';
import { BACK_LINK_TEXT } from '../../constants';

const BackLink = (props) => {
   return (
    <Link 
      to={props.tab} 
      className='btn back'>
        &larr;&nbsp;&nbsp;{BACK_LINK_TEXT}
    </Link>
   );
}

export default BackLink;