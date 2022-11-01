import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const {
    _onClick,
    _onChange,
    _onClose,
    disabled,
    children,
    margin,
    width,
    height,
    padding,
    bg,
    color,
    radius,
    shadow,
    size,
    cursor,
    border,
    bold,
    borderBottom,
    display,
    position,
    bottom,
    z_index,
    top,
    feedback,
    backdrop,
    type,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    color: color,
    radius: radius,
    shadow: shadow,
    size: size,
    cursor: cursor,
    border: border,
    bold: bold,
    borderBottom: borderBottom,
    display: display,
    position: position,
    bottom: bottom,
    z_index: z_index,
    top: top,
    feedback: feedback,
    backdrop: backdrop,
    type: type,
  };

  return (
    <ElButton
      {...styles}
      onClick={_onClick}
      onChange={_onChange}
      onClose={_onClose}
      disabled={disabled}
    >
      {children}
    </ElButton>
  );
};

Button.defaultProps = {
  shape: '',
  children: null,
  _onClick: () => {},
  _onChange: () => {},
  _onClose: () => {},
  disabled: false,
  margin: false,
  width: '100%',
  height: '100%',
  size: '',
  padding: false,
  bg: '',
  color: '',
  radius: '',
  shadow: false,
  cursor: '',
  border: '',
  bold: '',
  borderBottom: '',
  is_float: false,
  top: '',
  feedback: false,
  backdrop: '',
  type: '',
};

const ElButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  ${props => (props.size ? `font-size: ${props.size};` : '')}
  ${props => (props.bg ? `background-color: ${props.bg};` : '')}
  ${props => (props.color ? `color: ${props.color};` : '')}
  box-sizing: border-box;
  ${props => (props.radius ? `border-radius: ${props.radius};` : '')}
  ${props => (props.padding ? `padding: ${props.padding};` : '')}
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
  ${props => (props.shadow ? `box-shadow: 0.5rem 0.5rem 0.5rem #dcdde1;` : '')}
  ${props => (props.cursor ? `cursor: pointer;` : '')};
  ${props => (props.border ? `border: ${props.border};` : '')}
  ${props => (props.bold ? `font-weight: ${props.bold};` : '')}
  ${props => (props.display ? `display: ${props.display};` : '')}
  ${props => (props.position ? `position: ${props.position};` : '')}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : '')}
  ${props => (props.z_index ? `z-index: ${props.z_index};` : '')}
  ${props =>
    props.feedback
      ? `display: flex; justify-content: center; align-items: center;`
      : ''}
  ${props => (props.top ? `top: ${props.top};` : '')}
  ${props => (props.backdrop ? `backdrop-filter: ${props.backdrop};` : '')}
  ${props => (props.type ? `type: ${props.type};` : '')}
  ${props =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ''}
`;

export default Button;
