import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({
    separator,
    pack,
    style
}) => {
    return (
        <Breadcrumb
            spacing='5px'
            separator={separator}
            {...style}
        >
            { pack.map((value, indexValue) => (
                <BreadcrumbItem
                    key={indexValue}
                    isCurrentPage={value?.current}
                >
                    <BreadcrumbLink
                        as={Link}
                        href={value.link}
                    >
                        {value.item}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )) }
        </Breadcrumb>
    )
}

export default Breadcrumbs
