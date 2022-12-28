import Table, { TableColumn } from './components/Table'

type TListItem = {
  price: number
  price_usd: number
  expiration: string
  from: string
}
const columns: TableColumn<TListItem>[] = [
  {
    name: 'Price',
    sortable: false,
    key: 'price',
  },
  {
    name: 'USD Price',
    sortable: false,
    key: 'price_usd',
    render: (data) => (data.price_usd ? `¥${data.price_usd}` : '-'),
  },
  {
    name: 'Expiration',
    sortable: false,
    key: 'expiration',
  },
  {
    name: 'From',
    sortable: false,
    key: 'from',
  },
]
const Demo = () => {
  const tableData: TListItem[] = [
    { price: 23423, price_usd: 123123, expiration: '2022-09-15 18:36:28', from: '四川省成都市' },
    { price: 23423, price_usd: 123123, expiration: '2022-09-15 18:36:28', from: '四川省成都市' },
    { price: 23423, price_usd: 123123, expiration: '2022-09-15 18:36:28', from: '四川省成都市' },
    { price: 23423, price_usd: 123123, expiration: '2022-09-15 18:36:28', from: '四川省成都市' },
  ]
  return (
    <>
      <Table data={tableData} columns={columns} />
    </>
  )
}
export default Demo
