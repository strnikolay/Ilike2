import Image from "next/image";
import "./about_compon.css"


export const About: React.FC = () => {

  return (
    <>
    <div className="about-wrapper container">

            <div className="about-item">
                <Image src="/about/ico_about1.png" width={50} height={50} alt=""/>
                <div className="about-content">              
                  <div className="about-title">15 ЛЕТ</div>
                  <div className="about-text" >
                    Мы производим и продаем нижнее белье
                  </div>
                </div>
            </div>


            <div className="about-item">
                <Image src="/about/ico_about2.png" width={50} height={50} alt=""/>
                <div className="about-content">   
                  <div className="about-title">5 ЛЕТ</div>
                  <div className="about-text">
                    Мы производим СОБСТВЕННУЮ МАРКУ белья в Прибалтике
                  </div>
                </div>
            </div>


            <div className="about-item">
                <Image src="/about/ico_about3.png" width={50} height={50} alt=""/>
                <div className="about-content"> 
                  <div className="about-title">XXL</div>
                  <div className="about-text">
                    Наша специализация — большие размеры
                  </div>
                </div>
            </div>


            <div className="about-item">
                <Image src="/about/ico_about4.png" width={50} height={50} alt=""/>

                <div className="about-content">              
                  <div className="about-title">1300+ КЛИЕНТОВ</div>
                  <div className="about-text" >Ежемесячно строят с нами свой бизнес</div>
                </div>                
            </div>

    </div>


    <div className="about-content container">
        <h2>Уже более 15 лет мы известны как надежный оптовый поставщик нижнего белья. У нас огромный опыт работы с популярными бельевыми брендами Прибалтики, Украины, Белоруссии и России.</h2>
        <div className="about-item">
            <Image className='about-img' src="/about/about_1.svg" width={257} height={240} alt=''/>
            <div className="about-item-text">
                <h3>Кроме того, уже более 5 лет мы производим в Латвии собственную марку белья, для которой используем сырье и материалы от лучших прибалтийских и европейских фабрик. Работая с «iLike», у вас есть возможность закупать белье напрямую по ценам производителя.</h3>
            </div>
        </div>
        
        <div className="about-item">
            <div className="about-item-text">
                <h3>Нашей специализацией всегда были бюстгальтеры больших размеров. Мы знаем все о том, какой должна быть идеальная посадка, используем только надежные материалы и фурнитуру. Модели, которые стали хитами продаж, мы разработали сами. Также в нашем ассортименте есть и популярные на рынке прототипы, но по более доступным ценам.</h3>
            </div>
             <Image className='about-img' src="/about/about_2.svg" width={257} height={240} alt=''/>
        </div>
        
        <div className="about-item">
            <Image className='about-img' src="/about/about_3.svg" width={257} height={240} alt=''/>
            <div className="about-item-text">
                <h3>В нашем ассортименте постоянно присутствует около 200 классических моделей бюстгальтеров, трусов и корректирующего белья под собственной маркой, а также хиты продаж от марок «Glora», «Orhideja», «Milavitsa», «Новое время», «Силуэт», «Элита». Также каждый сезон мы предлагаем более 10 новых fashion-линеек. Вы удачно расширите ассортимент и привлечете новых клиентов, которым безусловно понравится качество настоящего прибалтийского белья - по приятным ценам.</h3>
            </div>
        </div>
      
    </div>
    </>
  )
}