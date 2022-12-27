import Dropdown, { MenuItemWrapper, MenuItemText } from './components/dropdown'
const Demo = () => {
  const onCopy = () => {}
  const onViewENS = () => {}
  return (
    <>
      <Dropdown
        menu={[
          {
            key: 'copy',
            label: (
              <MenuItemWrapper onClick={onCopy}>
                {/*<MenuItemIcon src={Images.SHOP.COPY2_PNG} />*/}
                <MenuItemText>Copy share link</MenuItemText>
              </MenuItemWrapper>
            ),
          },
          {
            key: 'viewExternalLink',
            label: (
              <MenuItemWrapper onClick={onViewENS}>
                {/*<MenuItemIcon src={Images.SHOP.EYE_PNG} />*/}
                <MenuItemText>View on ENS</MenuItemText>
              </MenuItemWrapper>
            ),
          },
        ]}
      >
        Hover me
      </Dropdown>
    </>
  )
}
export default Demo
