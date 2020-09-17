import React from 'react';
import { Grid, Row, Col, Cell, Blue, Purple } from './Test.styles';

const Test = () => {
  return (
    <>
      <h3>&lt;Grid cols=&quot;12&quot; gap=&quot;25&quot;&gt; &lt;Col&gt; ... &lt;/Col&gt; &lt;/Grid&gt;</h3>
      <Grid cols="12" gap="25px">

        <Col xxl="12" md="6"><Blue>Col 12</Blue></Col>



      </Grid>

    </>
  );
};

export default Test;
