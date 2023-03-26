import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useGlobalStyles = makeStyles({
  autoMargin: {
    ...shorthands.margin('auto'),
  },
  noVerticalMargin: {
    ...shorthands.margin('none', 'auto'),
  },
  page: {
    ...shorthands.overflow('auto'),
    minHeight: "100vh",
    minWidth: "100%",
  },
  pageLabel: {
    ...shorthands.margin('auto'),
    marginTop: "10vh",
    textAlign: 'center',
    fontSize: tokens.fontSizeBase500,
    maxHeight: '300px',
    lineHeight: '2',
  },
  primaryButton: {
    fontSize: tokens.fontSizeBase100,
    color: 'black',
    minWidth: '300px'
  },
  secondaryButton: {
    fontSize: tokens.fontSizeBase100,
    minWidth: '300px'
  },
  card: {
    boxShadow: tokens.shadow16,
  },
});