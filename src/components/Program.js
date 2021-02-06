import React from 'react';
import moment from 'moment';

import age18 from '../assets/age18.png';
import age16 from '../assets/age16.png';
import age12 from '../assets/age12.png';
import age6 from '../assets/age6.png';

import './Program.css';

const Program = (props) => {
  const formatted_start_from = moment(props.data.start_from).format("HH:mm");

  function renderAgeLimitIcon() {
    if (!props.data.age_limit) {
      return null;
    } else if (props.data.age_limit === 18) {
      return <img id="age-limit-icon" src={age18} alt="18" />;
    } else if (props.data.age_limit === 16) {
      return <img id="age-limit-icon" src={age16} alt="16" />;
    } else if (props.data.age_limit === 12) {
      return <img id="age-limit-icon" src={age12} alt="12" />;
    } else if (props.data.age_limit === 6) {
      return <img id="age-limit-icon" src={age6} alt="6" />;
    } else {
      return props.data.age_limit;
    }
  }

  return (
    <div id="program-container">
      <div>
        <p className="starting-time">{formatted_start_from}</p>
      </div>
      <div>
        <h3>
          {props.data.title}
        </h3>
        <p>
          {props.data.description}
        </p>
      </div>
      <div>
        {renderAgeLimitIcon()}
      </div>
    </div>
  )
}

export default Program;
