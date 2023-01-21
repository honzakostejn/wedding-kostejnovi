import React from 'react';

// components
import { Display } from "../Display";
import { Controls } from '../Controls';

import { Card } from '@fluentui/react-components/unstable';
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('none', 'auto'),
    boxShadow: tokens.shadow16,
    maxHeight: "400px",
    minWidth: '365px',
    maxWidth: '50%'
  }
});

export const GameConsole: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Display />
      <Controls />
    </Card>
  );
};
