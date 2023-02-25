import React from 'react';

// fluent ui
import { Card } from '@fluentui/react-components/unstable';
import { Label, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { IHeaderProps } from '../../interfaces/IHeaderProps';

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('none', 'auto'),
    boxShadow: tokens.shadow16,
    maxHeight: '48px',
    minWidth: '365px',
    maxWidth: '70%'
  },
  label: {
    ...shorthands.margin('auto'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100
  }
});

export const Header: React.FC<IHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Label className={classes.label}>{props.headerText}</Label>
      </Card>
    </>
  );
};