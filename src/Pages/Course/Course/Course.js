import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = () => {
    const course = useLoaderData();
    const { title, details, image_url, category_id } = course;
    return (
        <Card style={{ width: '' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All Courses in this category</Button>
                </Link>

            </Card.Body>
        </Card>
    );
};

export default Course;