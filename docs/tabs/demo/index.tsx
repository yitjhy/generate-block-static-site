import Tabs, { TabsItemProps } from './components/tabs'
const Demo = () => {
  const tabsData: TabsItemProps[] = [
    { key: 'categories', label: 'Top Categories', children: <>
        <div>Top Categories Top Categories Top Categories</div>
        <div>Top Categories Top Categories Top Categories</div>
        <div>Top Categories Top Categories Top Categories</div>
        <div>Top Categories Top Categories Top Categories</div>
        <div>Top Categories Top Categories Top Categories</div>
      </> },
    { key: 'sales', label: 'Top Sales', children: <>
        <div>Top Sales Top Sales Top Sales Top Sales Top Sales</div>
        <div>Top Sales Top Sales Top Sales Top Sales Top Sales</div>
        <div>Top Sales Top Sales Top Sales Top Sales Top Sales</div>
        <div>Top Sales Top Sales Top Sales Top Sales Top Sales</div>
        <div>Top Sales Top Sales Top Sales Top Sales Top Sales</div>
      </> },
    { key: 'owners', label: 'Top Owners', children: <>
        <div>Top Owners Top Owners Top Owners Top Owners Top Owners</div>
        <div>Top Owners Top Owners Top Owners Top Owners Top Owners</div>
        <div>Top Owners Top Owners Top Owners Top Owners Top Owners</div>
        <div>Top Owners Top Owners Top Owners Top Owners Top Owners</div>
        <div>Top Owners Top Owners Top Owners Top Owners Top Owners</div>
      </> },
    { key: 'gainers', label: 'Top Gainers', children: <>
        <div>Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers</div>
        <div>Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers</div>
        <div>Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers</div>
        <div>Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers</div>
        <div>Top Gainers Top Gainers Top Gainers Top Gainers Top Gainers</div>
      </> },
  ]
  return <>
    <Tabs
      // defaultTab='categories'
      items={tabsData}
      onChange={(data) => {
        console.log(data)
      }}
    />
  </>
}
export default Demo