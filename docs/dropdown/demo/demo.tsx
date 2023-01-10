import Dropdown, { MenuItemWrapper, MenuItemText } from './components/dropdown'
import { CopyOutlined, EyeOutlined } from '@ant-design/icons'
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
                <CopyOutlined />
                <MenuItemText style={{ marginLeft: 5 }}>Copy share link</MenuItemText>
              </MenuItemWrapper>
            ),
          },
          {
            key: 'viewExternalLink',
            label: (
              <MenuItemWrapper onClick={onViewENS}>
                <EyeOutlined />
                <MenuItemText style={{ marginLeft: 5 }}>View on ENS</MenuItemText>
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
