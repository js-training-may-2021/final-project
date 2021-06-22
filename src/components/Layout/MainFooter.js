import classes from './MainFooter.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <a href="https://github.com/AnaMoskvina" target="_blank" rel="noreferrer" className={classes.link}>
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;