'use client'

import React, { ReactElement, useState } from "react"
import TabTitle from "./tabtitle"

type Props = {
  children: Item[];
}

type Item = {
  props:childrenProps
  //children: ReactNode[]
}

type childrenProps = {
  title:string;
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  //const [titles, setTitles] = useState<string>([])
  console.log(children)

  /*useEffect(()=>{
    const arr:unknown[] = []
    children.map((item) => {  
      arr.push(item.props)
    })
    const arr2:string[] = []
    arr.forEach((element:any) => {
      arr2.push(element.title)
    });
    setTitles(arr2)
  },[])*/
  /*const arr:any = []
  children.map((item) => {  
    arr.push(item.props)
  })
  const arr2:any = []
  arr.forEach((element:any) => {
    arr2.push(element.title)
  });
  console.log(arr2) */
  
  return (
    <div className="tabs">
      <div className="tab_menu">
        {children.map((item, index:number) => 
          
          item&&<TabTitle
            key={index}
            //title={titles[index]} 
            title={item.props.title} 
            index={index}
            setSelectedTab={setSelectedTab}
          />
        )}
      </div>
      {children[selectedTab].props.children}
    </div>
  )
}

export default (Tabs)