'use client'

import React, { ReactElement, useState } from "react"
import TabTitle from "./tabtitle"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  //console.log(children.map((item) => console.log(item.props.title)))
  
  return (
    <div className="tabs">
      <div className="tab_menu">
        {children.map((item, index) => 
          
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        )}
      </div>
      {children[selectedTab]}
    </div>
  )
}

export default (Tabs)