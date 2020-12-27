const containerStyles = {
    minH: '640px',
    spacing: '48px',
    direction: 'column',
    align: 'center',
    marginTop: '80px'
}
const textFirstStyles = {
    fontWeight: 'bold',
    fontSize: ['sm', 'md', 'lg', 'xl'],
    marginTop: '32px'
}
const tabWrapStyles = {
    variant: 'unstyled',
    marginTop: '48px',
    borderWidth: '1px',
    borderRadius: '3px',
    align: 'center',
    maxW: '640px',
    borderColor: 'transparent',
    isLazy: true
}
const tabStyles = {
    textColor: '#9B9B9B',
    _selected: {
        color: 'white',
        bg: '#DB3022'
    },
    boxShadow: 'md',
    borderWidth: '1px',
    borderRadius: '2.5px',
    borderColor: 'gray.300'
}

export {
    containerStyles,
    textFirstStyles,
    tabWrapStyles,
    tabStyles
}
