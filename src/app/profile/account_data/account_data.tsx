'use client'

import React, {useState, useEffect} from 'react';
import { categoryList } from '@/api/db';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';
import { Edit_name } from './edit_contact_name ';
import { IContact } from '@/store/interfaces';



export const Account_data: React.FC = observer(() => {
  const {Store} = useStore()
  const [isEdit, setSumm] = useState<number>(0)
  const [contactList, setContactList] = useState<IContact[]>(Store.user.contact)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Store.user.contact
  useEffect(()=>{
    //console.log(contactList)

    setContactList(Store.user.contact) 
    setIsLoading(false) 
  },[])

  useEffect(()=>{
    console.log(contactList)

    //setContactList(Store.user.contact)  
  },[contactList])

  return (
	<div className="account-data-wrapper profile-content">
    <div className='company'>Компания: {Store.user.company}</div>
    <div className="edit-name-wrapper">
      <div className='contact-edit-title'>Котактные данные</div>
      {!isLoading&&contactList.map((contact:IContact, index:number)=>(
        <Edit_name key={index} index={index} contact={contact}/>
      ))}
    </div>



    {/*<label >
    <input type="text"  name="company" value={Store.user.company}
      //onChange={()=> {Product_Store.setSelectedCategory(undefined)}}
    />
    </label>*/}
                
  </div>
  );
});
