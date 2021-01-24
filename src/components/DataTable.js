import { Table, TableCaption, Tbody, Thead } from '@chakra-ui/table'
import styled from '@emotion/styled'

const TableWithEmotion = styled(Table)`
    border: solid #ddd 2px;
    border-collapse: separate;
    border-radius: 7.5px;
    border-spacing: 0px;
    -moz-border-radius:6px;
`

const DataTable = ({
    tableStyles,
    headStyles,
    headItem,
    bodyStyles,
    bodyItem,
    showCaption = false,
    captionStyles,
    caption
}) => {
    return (
        <TableWithEmotion
            variant='unstyled'
            {...tableStyles}
        >
            {showCaption && (
                <TableCaption {...captionStyles}>
                    {caption}
                </TableCaption>
            )}
            <Thead {...headStyles}>
                {headItem}
            </Thead>
            <Tbody {...bodyStyles}>
                {bodyItem}
            </Tbody>
        </TableWithEmotion>
    )
}

export default DataTable
