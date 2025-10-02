'use client'

import React from 'react';
import { categoryList } from '@/api/db';
import { useStore} from '@/store/storeProvidert'



export const Category_select: React.FC = () => {
  const {Store} = useStore()

  return (
	<div className="category-select-wrapper">
      <button className='' onClick={()=> {Store.Filtred(null)}}>
          Все
        </button>
      {categoryList.map(({cat_title, id}, i) => (
        <button key={i} className='' onClick={()=> {Store.Filtred(id)}}>
          {cat_title}
        </button>
      ))}           


  </div>
  );
};
