import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/App.css'
import '../styles/theme.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 455,
  },
  media: {
    height: 140,
  },
});
export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <div className="body">
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image={props.image}
          title="event"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {props.title}
          </Typography>
          <Typography component="h4">
            {props.category}
          </Typography>
          <Typography component="h4">
            {props.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={`/events/${props.id}`} size="small" color="primary">
          More Details 
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}