import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CustomSelect from "../components/components-overview/CustomSelect";
import { Button, ButtonGroup } from "shards-react";

const Applications = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Job Search #1"
        subtitle="Current Applications"
        className="text-sm-left"
      />
    </Row>
    <CustomSelect />
    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4 mt-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Job Applications</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Company
                  </th>
                  <th scope="col" className="border-0">
                    Title
                  </th>
                  <th scope="col" className="border-0">
                    State
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Application
                  </th>

                  <th scope="col" className="border-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Google</td>
                  <td>Software Engineer</td>
                  <td>California</td>
                  <td>San Francisco</td>
                  <td>
                    <a href="google.com">Google</a>
                  </td>
                  <td>
                    <Button size="sm" theme="success" className="mb-2 mr-1">
                      Applied
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Airbnb</td>
                  <td>Lead Frontend Developer</td>
                  <td>California</td>
                  <td>Santa Clara</td>
                  <td>
                    <a href="airbnb.com">Airbnb</a>
                  </td>
                  <td>
                    <Button size="sm" theme="danger" className="mb-2 mr-1">
                      Not Applied
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Facebook</td>
                  <td>Platform Operations Specialist</td>
                  <td>California</td>
                  <td>Mountainview</td>
                  <td>
                    <a href="Facebook.com">Facebook</a>
                  </td>
                  <td>
                    <Button size="sm" theme="warning" className="mb-2 mr-1">
                      Issues
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Doordash</td>
                  <td>Marketing Content Specialist</td>
                  <td>California</td>
                  <td>Berkeley</td>
                  <td>
                    <a href="Doordash.com">Doordash</a>
                  </td>
                  <td>
                    <Button size="sm" theme="success" className="mb-2 mr-1">
                      Applied
                    </Button>
                  </td>
                  <td>
                    <div className="blog-comments__actions ">
                      <ButtonGroup size="sm">
                        <Button theme="white">
                          <span className="text-success">
                            <i className="material-icons">check</i>
                          </span>{" "}
                          Approve
                        </Button>
                        <Button theme="white">
                          <span className="text-danger">
                            <i className="material-icons">clear</i>
                          </span>{" "}
                          Reject
                        </Button>
                        <Button theme="white">
                          <span className="text-light">
                            <i className="material-icons">more_vert</i>
                          </span>{" "}
                          Edit
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Yahoo</td>
                  <td>Infrastructure Support</td>
                  <td>California</td>
                  <td>Cupertino</td>
                  <td>
                    <a href="yahoo.com">Yahoo</a>
                  </td>
                  <td>
                    <Button size="sm" theme="success" className="mb-2 mr-1">
                      Applied
                    </Button>
                  </td>
                  <td>
                    <div className="blog-comments__actions ">
                      <ButtonGroup size="sm">
                        <Button theme="white">
                          <span className="text-success">
                            <i className="material-icons">check</i>
                          </span>{" "}
                          Approve
                        </Button>
                        <Button theme="white">
                          <span className="text-danger">
                            <i className="material-icons">clear</i>
                          </span>{" "}
                          Reject
                        </Button>
                        <Button theme="white">
                          <span className="text-light">
                            <i className="material-icons">more_vert</i>
                          </span>{" "}
                          Edit
                        </Button>
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Apple</td>
                  <td>Sales Development Representative</td>
                  <td>Washington</td>
                  <td>Seattle</td>
                  <td>
                    <a href="Apple">Apple</a>
                  </td>
                  <td>
                    <Button size="sm" theme="success" className="mb-2 mr-1">
                      Applied
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Nutanix</td>
                  <td>Inside Sales Representative</td>
                  <td>California</td>
                  <td>San Jose</td>
                  <td>
                    <a href="Nutanix">Nutanix</a>
                  </td>
                  <td>
                    <Button size="sm" theme="warning" className="mb-2 mr-1">
                      Issues
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Github</td>
                  <td>Senior Software Engineer</td>
                  <td>California</td>
                  <td>San Francisco</td>
                  <td>
                    <a href="Github.com">Github</a>
                  </td>
                  <td>
                    <Button size="sm" theme="success" className="mb-2 mr-1">
                      Applied
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Microsoft</td>
                  <td>Systems Engineering Lead</td>
                  <td>Oregon</td>
                  <td>Portland</td>
                  <td>
                    <a href="microsoft.com">Microsoft</a>
                  </td>
                  <td>
                    <Button size="sm" theme="success" className="mb-2 mr-1">
                      Applied
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Uber</td>
                  <td>Software Engineer</td>
                  <td>California</td>
                  <td>San Francisco</td>
                  <td>
                    <a href="Uber.com">Uber</a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Netflix</td>
                  <td>Software Engineer</td>
                  <td>California</td>
                  <td>Los Gatos</td>
                  <td>
                    <a href="netflix.com">Netflix</a>
                  </td>
                  <td>
                    <Button size="sm" theme="warning" className="mb-2 mr-1">
                      Issues
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
  </Container>
);

export default Applications;
