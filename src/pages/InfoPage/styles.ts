import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { PrimaryColor } from '../../constants';

export const useStyles = makeStyles({
  background: {
    ...shorthands.overflow('auto'),
    minHeight: "100vh",
    minWidth: "100%"
  },
  flexContainer: {
    ...shorthands.gap(tokens.spacingVerticalM),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'start',
    alignContent: 'start'
  },
  flexContainerColumn: {
    ...shorthands.gap(tokens.spacingVerticalM),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  section: {
    ...shorthands.margin('auto'),
    ...shorthands.gap(tokens.spacingVerticalM),
    display: 'flex',
    flexDirection: 'column',
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
    minHeight: '410px',
    backgroundColor: PrimaryColor,
    width: 'auto'
  },
  label: {
    ...shorthands.margin('2px', 'none'),
    textAlign: 'left',
    lineHeight: '2',
    fontSize: tokens.fontSizeBase100,
    paddingLeft: '2px',
  },
  text: {
    ...shorthands.margin('auto', 'none'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100,
  },
  details: {
    ...shorthands.gap(tokens.spacingVerticalL),
    display: 'flex',
    flexDirection: 'column'
  },
  cardFooter: {
    flexDirection: 'column'
  },
  responseMessageContainer: {
    ...shorthands.gap(tokens.spacingVerticalXXXL),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});