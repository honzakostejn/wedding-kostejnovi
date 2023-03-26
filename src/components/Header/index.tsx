import React, { useEffect } from 'react';

// fluent ui
import { Card, Select } from '@fluentui/react-components';
import { Label } from "@fluentui/react-components";
import { IHeaderProps } from '../../interfaces/IHeaderProps';
import { useTranslation } from 'react-i18next';
import { SupportedLanguages } from '../../localization/i18n';
import { useStyles } from './styles';

export const Header: React.FC<IHeaderProps> = (props) => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const [selectedLanguageValue, setSelectedLanguageValue] = React.useState<string>(i18n.resolvedLanguage);
  useEffect(() => {
    i18n.changeLanguage(selectedLanguageValue);
  }, [selectedLanguageValue]);

  return (
    <>
      <Card className={classes.card}>
        <Label className={classes.label}>{props.headerText}</Label>
        <div className={classes.select}>
          <Select
            size='small'
            value={selectedLanguageValue}
            onChange={(_, data) => {
              setSelectedLanguageValue(data.value)
            }}
          >
            {SupportedLanguages.map((languageOption) => {
              return <option key={languageOption.key}>{languageOption.key}</option>
            })}
          </Select>
        </div>
      </Card>
    </>
  );
};
