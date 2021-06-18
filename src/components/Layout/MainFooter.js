import classes from './MainFooter.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <a href='https://github.com/AnaMoskvina' target='_blank' className={classes.link}>
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;