import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>Skills : {allCourse.length}</h2>
            <div className="row-cols-2 row-cols-lg-2">
                <div>
                    <Row xs={2} md={2}>
                        <Col>
                            {
                                allCourse.map(course => <CourseSummaryCard
                                    key={course._id}
                                    course={course}
                                ></CourseSummaryCard>)
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;