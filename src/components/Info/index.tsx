import React from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { makeStyles, shorthands } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components/unstable';
import { GameConsole } from '../GameConsole';
import { InformationCard } from '../InformationCard';

const useStyles = makeStyles({
  card: {
    ...shorthands.overflow('scroll'),
    minHeight: "100vh",
    minWidth: "100%"
  }
});

export const Info: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Header />
      <InformationCard />
    </Card>
  );
};
