import React, { useEffect, useState } from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { Button, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components/unstable';
import { GameConsole } from '../GameConsole';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    ...shorthands.overflow('scroll'),
    minHeight: "100vh",
    minWidth: "100%"
  },
  section: {
    ...shorthands.margin('auto'),
    ...shorthands.gap(tokens.spacingVerticalM),
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    fontSize: tokens.fontSizeBase100,
  }
});

export const Propose: React.FC = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [redirectToInfo, setRedirectToInfo] = useState<boolean>(false);
  useEffect(() => {
    if (redirectToInfo) {
      navigate('/info');
    }
  }, [redirectToInfo])

  return (
    <Card className={classes.card}>
      <Header
        headerText='/kostejnovi/wedding> ./propose'
      />
      <section className={classes.section}>
        <GameConsole />
        <Button
          className={classes.button}
          appearance='primary'
          onClick={() => setRedirectToInfo(true)}
        >
          I don't want to play
        </Button>
      </section>
    </Card>
  );
};
