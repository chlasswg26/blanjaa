const buttonFirstStyles = {
    h: '28.8px',
    size: 'sm',
    bg: 'transparent',
    _focus: {
        boxShadow: false
    }
}
const buttonSecondStyles = {
    type: 'submit',
    variant: 'outline',
    bg: '#DB3022',
    color: 'white',
    marginTop: '32px',
    borderWidth: '1px',
    borderRadius: '32px',
    borderColor: '#DB3022',
    minW: '624px',
    size: 'md',
    _hover: {
        color: '#DB3022',
        bg: 'white'
    },
    _focus: {
        boxShadow: false
    }
}

const circularProgress = {
    isIndeterminate: true,
    color: 'orange.500',
    thickness: '3.2px',
    size: '27.2px'
}

export {
    buttonFirstStyles,
    buttonSecondStyles,
    circularProgress
}
