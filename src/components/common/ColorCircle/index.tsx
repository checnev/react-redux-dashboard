import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface ColorCircleProps {
  color: string;
  width?: string | number;
  height?: string | number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'inline-block',
    borderRadius: 100,
  }
}));

const ColorCircle: React.FC<ColorCircleProps> = ({
  color,
  width = 10,
  height = 10
}: ColorCircleProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{
      width,
      height,
      backgroundColor: color,
    }} />
  );
}; 

export default ColorCircle;
