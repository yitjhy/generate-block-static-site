import { CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import Sortable, { Sort } from './Sortable'

export type TableAlign = 'left' | 'center' | 'right'

export interface TableColumn<T extends object> {
  name: string
  headStyle?: CSSProperties
  itemStyle?: CSSProperties
  key?: keyof T
  render?: (data: T, index: number, key?: keyof T) => JSX.Element | string
  flex?: number
  width?: string
  align?: TableAlign
  sortable?: boolean
  sort?: Sort
}

export default function Table<T extends object>(props: {
  data: T[]
  columns: TableColumn<T>[]
  gap?: string
  keyName?: keyof T
  loading?: boolean
  className?: string
  style?: CSSProperties
  updateColumns?: (columns: TableColumn<T>[]) => void
  onRowClick?: (data: T, index: number) => void
}) {
  return (
    <TableWrapper style={props.style} className={props.className}>
      <TableHeader className={'table-header'} gap={props.gap}>
        {props.columns.map((column) => (
          <Th
            key={column.name}
            className={'table-th'}
            style={column.headStyle}
            width={column.width}
            flex={column.flex || 1}
            clickable={column.sortable}
          >
            {column.name}{' '}
            {column.sortable && (
              <Sortable
                value={column.sort || Sort.DEFAULT}
                onChange={(sort: Sort) => {
                  const clonedColumns: typeof props.columns = JSON.parse(JSON.stringify(props.columns))
                  const target = clonedColumns.find((x) => x.name === column.name)
                  if (target) {
                    target.sort = sort
                    props.updateColumns && props.updateColumns(clonedColumns)
                  }
                }}
              />
            )}
          </Th>
        ))}
      </TableHeader>
      <TableBody className={'table-body'}>
        {props.data.map((d, index) => (
          <TableRow
            onClick={() => props.onRowClick && props.onRowClick(d, index)}
            key={props.keyName ? (d[props.keyName] as any as string) : index}
            className={'table-row'}
            gap={props.gap}
            clickable={!!props.onRowClick}
          >
            {props.columns.map((column) => {
              let renderResult = column.render
                ? column.render(d, index, column.key)
                : column.key
                ? (d[column.key] as any as string)
                : column.key
              // @ts-ignore
              if ([undefined, '', null].includes(renderResult)) {
                renderResult = '-'
              }

              return (
                <Td
                  key={column.name}
                  style={column.itemStyle}
                  className={'table-td'}
                  flex={column.flex || 1}
                  width={column.width}
                  align={column.align}
                >
                  {/*//@ts-ignore*/}
                  {renderResult}
                </Td>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  width: 100%;
  position: relative;
`
const TableHeader = styled.div<{ gap?: string }>`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 5px;
  background: #f6f6f6;
  & > :first-child {
    margin-left: 0;
  }
  & > * {
    margin-left: ${({ gap }) => gap || 0};
  }
`

const Th = styled.span<{ width?: string; flex?: number; clickable?: boolean }>`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''};
  ${({ flex, width }) =>
    !width && flex
      ? css`
          flex: ${flex};
        `
      : ''};
  font-size: 14px;
  color: #9f9f9f;
  text-align: center;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'inherit')};
`
const TableBody = styled.ul`
  width: 100%;
  position: relative;
  padding: 0;
`

const TableRow = styled.li<{ gap?: string; clickable?: boolean }>`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: ${(props) => {
    return !!props.clickable ? 'pointer' : 'inherit'
  }};
  & > :first-child {
    margin-left: 0;
  }
  & > * {
    margin-left: ${({ gap }) => gap || 0};
  }
  border-radius: 5px;
  transition: all 0.15s linear;
  &:hover {
    box-shadow: 0px 4px 10px rgba(114, 175, 120, 0.1);
  }
  border-bottom: solid 1px #e2e2e2;
`
const Td = styled.div<{ width?: string; flex?: number; align?: TableAlign }>`
  height: 100%;
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ''};
  ${({ flex, width }) =>
    !width && flex
      ? css`
          flex: ${flex};
        `
      : ''};
  font-size: 14px;
  color: #737373;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center')};
  position: relative;
`
