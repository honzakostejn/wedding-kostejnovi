import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { PrimaryColor } from "../../constants";

export const useStyles = makeStyles({
  consoleBody: {
    ...shorthands.margin('none', 'auto'),
    boxShadow: tokens.shadow16,
    height: "400px",
    width: '350px',
  },
  display: {
    ...shorthands.margin('none'),
    ...shorthands.padding('none'),
    boxShadow: tokens.shadow2,
    backgroundColor: PrimaryColor,
    maxHeight: "240px",
    width: '100%',
  },
  scene: {
    display: 'flex',
    flexDirection: 'column',
  },
  hintLabel: {
    maxWidth: '270px',
    fontSize: tokens.fontSizeBase100,
    color: 'black',
  },
  charactersContainer: {
    ...shorthands.margin('auto', 'none', tokens.spacingVerticalNone),
    display: 'flex',
  },
  mario: {
    ...shorthands.margin('auto', 'auto', tokens.spacingVerticalNone, tokens.spacingHorizontalS),
    height: '96px',
    width: 'auto',
    position: 'absolute',
  },
  princessPeach: {
    ...shorthands.margin('auto', tokens.spacingHorizontalS, tokens.spacingVerticalNone, 'auto'),
    height: '96px',
    width: 'auto',
  },
  groundContainer: {
    display: 'flex'
  },
  groundImage: {
    height: '24px',
    width: 'auto',
  },
  buttons: {
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