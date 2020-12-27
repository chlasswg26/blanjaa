import randomColor from 'randomcolor'

const color = randomColor({
    luminosity: 'dark',
    hue: 'random'
})

const CenterBoxStyles = {
    bg: color,
    w: '260px',
    h: '280px',
    textColor: 'white',
    fontStyle: 'oblique',
    fontWeight: 'bold',
    rounded: '10px'
}

export {
    CenterBoxStyles
}
