import React from 'react';
import { Grid, Row, Col, Cell } from './Grids.styles';

const Grids = () => {
  return (
    <>
      <Grid>
        <Col> 1 </Col>
        <Col> 2 </Col>
        <Col> 3 </Col>
        <Col> 4 </Col>
      </Grid>

      <Grid>
        <Row>
          <Cell>cell 1</Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Grids;
