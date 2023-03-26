import React from 'react';

// components
import { Header } from '../../components/Header';

// fluent ui
import { Button } from '@fluentui/react-components';
import { Card } from '@fluentui/react-components';
import { GameConsole } from '../../components/GameConsole';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGlobalStyles } from '../../styles';
import { useStyles } from './styles';

export const ProposePage: React.FC = () => {
  const globalClasses = useGlobalStyles();
  const classes = useStyles();
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Card className={globalClasses.page}>
      <Header
        headerText={t('propose.headerText')}
      />
      <section className={classes.container}>
        <GameConsole />
        <Button
          className={globalClasses.primaryButton}
          appearance='primary'
          onClick={() => navigate('/info')}
        >
          {t('propose.primaryButton')}
        </Button>
      </section>
    </Card>
  );
};
