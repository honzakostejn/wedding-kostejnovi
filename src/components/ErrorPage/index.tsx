import React from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { Label, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components/unstable';

const useStyles = makeStyles({
  container: {
    ...shorthands.overflow('scroll'),
    minHeight: "100vh",
    minWidth: "100%"
  },
  label: {
    ...shorthands.margin('auto'),
    marginTop: "10vh",
    textAlign: 'center',
    fontSize: tokens.fontSizeBase500
  }
});

export const ErrorPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Header
        headerText='/kostejnovi/wedding> ./error'
      />
      <Label className={classes.label}>You won't find anything here...</Label>
    </Card>
  );
};
