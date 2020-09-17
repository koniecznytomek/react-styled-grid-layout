import React from 'react';
import { Grid, Row, Col, Cell, Blue, Purple } from './Sample.styles';

const Sample = () => {
  return (
    <>
      <h3>&lt;Grid cols=&quot;12&quot; gap=&quot;25&quot;&gt; &lt;Col&gt; ... &lt;/Col&gt; &lt;/Grid&gt;</h3>
      <Grid cols="12" gap="25px">
        <Col xxl="12"><Blue>Col <br/>xxl=&quot;12&quot;</Blue></Col>

        <Col xxl="6"><Blue>Col <br/>xxl=&quot;2&quot;</Blue></Col>
        <Col xxl="6"><Blue>Col <br/>xxl=&quot;2&quot;</Blue></Col>
        <Col xxl="6"><Blue>Col <br/>xxl=&quot;2&quot;</Blue></Col>
        <Col xxl="6" text="center"><Blue>Col <br/>xxl=&quot;2&quot; <br/>text=&quot;center&quot;</Blue></Col>

        <Col xxl="3" md="6" sm="12"><Blue>Col <br/>xxl=&quot;3&quot; <br/>md=&quot;6&quot; <br/>sm=&quot;12&quot;</Blue></Col>
        <Col xxl="3" md="6" sm="12"><Blue>Col <br/>xxl=&quot;3&quot; <br/>md=&quot;6&quot; <br/>sm=&quot;12&quot;</Blue></Col>
        <Col xxl="3" md="6" sm="12"><Blue>Col <br/>xxl=&quot;3&quot; <br/>md=&quot;6&quot; <br/>sm=&quot;12&quot;</Blue></Col>
        <Col xxl="3" md="6" sm="12"><Blue>Col <br/>xxl=&quot;3&quot; <br/>md=&quot;6&quot; <br/>sm=&quot;12&quot;</Blue></Col>

      </Grid>
      <h3>&lt;Grid&gt; &lt;Row&gt; &lt;Cell&gt; ... &lt;/Cell&gt; &lt;/Row&gt; &lt;/Grid&gt;</h3>
      <Grid>
        <Row height="50vh">
          <Cell align="center" justify="center"><Purple>Cell <br/>align=&quot;center&quot; <br/>justify=&quot;center&quot;</Purple></Cell>
          <Cell align="center"><Blue>Cell align=&quot;center&quot;</Blue></Cell>
          <Cell align="end" index="2"><Blue>Cell align=&quot;end&quot; index=&quot;2&quot;</Blue></Cell>
          <Cell index="3"><Blue>Cell default</Blue></Cell>
          <Cell justify="center"><Blue>Cell <br/>justify=&quot;center&quot;</Blue></Cell>
          <Cell align="end" justify="center"><Blue>Cell <br/>align=&quot;end&quot; justify=&quot;center&quot; </Blue></Cell>
          <Cell align="end" justify="end"><Blue>Cell <br/>align=&quot;end&quot; justify=&quot;end&quot; </Blue></Cell>
          <Cell align="center" justify="end"><Blue>Cell <br/>align=&quot;center&quot; justify=&quot;end&quot; </Blue></Cell>
          <Cell justify="end"><Blue>Cell justify=&quot;end&quot; </Blue></Cell>
        </Row>
      </Grid>
    </>
  );
};

export default Sample;
