import React, { useEffect, useState } from 'react';

import { Card } from '@fluentui/react-components/unstable';
import { Button, Label, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { ChevronDownFilled, ChevronLeftFilled, ChevronRightFilled, ChevronUpFilled, DismissCircleFilled, RecordStopFilled } from '@fluentui/react-icons';

import princessPeach from '../../assets/princess-peach.png';
import mario from '../../assets/mario.png';
import ground from '../../assets/ground.png';

const useStyles = makeStyles({
  autoMargin: {
    ...shorthands.margin('auto'),
  },
  card: {
    ...shorthands.margin('none', 'auto'),
    boxShadow: tokens.shadow16,
    minHeight: "400px",
    minWidth: '365px',
  },
  display: {
    ...shorthands.margin('none'),
    ...shorthands.padding('none'),
    boxShadow: tokens.shadow2,
    backgroundColor: "#75A781",
    maxHeight: "240px",
    width: '100%',
  },
  scene: {
    display: 'flex',
    flexDirection: 'column',
  },
  hintLabel: {
    ...shorthands.margin('auto'),
    fontSize: tokens.fontSizeBase100,
    color: 'black',
  },
  characters: {
    ...shorthands.margin('auto', 'none', tokens.spacingVerticalNone),
    display: 'flex',
  },
  mario: {
    ...shorthands.margin('auto', 'auto', tokens.spacingVerticalNone, tokens.spacingHorizontalS),
    height: '96px',
    width: 'auto',
  },
  princessPeach: {
    ...shorthands.margin('auto', tokens.spacingHorizontalS, tokens.spacingVerticalNone, 'auto'),
    height: '96px',
    width: 'auto',
  },
  ground: {
    height: '24px',
    width: 'auto',
  },
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

export const GameConsole: React.FC = (props) => {
  const classes = useStyles();
  const [hintMessage, setHintMessage] = useState<string>();
  const [xPosition, setXPosition] = useState<number>(0);
  const [moveLeft, setMoveLeft] = useState<boolean>(false);
  const [moveRight, setMoveRight] = useState<boolean>(false);
  const maxXPosition = 220;
  const deltaPosition = 10;

  const downHandler = (event: KeyboardEvent) => {
    const key = event.key;
    if (key === 'ArrowLeft' || key === 'a') {
      setMoveLeft(true);
    }
    else if (key === 'ArrowRight' || key === 'd') {
      setMoveRight(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);
  useEffect(() => {
    if (moveLeft && xPosition > 0) {
      setXPosition(xPosition - deltaPosition);
    }
    setMoveLeft(false);
  }, [moveLeft]);
  useEffect(() => {
    if (moveRight && xPosition < maxXPosition) {
      setXPosition(xPosition + deltaPosition);
    }
    setMoveRight(false);
  }, [moveRight]);
  useEffect(() => {
    if (xPosition === maxXPosition) {
      setHintMessage(`Propose by hitting (X).`);
    }
    else {
      setHintMessage(`Go to the princess.`);
    }
  }, [xPosition]);

  return (
    <Card className={classes.card}>
      <Card className={classes.display}>
        <div className={classes.scene}>
          <div className={classes.autoMargin}>
          <Label className={classes.hintLabel}>{hintMessage}</Label>
          </div>
          <div className={classes.characters}>
            <img className={classes.mario} src={mario} style={{ position: 'absolute', left: `${xPosition}px` }} />
            <img className={classes.princessPeach} src={princessPeach} />
          </div>
          <div className={classes.ground}>
            {Array.from(Array(15).keys()).map(() =>
              <img className={classes.ground} src={ground} />
            )}
          </div>
        </div>
      </Card>
      <div className={classes.container}>
        <div className={classes.navigationContainer}>
          <Button
            className={classes.up}
            shape='circular'
            icon={<ChevronUpFilled />} />
          <Button
            className={classes.left}
            shape='circular'
            icon={<ChevronLeftFilled />}
            onClick={() => {setMoveLeft(true)}}
          />
          <Button
            className={classes.right}
            shape='circular'
            icon={<ChevronRightFilled />}
            onClick={() => {setMoveRight(true)}}
          />
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
    </Card>
  );
};
