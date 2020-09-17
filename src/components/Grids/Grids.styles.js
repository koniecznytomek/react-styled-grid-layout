import styled from 'styled-components';

export const Grid = styled.div(
  ({ rows, cols, gap }) => `
  display: grid;
  grid-template-rows: ${rows || 'auto'};
  grid-template-columns: repeat(${cols || '12'}, 1fr);
  grid-gap: ${gap};
`
);

export const Row = styled.div(
  ({ height }) => `
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  min-height: ${height || 'auto'};
`
);

export const Cell = styled.div(
  ({ align, justify, index, width }) => `
  grid-row: 1;
  grid-column: 1 / -1;
  align-self: ${align || 'start'};
  justify-self: ${justify || 'start'};
  z-index: ${index || '1'};
  max-width: ${width || 'auto'};
`
);

export const Col = styled.div(
  ({ xxl, xl, lg, md, sm, xs, row, from, to, width, height, align, justify, text }) => `
   
    ${xxl && media.xxl(`grid-column-end: span ${xxl};`)};
    ${xl && media.xl(`grid-column-end: span ${xl};`)};
    ${lg && media.lg(`grid-column-end: span ${lg};`)};
    ${md && media.md(`grid-column-end: span ${md};`)};
    ${sm && media.sm(`grid-column-end: span ${sm};`)};
    ${xs && media.xs(`grid-column-end: span ${xs};`)};
    
    ${row && `grid-row: ${row}`};
    
    ${from | to && `grid-column: ${from || 1} / ${to || -1};`};
    
    min-height: ${height || 'auto'};
    ${width && `max-width: ${width || '100%'};`};
    
    ${align && `align-self: ${align || 'start'};`};
    ${justify && `justify-self: ${justify || 'start'};`};
    
    ${text && `text-align: ${text || 'left'};`};   
`
);

export const mq = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
};

export const media = {
  xs: (...a) => `
    @media (max-width: ${mq.xs}) {
     ${a}
    }
  `,
  sm: (...a) => `
    @media (max-width: ${mq.sm}) {
     ${a}
    }
  `,
  md: (...a) => `
    @media (max-width: ${mq.md}) {
     ${a}
    }
  `,
  lg: (...a) => `
    @media (max-width: ${mq.lg}) {
     ${a}
    }
  `,
  xl: (...a) => `
    @media (max-width: ${mq.xl}) {
     ${a}
    }
  `,
  xxl: (...a) => `
    @media (max-width: ${mq.xxl}) {
     ${a}
    }
  `,
};
