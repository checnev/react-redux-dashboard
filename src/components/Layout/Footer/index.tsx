import {
  Container,
  Typography,
  Divider,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: 'auto',
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  policy: {
    fontSize: '.9rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <Divider />
      <Container maxWidth="lg" className={classes.container}>
        <Typography align="right">CarShare © {year}</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
