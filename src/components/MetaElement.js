import { Helmet } from 'react-helmet-async'

const MetaElement = (props) => {
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
            <title>{`${title}${separator}${subtitle}`}</title>
            {tag}
        </Helmet>
    )
}

export default MetaElement
