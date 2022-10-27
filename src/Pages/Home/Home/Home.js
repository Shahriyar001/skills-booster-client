import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';
import './Home.css'

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>Skills : {allCourse.length}</h2>
            <div className="row-cols-2 row-cols-lg-2">
                <div className='topic-container'>
                    {
                        allCourse.map(course => <CourseSummaryCard
                            key={course._id}
                            course={course}
                        ></CourseSummaryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;