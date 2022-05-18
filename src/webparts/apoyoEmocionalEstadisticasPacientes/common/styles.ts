import {getTheme,mergeStyleSets,FontWeights} from 'office-ui-fabric-react';

const theme = getTheme();
//Estilos de NuevaIntervencion.tsx
export const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch',
    gap: '10px',
    marginLeft: '15px'
  },
  header: [
    // eslint-disable-next-line deprecation/deprecation
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
  search: {
    display: 'flex',
    justifyContent: 'flex-start',
    // backgroundColor: '#f7000085',
    gap: '20px'
  },
  persona: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    gap: '20px',
    border: '2px solid',
    borderColor: '#b4b4b487',
    borderRadius: '10px',
    padding: '2%'
  },
  intervencion: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    gap: '20px',
    border: '2px solid',
    borderColor: '#b4b4b487',
    borderRadius: '10px',
    padding: '2%'
  },
  persona2: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    gap: '20px',
  },
  guardar: {
    display: 'flex',
    justifyContent: 'center',
  },
  headerText: {
    marginTop: '-1%',
    marginBottom: '-0.75%',
  }
});