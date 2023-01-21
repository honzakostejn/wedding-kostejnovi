import React from 'react';

// fluent ui
import { Button, makeStyles, shorthands } from '@fluentui/react-components';
import { ChevronUpFilled, ChevronLeftFilled, ChevronRightFilled, ChevronDownFilled, RecordStopFilled, DismissCircleFilled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    ...shorthands.margin('auto'),
    ...shorthands.gap('70px'),
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(2)',
    gridTemplateRows: 'repeat(1)',
    maxHeight: "90px"
  },
  navigationContainer: {
    ...shorthands.margin('auto'),
    ...shorthands.gap('5px'),
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(2, 30px)',
    gridTemplateRows: 'repeat(3, 30px)',
    gridRowStart: '1',
    gridColumnStart: '1'
  },
  actionContainer: {
    ...shorthands.margin('auto'),
    ...shorthands.gap('5px'),
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(2, 30px)',
    gridTemplateRows: 'repeat(2, 30px)',
    gridRowStart: '1',
    gridColumnStart: '2'
  },
  up: {
    gridRowStart: '1',
    gridColumnStart: '2'
  },
  left: {
    gridRowStart: '2',
    gridColumnStart: '1',
  },
  right: {
    gridRowStart: '2',
    gridColumnStart: '3'
  },
  down: {
    gridRowStart: '3',
    gridColumnStart: '2'
  },
  aButton: {
    gridRowStart: '1',
    gridColumnStart: '2'
  },
  bButton: {
    gridRowStart: '2',
    gridColumnStart: '1'
  }
});

export const Controls: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.navigationContainer}>
        <Button
          className={classes.up}
          shape='circular'
          icon={<ChevronUpFilled />} />
        <Button
          className={classes.left}
          shape='circular'
          icon={<ChevronLeftFilled />} />
        <Button
          className={classes.right}
          shape='circular'
          icon={<ChevronRightFilled />} />
        <Button
          className={classes.down}
          shape='circular'
          icon={<ChevronDownFilled />} />
      </div>
      <div className={classes.actionContainer}>
        <Button
          className={classes.aButton}
          shape='circular'
          icon={<RecordStopFilled />} />
        <Button
          className={classes.bButton}
          shape='circular'
          icon={<DismissCircleFilled />} />
      </div>
    </div>
  );
};