import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import RBCImage from '../images/RBCImage';

const styles = (theme) => ({
  paper: {
    alignItems: 'center',
    boxShadow: `0px 8px 8px #0093DE33`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '300px',
    paddingBottom: theme.spacing(3),
  },
  overlay: {
    backgroundColor: '#FFFFFF',
    height: '50px',
    opacity: 0.6,
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },
});

const Card = ({ button, classes, content, title }) => {
  return (
    <Paper className={classes.paper}>
      <Box style={{ position: 'relative' }}>
        <Box className={classes.overlay} />
        <RBCImage />
        <Box className={classes.overlay} style={{ bottom: 0 }} />
      </Box>
      <Typography
        className={classes.title}
        align={'center'}
        color={'primary'}
        noWrap
        style={{ paddingTop: '1rem' }}
        variant={'h3'}
      >
        {title}
      </Typography>
      <Typography
        className={classes.content}
        align={'center'}
        color={'textSecondary'}
        style={{ paddingTop: '1rem' }}
        variant={'body2'}
      >
        {content}
      </Typography>
      <Button className={classes.button} color={'primary'} style={{ marginTop: '1rem' }} variant={'contained'}>
        {button}
      </Button>
    </Paper>
  );
};

export default withStyles(styles)(Card);
