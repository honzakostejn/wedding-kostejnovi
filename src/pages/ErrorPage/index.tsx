import React from 'react';

// components
import { Header } from '../../components/Header';

// fluent ui
import { Card, Label } from '@fluentui/react-components';
import { useTranslation } from 'react-i18next';
import { useGlobalStyles } from '../../styles';

export const ErrorPage: React.FC = () => {
  const globalClasses = useGlobalStyles();
  const { t } = useTranslation();

  return (
    <Card className={globalClasses.page}>
      <Header
        headerText={t('errorPage.headerText')}
      />
      <Label className={globalClasses.pageLabel}>{t('errorPage.label')}</Label>
    </Card>
  );
};
