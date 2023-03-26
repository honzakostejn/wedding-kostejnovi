import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  card: {
    ...shorthands.margin('auto', 'none'),
    display: 'flex',
    flexDirection: 'row',
    boxShadow: tokens.shadow16,
    maxHeight: '60px',
  },
  label: {
    ...shorthands.flex('auto'),
    ...shorthands.margin('auto'),
    textAlign: 'left',
    fontSize: tokens.fontSizeBase100,
  },
  select: {
    // this didn't work
    // flexGrow: 0,
    // flexShrink: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});