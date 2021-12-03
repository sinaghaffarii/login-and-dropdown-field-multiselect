import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";

const Dropdown = () => {

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center mx-auto mt-5">
        <Col lg={6} >
          <Card>
            <Card.Body>
              <Multiselect
                isObject={false}
                onKeyPressFn={function noRefCheck() {}}
                onRemove={function noRefCheck() {}}
                emptyRecordMsg="هیچ موردی یافت نشد"
                keepSearchTerm={false}
                onSelect={function noRefCheck() {}}
                options={[
                  "شنبه",
                  "یکشنبه",
                  "دوشنبه",
                  "سه شنبه",
                  "چهارشنبه",
                  "پنج شنبه",
                  "جمعه"
                ]}
                placeholder="چه روزهایی"
                avoidHighlightFirstOption={true}
                showArrow
                showCheckbox
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dropdown;
