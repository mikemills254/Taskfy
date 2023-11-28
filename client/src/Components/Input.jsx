import React from 'react';

const Input = ({
    onFocus,
    name,
    onBlur,
    onIconAfterClicked,
    maxLength,
    type,
    ContainerStyles,
    placeholder,
    value,
    onChange,
    required,
    InputStyles,
    IconBefore,
    IconStyleBefore,
    IconStyleAfter,
    IconAfter,
    disabled,
}) => {
    return (
        <div className={`${ContainerStyles} flex items-center border-[1.5px] border-[#182953] rounded h-[40px] w-[100%]`}>
            {IconBefore && <div className={`m-4 text-[#182953] hover:cursor-pointer ${IconStyleBefore}`}>{IconBefore}</div>}
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                type={type}
                maxLength={maxLength}
                onFocus={onFocus}
                name={name}
                onBlur={onBlur}
                disabled={disabled}
                className={`${InputStyles} w-[100%] h-[100%] rounded focus:outline-none bg-[#eff7ff] text-[14px]`}
            />
            {IconAfter && (
                <div onClick={onIconAfterClicked} className={`m-4 hover:cursor-pointer text-[#182953] ${IconStyleAfter}`}>
                {IconAfter}
                </div>
            )}
        </div>
    );
};

export default Input;
