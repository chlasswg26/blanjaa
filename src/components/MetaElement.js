import { Helmet } from 'react-helmet-async'

const MetaElement = props => {
    const {
        title,
        subtitle,
        separator,
        tag
    } = props

    return (
        <Helmet
            encodeSpecialCharacters={true}
            defaultTitle='Title'
        >
            <link
                id='favicon'
                rel='icon'
                href='/icons8-shop-64.png'
                type='image/x-icon'
                sizes='16x16'
            />
            <title>
                {`${title}${subtitle ? `${separator}${subtitle}` : ''}`}
            </title>
            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
            />
            <link
                href='https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Oswald:wght@500&display=swap'
                rel='stylesheet'
            />
            {tag}
        </Helmet>
    )
}

export default MetaElement
