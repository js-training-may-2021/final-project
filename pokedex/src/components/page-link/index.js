const PageLink = (props) => {

  const changePageNumber = (evt) => {
    evt.preventDefault();
    console.log('go to another page!');
  };

  return (
    <a href={props.url} className={props.classNames} onClick={changePageNumber}>{props.pageTitle}</a>
  );
  
}

export default PageLink;