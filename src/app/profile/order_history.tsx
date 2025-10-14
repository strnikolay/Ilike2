'use client'

import React from 'react';
import { categoryList } from '@/api/db';
import { useStore} from '@/store/storeProvidert'
import { observer } from 'mobx-react';



export const Order_history: React.FC = observer(() => {
  const {Store} = useStore()

  /*useEffect(()=>{
   
  },[])*/

  return (
	<div className="category-select-wrapper profile-content">
    <label >
    <input type="text" name="category" 
      //onChange={()=> }
    />
    
    </label>
                
  </div>
  );
});
