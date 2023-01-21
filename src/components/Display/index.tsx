import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components/unstable';
import React from 'react';

const useStyles = makeStyles({
  card: {
    boxShadow: tokens.shadow2,
    backgroundColor: "#75A781",
    maxHeight: "240px",
    width: '100%'
  }
});

export const Display: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    </Card>
  );
};
