import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

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
            <BreadcrumbItem>
                <BreadcrumbLink
                    href='/'
                    fontWeight='500'
                    textColor='gray.500'
                    _active={{
                        boxShadow: 'none'
                    }}
                    _focus={{
                        boxShadow: 'none'
                    }}
                >
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            { pack.map((value, indexValue) => (
                <BreadcrumbItem
                    key={indexValue}
                    isCurrentPage={!value?.link ? true : false}
                >
                    <BreadcrumbLink
                        href={value.link || '#'}
                        aria-current='page'
                        textColor={!value?.link ? 'black' : 'gray.500'}
                        fontWeight='500'
                        _active={{
                            boxShadow: 'none'
                        }}
                        _focus={{
                            boxShadow: 'none'
                        }}
                    >
                        {value.item}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )) }
        </Breadcrumb>
    )
}

export default Breadcrumbs
