import React from 'react';

const Lesson = ({item}) => (
  <div className="lesson-item">
    <a href={item.url}>
        <div className="lesson-image">
            <img src={item.image} alt={item.title}/>
            <span className="duration-roundel">{item.duration} mins</span>
        </div>
        <div className="lesson-info">
            <h2 className="lesson-title">{item.title}</h2>
            <p>{item.description}</p>
            <span className="lesson-more">More...</span>
        </div>
    </a>
  </div>
);

export default Lesson;