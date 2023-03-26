import React, { useEffect, useState } from 'react';

import { Card } from '@fluentui/react-components';
import { Button, Label, mergeClasses } from "@fluentui/react-components";
import { ChevronDownFilled, ChevronLeftFilled, ChevronRightFilled, ChevronUpFilled, DismissCircleFilled, RecordStopFilled } from '@fluentui/react-icons';
import Typewriter from 'typewriter-effect';


import princessPeach from '../../assets/princess-peach.png';
import mario from '../../assets/mario.png';
import ground from '../../assets/ground.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { useGlobalStyles } from '../../styles';

export const GameConsole: React.FC = () => {
  const globalClasses = useGlobalStyles();
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
 
  const [hintMessage, setHintMessage] = useState<string>();
  const [xPosition, setXPosition] = useState<number>(0);
  const [moveLeft, setMoveLeft] = useState<boolean>(false);
  const [moveRight, setMoveRight] = useState<boolean>(false);
  const [xAction, setXAction] = useState<boolean>(false);
  const [propose, setPropose] = useState<boolean>(false);
  const [answer, setAnswer] = useState<boolean>(false);
  const maxXPosition = 190;
  const deltaPosition = 10;

  // event handlers
  useEffect(() => {
    window.addEventListener('keydown', movementHandler);
    window.addEventListener('keydown', actionHandler);
    return () => {
      window.removeEventListener('keydown', movementHandler);
      window.removeEventListener('keydown', actionHandler);
    };
  }, []);

  const movementHandler = (event: KeyboardEvent) => {
    const key = event.key;
    if (key === 'ArrowLeft' || key === 'a' || key === 'A') {
      setMoveLeft(true);
    }
    else if (key === 'ArrowRight' || key === 'd' || key === 'D') {
      setMoveRight(true);
    }
  };

  const actionHandler = (event: KeyboardEvent) => {
    const key = event.key;
    if (key === 'x' || key === 'X') {
      setXAction(true);
    }
  };

  // handle user input
  useEffect(() => {
    if (moveLeft && xPosition > 0) {
      setXPosition(xPosition - deltaPosition);
      setMoveLeft(false);
    }
    else if (moveRight && xPosition < maxXPosition) {
      setXPosition(xPosition + deltaPosition);
      setMoveRight(false);
    }

    if (xAction && propose && answer) {
      navigate('/info');
    }
    else if (xAction && xPosition === maxXPosition) {
      setPropose(true);
      setXAction(false);
    }
  }, [moveLeft, moveRight, xAction]);

  // hint messages
  useEffect(() => {
    if (xPosition === maxXPosition) {
      setHintMessage(t('gameConsole.hintMessages.propose') ?? '');
    }
    else {
      setHintMessage(t('gameConsole.hintMessages.goToThePrincess') ?? '');
    }
  }, [xPosition, i18n.resolvedLanguage]);


  return (
    <Card className={classes.consoleBody}>
      <Card className={classes.display}>
        <div className={classes.scene}>
          {!propose &&
              <Label className={mergeClasses(globalClasses.autoMargin, classes.hintLabel)}>{hintMessage}</Label>
          }
          {propose && !answer &&
            <section className={mergeClasses(globalClasses.autoMargin, classes.hintLabel)}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(t('gameConsole.dialog.greeting'))
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(t('gameConsole.dialog.intro'))
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(t('gameConsole.dialog.question'))
                    .pauseFor(2500)
                    .callFunction(() => {
                      setAnswer(true)
                      setHintMessage(t('gameConsole.dialog.action') ?? '')
                    })
                    .start();
                }}
              />
            </section>
          }
          {propose && answer &&
              <Label className={mergeClasses(globalClasses.autoMargin, classes.hintLabel)}>{hintMessage}</Label>
          }
          <section className={classes.charactersContainer}>
            <img key={'mario'} className={classes.mario} src={mario} style={{ left: `${xPosition}px` }} />
            <img key={'princess'} className={classes.princessPeach} src={princessPeach} />
          </section>
          <section className={classes.groundContainer}>
            {Array.from(Array(14).keys()).map((_, i) =>
              <img key={`ground${i}`} className={classes.groundImage} src={ground} />
            )}
          </section>
        </div>
      </Card>
      <div className={classes.buttons}>
        <section className={classes.navigationContainer}>
          <Button
            className={classes.up}
            shape='circular'
            icon={<ChevronUpFilled />}
          />
          <Button
            className={classes.left}
            shape='circular'
            icon={<ChevronLeftFilled />}
            onClick={() => { setMoveLeft(true) }}
          />
          <Button
            className={classes.right}
            shape='circular'
            icon={<ChevronRightFilled />}
            onClick={() => { setMoveRight(true) }}
          />
          <Button
            className={classes.down}
            shape='circular'
            icon={<ChevronDownFilled />}
          />
        </section>
        <section className={classes.actionContainer}>
          <Button
            className={classes.aButton}
            shape='circular'
            icon={<RecordStopFilled />}
          />
          <Button
            className={classes.bButton}
            shape='circular'
            icon={<DismissCircleFilled />}
            onClick={() => setXAction(true)}
          />
        </section>
      </div>
    </Card>
  );
};
