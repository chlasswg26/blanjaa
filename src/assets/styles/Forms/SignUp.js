const containerStyles = {
    minH: '55em',
    spacing: '3em',
    direction: 'column',
    align: 'center',
    marginTop: '5em'
}
const textFirstStyles = {
    fontWeight: 'bold',
    fontSize: ['sm', 'md', 'lg', 'xl'],
    marginTop: '2rem'
}
const tabWrapStyles = {
    variant: 'unstyled',
    marginTop: '3rem',
    borderWidth: '1px',
    borderRadius: '3px',
    align: 'center',
    maxW: '40em',
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
