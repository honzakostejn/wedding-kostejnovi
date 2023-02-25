import React, { useState } from 'react';

// components
import { Header } from '../Header';

// fluent ui
import { Button, Label, Text, makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import { Card, CardFooter, CardHeader, CardPreview, Dropdown, Option, InputField, SwitchField, TextareaField } from '@fluentui/react-components/unstable';

import image from '../../assets/power-couple.jpg';

const useStyles = makeStyles({
  background: {
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
    ...shorthands.gap(tokens.spacingVerticalXXXL),
    display: 'flex',
    flexDirection: 'column'
  },
  cardFooter: {
    flexDirection: 'column'
  }
});

export const Info: React.FC = () => {
  const classes = useStyles();
  const [showRSVP, setShowRSVP] = useState<boolean>(false);

  return (
    <Card className={classes.background}>
      <Header
        headerText='/kostejnovi/wedding> ./info'
      />
      <section className={classes.section}>
        {showRSVP &&
          <>
            <Card className={classes.card}>
              <div className={classes.inputForm}>
                <div>
                  <InputField
                    label={<Label className={classes.label}>full name</Label>}
                    size='small'
                  />
                  <InputField
                    label={<Label className={classes.label}>email</Label>}
                    size='small'
                  />
                  <InputField
                    label={<Label className={classes.label}>telephone</Label>}
                    size='small'
                  />
                  <TextareaField
                    label={<Label className={classes.label}>note</Label>}
                    size='small'
                  />
                </div>
                <div className={classes.details}>
                  <div className={classes.dropdown}>
                    <Label className={classes.label}>diet</Label>
                    <Dropdown
                      className={classes.dropdownInput}
                      size='small'
                      defaultSelectedOptions={['ham']}
                    >
                      {['ham', 'cheese', 'stale bread'].map(option => <Option key={option}>
                        {option}
                      </Option>)}
                    </Dropdown>
                  </div>
                  <SwitchField
                    label={<Label className={classes.label}>I'm bringing +1</Label>}
                  />
                </div>
              </div>
              <Label size='small'>invites are closing soon, don't miss out!</Label>
              <CardFooter className={classes.cardFooter}>
                <Button
                  className={classes.primaryButton}
                  appearance='primary'
                  onClick={() => setShowRSVP(false)}
                >
                  send
                </Button>
                <Button
                  className={classes.secondaryButton}
                  appearance='secondary'
                  onClick={() => setShowRSVP(false)}
                >
                  cancel
                </Button>
              </CardFooter>
            </Card>
          </>
        }
        {!showRSVP &&
          <>
            <Card className={classes.card}>
              <CardPreview className={mergeClasses(classes.card, classes.image)}>
                <img key={'power-couple'} className={classes.image} src={image} alt="" />
              </CardPreview>
              <CardFooter>
                <Label className={classes.label}>{"we're getting married!"}</Label>
              </CardFooter>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                header={<Label className={classes.label}>when?</Label>}
              />
              <Text className={classes.text}>
                {"2023-07-07T13:00:00Z"}
              </Text>
            </Card>
            <Card className={classes.card}>
              <CardHeader
                header={<Label className={classes.label}>where?</Label>}
              />
              <Text className={classes.text}>
                {"not that far away..."}
              </Text>
            </Card>
            <Button
              className={classes.primaryButton}
              appearance='primary'
              onClick={() => setShowRSVP(true)}
            >
              rsvp
            </Button>
          </>
        }
      </section>
    </Card>
  );
};
