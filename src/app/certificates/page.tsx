import "./certificates.css"
import Tabs from "./Tabs/tabs"
import Tab from "./Tabs/tab"
import Image from "next/image"

export default function Contact() {

  return (
    <div className="certificates-wrap container">
        <h1></h1>
       <Tabs>
            <Tab title="iLike (АйЛайк)">
                
                    <div className="cert-img">
                        <Image src="/certificates/ilike_1_s.jpg" fill alt=''/>
                    </div>
                    <div className="cert-img">
                        <Image src="/certificates/ilike_2_s.jpg" fill alt=''/>
                    </div>
                
            </Tab>

            <Tab title="BigLif (БигЛиф)">
                    <div className="cert-img">
                        <Image src="/certificates/biglif_1_s.jpg" fill alt=''/>
                    </div>
                    <div className="cert-img">
                        <Image src="/certificates/biglif_2_s.jpg" fill alt=''/>
                    </div>
                    <div className="cert-img">
                        <Image src="/certificates/biglif_3_s.jpg" fill alt=''/>
                    </div>
            </Tab>

            <Tab title="Allegro (Аллегро)">
                <div className="cert-img">
                    <Image src="/certificates/allegro_1_s.jpg" fill alt=''/>
                </div>
            </Tab>

            <Tab title="Glora (Глора)">
                Для личного побщения 
            </Tab>

            <Tab title="Orhideja (Орхидея)">
                Для личного побщения 
            </Tab>

            <Tab title="Hовое время">
                Для личного побщения 
            </Tab>
        </Tabs>
        
    </div>
  )
}
