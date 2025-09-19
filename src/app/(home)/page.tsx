'use client'

import { Poster } from "@/components/home/Poster";
import { NewSales } from "@/components/home/main_bestsaler";
import { Main_about } from "@/components/home/main_about";
import { Main_news } from "@/components/home/main_news";
import { useEffect } from "react";
import { useStore } from "@/store/storeProvidert";
import { Content } from "@/components/home/content";
import { observer } from 'mobx-react-lite';
import { Review } from "@/components/home/main_review";


const Home = () => {
  const {Store} = useStore()

  useEffect (()=>{
    console.log(Store.isAuth)
  },[Store])

  return (
    <>
      <Poster/>
      <Content/>
      <Main_about/>
      <NewSales/>
      <Review/>
      <Main_news />

    </>
  )
}

export default observer(Home)