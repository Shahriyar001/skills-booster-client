import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h2>This is Category has news: {categoryCourse.length}</h2>
            {
                categoryCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}

                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Category;