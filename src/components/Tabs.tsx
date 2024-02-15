import { useState } from 'react'
import { ContentProps } from '../Types'

const Tabs: React.FC<ContentProps> = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setcurrentTabIndex] = useState<number>(0)

  function handleOnClick(getCurrentIndex: number) {
    setcurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)
  }

  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className='label'>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className='content' style={{ color: 'red' }}>
        {tabsContent[currentTabIndex]?.content}
      </div>
    </div>
  )
}

export default Tabs
