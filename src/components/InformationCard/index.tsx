import React from 'react';

// components
import { Card, CardHeader } from '@fluentui/react-components/unstable';
import { CardPreview } from '@fluentui/react-components/unstable';
import { CardFooter } from '@fluentui/react-components/unstable';
import { Button, Label, makeStyles, mergeClasses, shorthands, Text, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('none', 'auto'),
    boxShadow: tokens.shadow16,
  },
  image: {
    maxHeight: '60vh',
  },
  label: {
    ...shorthands.margin('auto', 'none'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100,
  },
  text: {
    ...shorthands.margin('auto', 'none'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100,
  },
  button: {
    ...shorthands.margin('auto'),
    fontSize: tokens.fontSizeBase100,
  }
});

export const InformationCard: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Card className={mergeClasses(classes.card, classes.image)}>
          <CardPreview>
            <img className={classes.image} src="/power-couple.jpg" alt="" />
          </CardPreview>
        </Card>
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

      <Button className={classes.button}>RSVP</Button>
    </>
  );
};
