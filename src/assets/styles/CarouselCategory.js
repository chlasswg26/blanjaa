const horizontalStackStyles = {
    h: '100',
    minW: 'md',
    bg: '#EDF0F3',
    overflow: 'auto',
    p: '50px'
}
const textFirstStyles = {
    fontStyle: 'normal',
    fontWeight: '1000',
    fontSize: '30px',
    pr: '80px',
    pl: '35px'
}
const textSecondStyles = {
    fontStyle: 'normal',
    fontWeight: '400',
    textColor: '#A0AEC0',
    fontSize: '20px',
    pr: '80px',
    pl: '35px'
}
const iconButtonFirstStyles = {
    mt: '40px',
    ml: '46.5px',
    rounded: '30px',
    boxShadow: 'lg',
    size: 'lg',
    bg: 'white',
    color: '#A0AEC0',
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
    top: '40px',
    rounded: '30px',
    boxShadow: 'lg',
    size: 'lg',
    bg: 'white',
    color: '#A0AEC0',
    _active: {
        bg: 'transparent',
        color: '#DB3022',
        borderColor: '#DB3022'
    },
    _focus: {
        boxShadow: false
    }
}
const buttonFirstStyles = {
    size: 'xs',
    rounded: '20px',
    disabled: true,
    _hover: {
        bg: '#DB3022'
    },
    _focus: {
        boxShadow: false
    },
    bg: '#DB3022'
}

export {
    horizontalStackStyles,
    textFirstStyles,
    textSecondStyles,
    iconButtonFirstStyles,
    iconButtonSecondStyles,
    buttonFirstStyles
}
