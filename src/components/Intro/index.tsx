import React from 'react';

// components
import { Header } from '../Header';
import { Layout } from '../Layout';

// fluent ui
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components/unstable';
import { GameConsole } from '../GameConsole';

const useStyles = makeStyles({
  card: {
    ...shorthands.overflow('scroll'),
    minHeight: "100vh",
    minWidth: "100%"
  }
});

export const Intro: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Header />
      <GameConsole />
    </Card>
  );
};
