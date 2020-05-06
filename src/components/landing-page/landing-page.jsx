import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import './landing-page.css';
import { Work, LocalLibrary } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: '50%',
    margin: 'auto',
    marginBottom: '5%',
  },
  aboutApp: {
    padding: theme.spacing(2),
    textAlign: 'left',
    margin: 'auto',
    marginRight: '1em',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="homePage">
      <Grid container spacing={3}>
        <Grid item xs>
          <Link to="/learning-resources" className="redirect">
            <Paper
              elevation={3}
              className={classes.paper}
            >
              <LocalLibrary />
              <p>Learning Resources</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs>
          <Paper
            elevation={3}
            className={classes.paper}
          >
            <p>Something else?</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper
            elevation={3}
            className={classes.paper}
          >
            <Work />
            <p>Job Board</p>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <h3>Why This Site?</h3>
          <p>Better organization</p>
          <p>Find resources faster</p>
          <p>Track job applications</p>
        </Grid>
        <Grid item md className={classes.aboutApp}>
          <h3>Welcome to RoadMap!</h3>
          <p>
            A more organized place to find resources for learning
            tech concepts, practice resources, and job application tracking. While
            previously applying to jobs, there were a lot of different recommendation
            of sources. It got confusing and I didn’t know where to start. I created
            RoadMap to keep everything organized and wanted to help others benefit
            from this too!
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
