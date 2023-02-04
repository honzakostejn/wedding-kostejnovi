import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import React from 'react';
import princessPeach from '../../assets/princess-peach.png';
import ground from '../../assets/ground.png';

const useStyles = makeStyles({
  scene: {
    display: 'flex',
    flexDirection: 'column',
  },
  princessPeach: {
    ...shorthands.margin('auto', tokens.spacingHorizontalS, tokens.spacingVerticalNone, 'auto'),
    height: '96px',
    width: 'auto',
  },
  ground: {
    height: '24px',
    width: 'auto',
  }
});

export const GameScene: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.scene}>
      <img className={classes.princessPeach} src={princessPeach} />
      <div className={classes.ground}>
        {Array.from(Array(15).keys()).map(() =>
          <img className={classes.ground} src={ground} />
        )}
      </div>
    </div>
  );
};
