import React from 'react';
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
  },
}));

function LandingPage() {
  function testMethod(strInput) {
    // TODO: Routing on button click. User Router or something
    const temp = `You clicked on: ${strInput}`;
    console.debug(temp);
  }

  const classes = useStyles();

  return (
    <div className="homePage">
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => { testMethod('learning'); }}
          >
            <LocalLibrary />
            <p>Learning Resources</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => { testMethod('Other'); }}
          >
            <p>Something else?</p>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper
            elevation={3}
            className={classes.paper}
            onClick={() => { testMethod('Job Board'); }}
          >
            <Work />
            <p>Job Board</p>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <p>Maybe an logo or something about the app</p>
            <p>Maybe Key words? Learn, Apply, Jobs</p>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            {/* TODO: Come up with an actual description */}
            <p>
              UPDATE!!!!!!!!
              Description of what the app really is. It&#39;s a place with more
              orginzed solution for job hunters (Specifically the tech world).
              A collection of great learning sources, job application tracking,
              and something else?
            </p>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
}

export default LandingPage;
