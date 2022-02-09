import React, { useState, useRef, ComponentType, InputHTMLAttributes, useCallback } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

export const Input: React.FC<IProps> = ({ icon: Icon, isPassword = false, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, [])


  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={16} />}

      <input ref={inputRef} {...rest} type={showPassword ? 'text' : rest.type} onFocus={handleInputFocus} onBlur={handleInputBlur} />

      {
        isPassword && (
          showPassword ?
            <FaEyeSlash className="icon-click" size={16} color="#00E676" onClick={() => setShowPassword(!showPassword)} />
            :
            <FaEye className="icon-click" size={16} color="#00E676" onClick={() => setShowPassword(!showPassword)} />
        )
      }
    </Container>
  );
};
