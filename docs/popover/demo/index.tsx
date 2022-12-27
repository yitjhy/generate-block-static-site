import Popover from './components/popover'
const Demo = () => {
  return <>
    <Popover
      content={
        <>
          <div>Content1Content1Content1</div>
          <div>Content2Content2Content2</div>
          <div>Content3Content3Content3</div>
          <div>Content4Content4Content4</div>
          <div>Content5Content5Content5</div>
        </>
      }
    >
      Hover me
    </Popover>
  </>
}
export default Demo