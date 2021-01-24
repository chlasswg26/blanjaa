import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { chakra } from '@chakra-ui/react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { useSortBy, useTable } from 'react-table'

const DataTableWithHook = ({
    data,
    columns
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data }, useSortBy)

    return (
        <Table
            {...getTableProps()}
            w='100%'
        >
            <Thead>
                {headerGroups.map(headerGroup => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <Th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                                isNumeric={column.isNumeric}
                            >
                                {column.render(('Header'))}
                                <chakra.span pl='4'>
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <TriangleDownIcon aria-label='sorted descending' />
                                        ) : (
                                                <TriangleUpIcon aria-label='sorted ascending' />
                                            )
                                    ) : null}
                                </chakra.span>
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)

                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <Td
                                    {...cell.getCellProps()}
                                    isNumeric={cell.column.isNumeric}
                                >
                                    {cell.render('Cell')}
                                </Td>
                            ))}
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}

export default DataTableWithHook
