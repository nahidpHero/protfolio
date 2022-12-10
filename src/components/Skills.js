import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="radial-progress" style={{ "--value": 70 }}>
          70%
        </div>
        <div className="radial-progress" style={{ "--value": 70 }}>
          70%
        </div>
        <div className="radial-progress" style={{ "--value": 70 }}>
          70%
        </div>
        <div className="radial-progress" style={{ "--value": 70 }}>
          70%
        </div>
        <div className="radial-progress" style={{ "--value": 70 }}>
          70%
        </div>
      </div>
    </div>
    );
};

export default Skills;