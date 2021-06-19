import ChosenPageContext from "../../contexts/chosen-page";

const PageLink = (props) => {

  const changePageNumber = (evt, number, quantity) => {
    evt.preventDefault();
    if (number === 'Начало') {
      number = 1;
    } else if (number === 'Конец') {
      number = quantity;
    }
    ChosenPageContext._currentValue2 = number;
  };

  return (
    <a href={props.url} className={props.classNames} onClick={(evt) => changePageNumber(evt, props.pageTitle, props.quantity)}>
      {props.pageTitle}
    </a>
  );
  
}

export default PageLink;