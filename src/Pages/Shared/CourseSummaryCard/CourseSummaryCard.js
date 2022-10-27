import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { FaStar, FaUserGraduate, IconName } from "react-icons/fa";

const CourseSummaryCard = ({ course }) => {
    const { _id, title, author, details, rating, image_url, total_view } = course;
    console.log(course);
    return (
        <div className='row-cols-1 row-cols-md-2'>
            <div className='d-flex w-350px mb-2' >
                <Row xs={1} md={2}>
                    <Col className="">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image_url} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {
                                        details.length > 150 ?
                                            <p>{details.slice(0, 150) + '...'} <Link to={`/course/${_id}`}>Premium User</Link> </p>
                                            :
                                            <p>{details}</p>
                                    }
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <div>
                                    <FaStar className='text-warning me-2'></FaStar>
                                    <span>{rating?.number}</span>

                                </div>
                                <div>
                                    <FaUserGraduate className='me-2'></FaUserGraduate>
                                    <span>{total_view}</span>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CourseSummaryCard;