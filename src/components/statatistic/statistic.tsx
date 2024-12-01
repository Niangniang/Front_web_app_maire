import { Col, Container, Row } from "react-bootstrap";
import "./statistic.css";

const Statistic: React.FC = () => {
  return (
    <Container fluid>
      <Row className="global-div">
        <Col className="item-div item1" style={{ background: "#09891D" }}>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "52px" }}>
            <span>150 +</span>
          </div>
          <div style={{ color: "white" }}>Toutes les demandes</div>
        </Col>
        {/* end bloc 1 */}

        <Col className="item-div item2">
          <div>
            <p
              style={{
                color: "#09891D",
                fontSize: "52px",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              27 +
              <i
                style={{
                  color: "#A7A3A2",
                  fontSize: "20px",
                  fontWeight: "400px",
                }}
              >
                /jour
              </i>
            </p>
          </div>
          <div>Demandes traitées</div>
        </Col>
        {/* end bloc 2 */}

        <Col className="item-div item3">
          <div>
            <p
              style={{
                color: "#004AC3",
                fontSize: "52px",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              7 +
              <i
                style={{
                  color: "#A7A3A2",
                  fontSize: "20px",
                  fontWeight: "400px",
                }}
              >
                /jour
              </i>
            </p>
          </div>
          <div>Demande en traitement</div>
        </Col>
        {/* end bloc 3 */}

        <Col className="item-div item4">
          <div>
            <p
              style={{
                color: "#FBB11D",
                fontSize: "52px",
                fontWeight: "bold",
                lineHeight: "1",
              }}
            >
              13 +
              <i
                style={{
                  color: "#A7A3A2",
                  fontSize: "20px",
                  fontWeight: "400px",
                }}
              >
                /jour
              </i>
            </p>
          </div>
          <div>Demandes en attentes</div>
        </Col>
        {/* end bloc 4 */}
      </Row>
    </Container>
  );
};

export default Statistic;
