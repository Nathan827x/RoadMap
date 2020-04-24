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
  }
}));

function LandingPage() {

  function testMethod(strInput) {
    alert('You clicked on: ' + strInput);
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
    </div >
  );
}

export default LandingPage;
