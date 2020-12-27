const horizontalStackStyles = {
    h: '112px',
    minW: 'md',
    boxShadow: 'lg',
    overflow: 'auto'
}
const inputStyles = {
    focusBorderColor: '#DB3022',
    w: '560px',
    rounded: '32px',
    borderColor: '#A0AEC0'
}
const iconButtonFirstStyles = {
    variant: 'none',
    h: '28.8px',
    size: 'sm',
    rounded: '32px',
    bgColor: 'transparent',
    color: '#A0AEC0',
    _hover: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _active: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _focus: {
        boxShadow: false
    }
}
const iconButtonSecondStyles = {
    variant: 'outline',
    bgColor: 'transparent',
    color: '#A0AEC0',
    borderColor: '#A0AEC0',
    ml: '16px',
    rounded: '12.8px',
    _hover: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _active: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _focus: {
        boxShadow: false
    }
}
const iconButtonThirdStyles = {
    variant: 'none',
    bgColor: 'transparent',
    color: '#A0AEC0',
    left: '144px',
    rounded: '12.8px',
    _hover: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _active: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _focus: {
        boxShadow: false
    }
}
const stackStyles = {
    direction: 'row',
    spacing: 7,
    ml: '40px'
}

export {
    horizontalStackStyles,
    inputStyles,
    iconButtonFirstStyles,
    iconButtonSecondStyles,
    iconButtonThirdStyles,
    stackStyles
}
