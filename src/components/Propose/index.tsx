import React, { useEffect, useState } from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { Button, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components/unstable';
import { GameConsole } from '../GameConsole';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  card: {
    ...shorthands.overflow('auto'),
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
    color: 'black',
  }
});

export const Propose: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <Header
        headerText={t('propose.headerText')}
      />
      <section className={classes.section}>
        <GameConsole />
        <Button
          className={classes.button}
          appearance='primary'
          onClick={() => navigate('/info')}
        >
          {t('propose.primaryButton')}
        </Button>
      </section>
    </Card>
  );
};
