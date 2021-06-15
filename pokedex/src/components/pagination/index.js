import PageLink from '../page-link';
import { makeClassList, makeArrayFromValue } from '../../utils';

const makeLinksMarkup = (array, chosen) => {
  return array.map((item) => {
    const allClassNames = makeClassList(item, chosen);
    return <PageLink classNames={allClassNames} pageTitle={item} url="#" key={item} />;
  });
};

const Pagination = (props) => {

  if (props.len < 2) {
    return (
      <div className="pagination"></div>
    );

  } else {
 
    let arr = makeArrayFromValue(props.len);
    let linksMarkup = makeLinksMarkup(arr, +props.chosenPage);

    return (
      <div className="pagination">
        <PageLink classNames="to-start" pageTitle="Начало" url="#" />
        {linksMarkup}
        <PageLink classNames="to-end" pageTitle="Конец" url="#" />
      </div>
    );
    
  }

};

export default Pagination;