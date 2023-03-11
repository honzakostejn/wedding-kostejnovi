import React, { useEffect, useState } from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { Button, Switch, Label, Text, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Card, CardFooter, CardHeader, CardPreview, Dropdown, Option, InputField, TextareaField } from '@fluentui/react-components/unstable';

import image from '../../assets/kostejnovi.png';
import { useTranslation } from 'react-i18next';
import { PrimaryColor } from '../../constants';

const useStyles = makeStyles({
  background: {
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
  card: {
    boxShadow: tokens.shadow16,
  },
  inputForm: {
    ...shorthands.gap(tokens.spacingVerticalXL),
    ...shorthands.padding(tokens.spacingHorizontalM),
    display: 'flex',
    flexDirection: 'row',
  },
  dropdown: {
    display: 'grid',
  },
  dropdownInput: {
    ...shorthands.padding(tokens.spacingVerticalNone, tokens.spacingHorizontalSNudge)
  },
  image: {
    maxHeight: '60vh',
    backgroundColor: PrimaryColor,
    height: 'auto'
  },
  label: {
    ...shorthands.margin('2px', 'none'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100,
    paddingLeft: '2px',
  },
  text: {
    ...shorthands.margin('auto', 'none'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100,
  },
  primaryButton: {
    fontSize: tokens.fontSizeBase100,
    color: 'black',
  },
  secondaryButton: {
    fontSize: tokens.fontSizeBase100,
  },
  details: {
    ...shorthands.gap(tokens.spacingVerticalL),
    display: 'flex',
    flexDirection: 'column'
  },
  cardFooter: {
    flexDirection: 'column'
  }
});

export const Info: React.FC = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const [showRSVP, setShowRSVP] = useState<boolean>(false);
  const [dietOptions, setDietOptions] = useState<string[]>([
    t('info.rsvp.diet.option_meat'),
    t('info.rsvp.diet.option_cheese'),
    t('info.rsvp.diet.option_staleBread')
  ]);

  useEffect(() => {
    setDietOptions([
      t('info.rsvp.diet.option_meat'),
      t('info.rsvp.diet.option_cheese'),
      t('info.rsvp.diet.option_staleBread')
    ])
  }, [i18n.resolvedLanguage]);

  return (
    <Card className={classes.background}>
      <Header
        headerText={t('info.headerText')}
      />
      <section className={classes.section}>
        {showRSVP &&
          <>
            <Card className={classes.card}>
              <div className={classes.inputForm}>
                <div>
                  <InputField
                    label={<Label className={classes.label}>{t('info.rsvp.fullName')}</Label>}
                    size='small'
                  />
                  <InputField
                    label={<Label className={classes.label}>{t('info.rsvp.email')}</Label>}
                    size='small'
                  />
                  <InputField
                    label={<Label className={classes.label}>{t('info.rsvp.telephone')}</Label>}
                    size='small'
                  />
                  <TextareaField
                    label={<Label className={classes.label}>{t('info.rsvp.note')}</Label>}
                    size='small'
                  />
                </div>
                <div className={classes.details}>
                  <div className={classes.dropdown}>
                    <Label className={classes.label}>{t('info.rsvp.diet.label')}</Label>
                    <Dropdown
                      className={classes.dropdownInput}
                      size='small'
                      defaultSelectedOptions={[t('info.rsvp.diet.option_meat')]}
                    >
                      {dietOptions.map(option =>
                        <Option key={option}>
                          {option}
                        </Option>
                      )}
                    </Dropdown>
                  </div>
                  <Switch
                    label={<Label className={classes.label}>{t('info.rsvp.plusOne')}</Label>}
                  />
                  <Switch
                    label={<Label className={classes.label}>{t('info.rsvp.overnightStay')}</Label>}
                  />
                </div>
              </div>
              <Label size='small'>{t('info.rsvp.rsvpNotification')}</Label>
              <CardFooter className={classes.cardFooter}>
                <Button
                  className={classes.primaryButton}
                  appearance='primary'
                  onClick={() => setShowRSVP(false)}
                >
                  {t('info.rsvp.button_send')}
                </Button>
                <Button
                  className={classes.secondaryButton}
                  appearance='secondary'
                  onClick={() => setShowRSVP(false)}
                >
                  {t('info.rsvp.button_cancel')}
                </Button>
              </CardFooter>
            </Card>
          </>
        }
        {!showRSVP &&
          <>
            <Card className={classes.card}>
              <CardPreview className={classes.card}>
                <img key={'kostejnovi'} className={classes.image} src={image} alt="" />
              </CardPreview>
              <CardFooter>
                <Label className={classes.label}>{t('info.card_image')}</Label>
              </CardFooter>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_when.label')}</Label>}
              />
              <Text className={classes.text}>
                {t('info.card_when.text')}
              </Text>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_where.label')}</Label>}
              />
              <Text className={classes.text}>
              {t('info.card_where.text')}
              </Text>
            </Card>
            <Button
              className={classes.primaryButton}
              appearance='primary'
              onClick={() => setShowRSVP(true)}
            >
              {t('info.primaryButton')}
            </Button>
          </>
        }
      </section>
    </Card>
  );
};
