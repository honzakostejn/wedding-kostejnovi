import React, { useEffect, useState } from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { Button, Switch, Label, Text } from '@fluentui/react-components';
import { Card, CardFooter, CardHeader, CardPreview, Dropdown, Option, InputField, TextareaField } from '@fluentui/react-components/unstable';

import image from '../../assets/kostejnovi.png';
import { useTranslation } from 'react-i18next';
import { validateEmail, validatePhoneNumber } from '../../validation';
import { useStyles } from './styles';

export const Info: React.FC = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

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
    <Card className={classes.background}>
      <Header
        headerText={t('info.headerText')}
      />
      <section className={classes.section}>
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
        {showRSVP && !showSuccessResponseMessage && !showErrorResponseMessage &&
          <>
            <Card className={classes.card}>
              <div className={classes.inputForm}>
                <div>
                  <InputField
                    label={<Label className={classes.label}>{t('info.rsvp.fullName.label')}</Label>}
                    size='small'
                    required={true}
                    onChange={(_, data) => { setFullName(data.value.trim()) }}
                    validationState={validateFormInput ? (fullName ? 'success' : 'error') : 'success'}
                    validationMessage={validateFormInput && !fullName ? t('info.rsvp.fullName.validationMessage') : undefined}
                  />
                  <InputField
                    label={<Label className={classes.label}>{t('info.rsvp.email.label')}</Label>}
                    size='small'
                    required={true}
                    onChange={(_, data) => { setEmail(data.value.trim().toLowerCase()) }}
                    validationState={validateFormInput ? validateEmail(email) : 'success'}
                    validationMessage={validateFormInput && validateEmail(email) === 'error' ? t('info.rsvp.email.validationMessage') : undefined}
                  />
                  <InputField
                    label={<Label className={classes.label}>{t('info.rsvp.telephone.label')}</Label>}
                    size='small'
                    required={true}
                    onChange={(_, data) => { setPhoneNumber(data.value.trim()) }}
                    validationState={validateFormInput ? validatePhoneNumber(phoneNumber) : 'success'}
                    validationMessage={validateFormInput && validatePhoneNumber(phoneNumber) === 'error' ? t('info.rsvp.telephone.validationMessage') : undefined}
                  />
                  <TextareaField
                    label={<Label className={classes.label}>{t('info.rsvp.note')}</Label>}
                    size='small'
                    onChange={(_, data) => { setNote(data.value) }}
                  />
                </div>
                <div className={classes.details}>
                  <div className={classes.dropdown}>
                    <Label className={classes.label}>{t('info.rsvp.diet.label')}</Label>
                    <Dropdown
                      className={classes.dropdownInput}
                      size='small'
                      defaultSelectedOptions={[diet]}
                      onOptionSelect={(_, data) => { setDiet(data.selectedOptions[0] ?? diet) }}
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
                    onChange={(_, data) => { setPlusOne(data.checked) }}
                  />
                  <Switch
                    label={<Label className={classes.label}>{t('info.rsvp.overnightStay')}</Label>}
                    onChange={(_, data) => { setOvernightStay(data.checked) }}
                  />
                </div>
              </div>
              <Label size='small'>{t('info.rsvp.rsvpNotification')}</Label>
              <CardFooter className={classes.cardFooter}>
                <Button
                  className={classes.primaryButton}
                  appearance='primary'
                  onClick={() => setTriggerPostData(true)}
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
        {showRSVP && showSuccessResponseMessage && !showErrorResponseMessage &&
          <>
            <Label className={classes.label}>{t('info.responseMessage.success')}</Label>
            <Button
              className={classes.primaryButton}
              appearance='primary'
              onClick={() => setShowRSVP(false)}
            >
              {t('info.responseMessage.button')}
            </Button>
          </>
        }
        {showRSVP && !showSuccessResponseMessage && showErrorResponseMessage &&
          <>
            <Label className={classes.label}>{t('info.responseMessage.error')}</Label>
            <Button
              className={classes.primaryButton}
              appearance='primary'
              onClick={() => setShowRSVP(false)}
            >
              {t('info.responseMessage.button')}
            </Button>
          </>
        }
      </section>
    </Card>
  );
};
