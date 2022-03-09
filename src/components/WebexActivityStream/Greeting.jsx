import React from 'react';
import PropTypes from 'prop-types';

import webexComponentClasses from '../helpers';

/**
 * Greeting displayed on a new/empty room.
 *
 * @param {object} props  Data passed to the component
 * @param {string} props.className  Custom CSS class to apply
 * @param {object} props.style  Custom style to apply
 * @returns {object} JSX of the component
 */
export default function Greeting({className, style}) {
  const [cssClasses, sc] = webexComponentClasses('greeting', className);

  return (
    <div className={cssClasses} style={style}>
      <div className={sc('header')}>
        <div className={sc('title')}>
          Let’s start chatting
          {' '}
          <span role="img" aria-label="Wave">👋</span>
        </div>
        <div className={sc('description')}>Add or invite more people to get things done together.</div>
        <div className={sc('description')}>When you’re ready, start with a message</div>
      </div>
    </div>
  );
}

Greeting.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape(),
};

Greeting.defaultProps = {
  className: '',
  style: undefined,
};
