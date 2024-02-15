import Tabs from './Tabs'
import './Tabs.css'

function RandomComponent() {
  return <h1>Some random content</h1>
}

const TabTest = () => {
  const tabs = [
    {
      id: 0,
      label: 'Tab 1',
      content: <div>This is content for Tab 1</div>,
    },
    {
      id: 1,
      label: 'Tab 2',
      content: <div>This is content for Tab 2</div>,
    },
    {
      id: 2,
      label: 'Tab 3',
      content: <RandomComponent />,
    },
  ]

  function handleChange(currentTabIndex: number) {
    console.log(currentTabIndex)
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />
}

export default TabTest
