import "./css/styles.css";

import React from 'react';

// components
import { Display } from './components/Display';
import Controls from './components/Controls';

import { Card } from '@fluentui/react-components/unstable';
import { makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('auto'),
    maxWidth: '100%'
  }
});

export const GameConsole: React.FC = (props) => {

  return (
    <Card className={`GameConsole ${useStyles().card}`}>
      <Display />
      <Controls />
    </Card>
  );
};
