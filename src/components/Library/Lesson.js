import React from 'react';
import Window from '../../lesson.png';

const Lesson = ({item}) => (
  <div className="lesson-item">
    <a href={item.url}>
        <div className="lesson-image" style={{backgroundImage:`url(${item.image})`}}>
            <img src={Window} alt={item.title}/>
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