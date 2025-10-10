'use client'
import "./certificates.css"
import Tabs from "./Tabs/tabs"
import Tab from "./Tabs/tab"
//import Image from "next/image"

export default function Certificates() {

    const enlargeHandle = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.currentTarget.classList.toggle("big")
    } 

    return (
    <div className="certificates-wrap container">
        <h1></h1>
       <Tabs>
            <Tab title="iLike (АйЛайк)">
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="ilike-one"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="ilike-two"></div>
                </button>                
            </Tab>

            <Tab title="BigLif (БигЛиф)">
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="biglif-one"></div>
                    </button>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="biglif-two"></div>
                    </button>
                    <button className="cert-img" onClick={enlargeHandle}>
                        <div className="biglif-three"></div>
                    </button>
            </Tab>

            <Tab title="Allegro (Аллегро)">
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="allegro-one"></div>
                </button>
            </Tab>

            <Tab title="Glora (Глора)">
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="glora-one"></div>
                </button>
            </Tab>

            <Tab title="Orhideja (Орхидея)">
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-one"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-two"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-three"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="orh-four"></div>
                </button>                                 
            </Tab>

            <Tab title="Hовое время">
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="nv-one"></div>
                </button>
                <button className="cert-img" onClick={enlargeHandle}>
                    <div className="nv-two"></div>
                </button> 
            </Tab>
        </Tabs>
        
    </div>
  )
}
