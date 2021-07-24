import { makeClassList } from '../../utils';

const PageLink = (props) => {

  const classNames = makeClassList(props.number, props.isChosen);

  return (
    <a href={props.number} className={classNames} onClick={props.handler}>
      {props.number}
    </a>
  );
}

export default PageLink;