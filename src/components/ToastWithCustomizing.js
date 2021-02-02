import { createStandaloneToast } from '@chakra-ui/react'

const ToastWithCustomizing = ({
    title,
    description,
    status
}) => {
    const toast = createStandaloneToast()

    return (
        toast({
            title: title,
            description: description,
            status: status,
            duration: null,
            isClosable: true,
        })
    )
}

export default ToastWithCustomizing
