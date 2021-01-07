import randomColor from 'randomcolor'

const color = randomColor({
    luminosity: 'dark',
    hue: 'random'
})

const CenterBoxStyles = {
    bg: color,
    w: '180px',
    h: '200px',
    textColor: 'white',
    fontStyle: 'oblique',
    fontWeight: 'bold',
    rounded: '10px',
    p: '10px'
}

export {
    CenterBoxStyles
}
