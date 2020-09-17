import React from 'react';
import { Grid, Row, Col, Cell } from 'react-styled-grid-layout';

const Grids = () => {
  return (
    <>
      <Grid cols="4">
        <Col> 1 </Col>
        <Col> 2 </Col>
        <Col> 3 </Col>
        <Col> 4 </Col>
      </Grid>

      <Grid>
        <Row>
          <Cell> 1 </Cell>
          <Cell> 2 </Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Grids;
