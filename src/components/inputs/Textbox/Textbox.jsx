import React from 'react';
import PropTypes from 'prop-types';
import webexComponentClasses from '../../helpers';
import Label from '../Label/Label';
import {uniqueId} from '../../../util';

/**
 * Textbox component
 *
 * @param {object} props  Data passed to the component
 * @param {string} [props.ariaLabel]  Aria-label for textbox
 * @param {string} [props.className]  Custom CSS class to apply
 * @param {boolean} [props.disabled=false]  Flag indicating whether textbox is disabled
 * @param {string} [props.error]  Error text
 * @param {string} [props.id]  DOM id
 * @param {string} [props.label]  Label text
 * @param {number} [props.maxLength] Maximum number of characters allowed
 * @param {string} props.name  Textbox name
 * @param {Function} [props.onChange]  Action to perform on textbox change
 * @param {string} [props.placeholder]  Textbox placeholder
 * @param {boolean} [props.required=false]  Flag indicating whether textbox is required
 * @param {object} [props.style]   Inline style for the component
 * @param {string} [props.value] Textbox value
 * @returns {object}  JSX of the element
 */
export default function Textbox({
  ariaLabel,
  className,
  disabled,
  error,
  id: domId,
  label,
  maxLength,
  name,
  onChange,
  placeholder = name,
  required,
  style,
  value,
}) {
  const [cssClasses, sc] = webexComponentClasses('textbox', className);
  const id = domId || uniqueId();

  return (
    <Label
      className={cssClasses}
      error={error}
      id={id}
      label={label}
      required={required}
      style={style}
    >
      <textarea
        aria-label={ariaLabel}
        aria-labelledby={`${id}-label`}
        className={sc('control')}
        disabled={disabled}
        id={`${id}-control`}
        maxLength={maxLength}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        value={value}
      />
    </Label>
  );
}

Textbox.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  style: PropTypes.shape(),
  value: PropTypes.string,
};

Textbox.defaultProps = {
  ariaLabel: '',
  className: undefined,
  disabled: false,
  error: null,
  id: undefined,
  label: undefined,
  maxLength: undefined,
  name: undefined,
  onChange: null,
  placeholder: undefined,
  required: false,
  style: undefined,
  value: undefined,
};
