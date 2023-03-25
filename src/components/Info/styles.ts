import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { PrimaryColor } from '../../constants';

export const useStyles = makeStyles({
  background: {
    ...shorthands.overflow('auto'),
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
    backgroundColor: PrimaryColor,
    height: 'auto'
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
    ...shorthands.gap(tokens.spacingVerticalL),
    display: 'flex',
    flexDirection: 'column'
  },
  cardFooter: {
    flexDirection: 'column'
  }
});