import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  card: {
    ...shorthands.overflow('auto'),
    minHeight: "100vh",
    minWidth: "100%"
  },
  container: {
    ...shorthands.margin('auto'),
    ...shorthands.gap(tokens.spacingVerticalM),
    display: 'flex',
    flexDirection: 'column',
  },
});