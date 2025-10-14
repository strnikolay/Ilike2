'use client'

import React, {useState, ChangeEvent} from 'react';
import { categoryList } from '@/api/db';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';
import { IContact } from '@/store/interfaces';

type Props = {
  index: number,
  contact:IContact
}

export const Edit_name: React.FC<Props> = observer(({index, contact}) => {
  const {Store} = useStore()
  //const [isEdit, setSumm] = useState<number>(0)


  const [name, setName] = useState<string>(contact.name)
  const [isNameEdit, setIsNameEdit] = useState(false)
  const nameEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const [phone, setPhone] = useState<string>(contact.phone)
  const [isPhoneEdit, setISNameEdit] = useState(false)
  const phoneEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  /*useEffect(()=>{
    
  },[])*/


  return (
	<div className='contact-item'>
    <label >
      <input
        //ref={nameInputRef}
        readOnly={isNameEdit?true:false}
        onChange={e => nameEditHandler(e)}
        value={name}
        type="text"
        placeholder={name}
        className={isNameEdit?"name-input active":"name-input"}
      />
    </label>
    {isNameEdit?
        <button className='confirm' 
          //onClick={handleNameEditEnd}
        >
        </button>:
        <button className='edit' 
          //</label>onClick={handleNameEdit}
        >
        </button>
    }
    
    <label >
      <input
        //ref={nameInputRef}
        readOnly={isPhoneEdit?true:false}
        onChange={e => nameEditHandler(e)}
        value={phone}
        type="text"
        placeholder={phone}
        className={isPhoneEdit?"name-input active":"name-input"}
      />
    </label>
        {isPhoneEdit?
        <button className='confirm' 
          //onClick={handleNameEditEnd}
        >
        </button>:
        <button className='edit' 
          //</label>onClick={handleNameEdit}
        >
        </button>
    } 
  </div>
  );
});


              
                
                
             