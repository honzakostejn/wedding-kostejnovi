import React, { useEffect, useState } from 'react';

// components
import { Header } from '../../components/Header';

// fluent ui
import { Field } from '@fluentui/react-components/unstable';
import { Button, Card, CardFooter, CardHeader, CardPreview, Combobox, Input, Label, mergeClasses, Option, Switch, Text, Textarea } from '@fluentui/react-components';

import poster from '../../assets/kostejnovi.png';
import map from '../../assets/map.png';
import { useTranslation } from 'react-i18next';
import { validateEmail, validatePhoneNumber } from '../../validation';
import { useStyles } from './styles';
import { useGlobalStyles } from '../../styles';

export const InfoPage: React.FC = () => {
  const globalClasses = useGlobalStyles();
  const classes = useStyles();
  const { t, i18n } = useTranslation();

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

  const [showRSVP, setShowRSVP] = useState<boolean>(false);
  useEffect(() => {
    if (!showRSVP) {
      setValidateFormInput(false);
      setTriggerPostData(false);
      setShowErrorResponseMessage(false);
      setShowSuccessResponseMessage(false);
    }
  }, [showRSVP]);

  const [showErrorResponseMessage, setShowErrorResponseMessage] = useState<boolean>(false);
  const [showSuccessResponseMessage, setShowSuccessResponseMessage] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [note, setNote] = useState<string>();
  const [diet, setDiet] = useState<string>(t('info.rsvp.diet.option_meat') ?? '');
  const [plusOne, setPlusOne] = useState<boolean>(false);
  const [overnightStay, setOvernightStay] = useState<boolean>(false);

  const [validateFormInput, setValidateFormInput] = useState<boolean>(false);

  const [triggerPostData, setTriggerPostData] = useState<boolean>(false);
  useEffect(() => {
    const postData = async () => {
      if (triggerPostData) {
        setValidateFormInput(true);

        if (rsvpRequiredAttributesAreFilled()) {
          if (await postRSVP()) setShowSuccessResponseMessage(true);
        }
        else {
          setTriggerPostData(false);
        }
      }
    };
    postData().catch(() => {
      setShowErrorResponseMessage(true);
    });
  }, [triggerPostData]);

  const rsvpRequiredAttributesAreFilled = (): boolean => {
    if (fullName && email && phoneNumber && validateEmail(email) === 'success' && validatePhoneNumber(phoneNumber) === 'success') {
      return true;
    }
    else {
      return false;
    }
  };

  const postRSVP = async () => {
    const body = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      note: note,
      diet: diet,
      plusOne: plusOne,
      overnightStay: overnightStay
    };

    const response = await fetch('/api/postrsvp', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Response status code: ${response.status}`);
    }
    return true;
  };

  return (
    <Card className={globalClasses.page}>
      <Header
        headerText={t('info.headerText')}
      />
      {!showRSVP &&
        <section className={mergeClasses(globalClasses.autoMargin, classes.flexContainer)}>
          <section className={classes.flexContainerColumn}>
            <Card className={globalClasses.card}>
              <CardPreview className={globalClasses.card}>
                <img key={'kostejnovi'} className={classes.image} src={poster} alt="" />
              </CardPreview>
              <CardFooter>
                <Label className={classes.label}>{t('info.card_image')}</Label>
              </CardFooter>
            </Card>
          </section>
          <section className={classes.flexContainerColumn}>
            <Card className={globalClasses.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_when.label')}</Label>}
              />
              <Text>
                {t('info.card_when.text').split('\n').map(x => (<Text block key='' className={classes.text}>{x}</Text>))}
              </Text>
            </Card>
            <Card className={globalClasses.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_where.label')}</Label>}
              />
              <Text className={classes.text}>
                {t('info.card_where.text').split('\n').map(x => (<Text block key='' className={classes.text}>{x}</Text>))}
              </Text>
            </Card>
            <Card className={globalClasses.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_dresscode.label')}</Label>}
              />
              <Text className={classes.text}>
                {t('info.card_dresscode.text')}
              </Text>
            </Card>
            <Card className={globalClasses.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_weddingGift.label')}</Label>}
              />
              <Text className={classes.text}>
                {t('info.card_weddingGift.text')}
              </Text>
            </Card>
            <Card className={globalClasses.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_harmonogram.label')}</Label>}
              />
              <Text>
                {t('info.card_harmonogram.text').split('\n').map(x => (<Text block key='' className={classes.text}>{x}</Text>))}
              </Text>
            </Card>
            <Card className={globalClasses.card}>
              <CardHeader
                header={<Label className={classes.label}>{t('info.card_map')}</Label>}
              />
              <CardPreview className={globalClasses.card}>
                <img key={'map'} className={classes.image} src={map} alt="" />
              </CardPreview>
            </Card>
            {/* <B§utton
              className={globalClasses.primaryButton}
              appearance='primary'
              onClick={() => setShowRSVP(true)}
            >
              {t('info.primaryButton')}
            </Button> */}
          </section>
        </section>
      }
      {showRSVP &&
        <>
          {showSuccessResponseMessage &&
            <section className={classes.responseMessageContainer}>
              <Label className={mergeClasses(globalClasses.pageLabel, globalClasses.noVerticalMargin)}>{t('info.responseMessage.success')}</Label>
              <Button
                className={globalClasses.primaryButton}
                appearance='primary'
                onClick={() => setShowRSVP(false)}
              >
                {t('info.responseMessage.button')}
              </Button>
            </section>
          }
          {showErrorResponseMessage &&
            <section className={classes.responseMessageContainer}>
              <Label className={mergeClasses(globalClasses.pageLabel, globalClasses.noVerticalMargin)}>{t('info.responseMessage.error')}</Label>
              <Button
                className={globalClasses.primaryButton}
                appearance='primary'
                onClick={() => setShowRSVP(false)}
              >
                {t('info.responseMessage.button')}
              </Button>
            </section>
          }
          {!showSuccessResponseMessage && !showErrorResponseMessage &&
            <section className={mergeClasses(globalClasses.autoMargin, classes.flexContainer)}>
              <Card className={globalClasses.card}>
                <section className={classes.flexContainer}>
                  <section className={classes.flexContainerColumn}>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.fullName.label')}</Label>}
                      required={true}
                      validationState={validateFormInput ? (fullName ? 'success' : 'error') : 'success'}
                      validationMessage={validateFormInput && !fullName ? t('info.rsvp.fullName.validationMessage') : undefined}
                    >
                      <Input
                        size='small'
                        onChange={(_, data) => { setFullName(data.value.trim()) }}
                      />
                    </Field>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.email.label')}</Label>}
                      required={true}
                      validationState={validateFormInput ? validateEmail(email) : 'success'}
                      validationMessage={validateFormInput && validateEmail(email) === 'error' ? t('info.rsvp.email.validationMessage') : undefined}
                    >
                      <Input
                        size='small'
                        onChange={(_, data) => { setEmail(data.value.trim().toLowerCase()) }}
                      />
                    </Field>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.telephone.label')}</Label>}
                      required={true}
                      validationState={validateFormInput ? validatePhoneNumber(phoneNumber) : 'success'}
                      validationMessage={validateFormInput && validatePhoneNumber(phoneNumber) === 'error' ? t('info.rsvp.telephone.validationMessage') : undefined}
                    >
                      <Input
                        size='small'
                        onChange={(_, data) => { setPhoneNumber(data.value.trim()) }}
                      />
                    </Field>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.note')}</Label>}
                    >
                      <Textarea
                        size='small'
                        onChange={(_, data) => { setNote(data.value) }}
                      />
                    </Field>
                  </section>
                  <section className={classes.flexContainerColumn}>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.diet.label')}</Label>}
                    >
                      <Combobox
                        className={classes.dropdownInput}
                        size='small'
                        defaultSelectedOptions={[diet]}
                        value={diet}
                        onOptionSelect={(_, data) => { setDiet(data.selectedOptions[0] ?? diet) }}
                      >
                        {dietOptions.map(option =>
                          <Option key={option}>
                            {option}
                          </Option>
                        )}
                      </Combobox>
                    </Field>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.plusOne')}</Label>}
                    >
                      <Switch
                        onChange={(_, data) => { setPlusOne(data.checked) }}
                      />
                    </Field>
                    <Field
                      label={<Label className={classes.label}>{t('info.rsvp.overnightStay')}</Label>}
                    >
                      <Switch
                        onChange={(_, data) => { setOvernightStay(data.checked) }}
                      />
                    </Field>
                  </section>
                </section>
                <Label className={classes.label} size='small'>{t('info.rsvp.rsvpNotification')}</Label>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    className={globalClasses.primaryButton}
                    appearance='primary'
                    onClick={() => setTriggerPostData(true)}
                  >
                    {t('info.rsvp.button_send')}
                  </Button>
                  <Button
                    className={globalClasses.secondaryButton}
                    appearance='secondary'
                    onClick={() => setShowRSVP(false)}
                  >
                    {t('info.rsvp.button_cancel')}
                  </Button>
                </CardFooter>
              </Card>
            </section>
          }
        </>
      }
    </Card>
  );
};
