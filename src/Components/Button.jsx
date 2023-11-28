import React from 'react';

const Button = ({
    IconAfterStyle,
    disabled,
    IconBefore,
    IconAfter,
    type = 'button',
    text,
    ContainerStyle,
    IconBeforeStyle,
    onClick,
    renderChildren,
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`${ContainerStyle} container flex items-center justify-center w-full h-10 rounded`}
            onClick={onClick}
        >
            <div
                role='button'
                className=' w-full h-full flex items-center justify-center gap-2'
            >
                {IconBefore && <IconBefore className={`${IconBeforeStyle}`} />}
                <p>{text}</p>
                {renderChildren}
                {IconAfter && <IconAfter className={`${IconAfterStyle}`} />}
            </div>
        </button>
    );
};

export default Button;
