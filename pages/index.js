import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {SiRiotgames} from 'react-icons/si'
import {GiThornedArrow} from 'react-icons/gi'
import {FaDiscord, FaFacebookF, FaTicketAlt, FaJoint} from 'react-icons/fa'
import {BsTwitch, BsWhatsapp} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {BsTrophy} from 'react-icons/bs'
import {RiSurveyFill} from 'react-icons/ri'
import {HiBars4} from 'react-icons/hi2'
import { useRef } from 'react'
import CountUp from 'react-countup'

export default function Home() {


    const [Login, setLogin] = useState(false);
    const [MobileHeader, setMobileHeader] = useState(false);
    const RegisterLink = useRef()
    const FormLink = useRef()

    useEffect(()=>{
        const header = document.getElementById('LandingHeaderID');
        window.onscroll = () =>{
            if(window.pageYOffset   > 0){
                header.style.backgroundColor = 'black'
            }else{
                header.style.backgroundColor = 'transparent'
            }
        }
    })



    useEffect(()=>{

        function reveal() {
          var reveals = document.querySelectorAll(".reveal");
          for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
            } else {
              reveals[i].classList.remove("active");
            }
          }
        }
      
      
        window.addEventListener("scroll", reveal);
      
      // To check the scroll position on page load
        reveal();


            function revea() {
      var reveals = document.querySelectorAll(".revea");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("activ");
        } else {
          reveals[i].classList.remove("activ");
        }
      }
    }
  
  
    window.addEventListener("scroll", revea);
  
  // To check the scroll position on page load
    revea();
      
      
      
   
      
    
      })


  return (
    <div className='LandingContainer'>


        <Head>
            <title>چي چي! إنضم لأول مجتمع جيمينج في مصر</title> 
            <link rel="icon" href="/icon1.png"></link>
        </Head>


        {
          MobileHeader ?         <div className='MobileHeader'>

                <div className='InnerMobileHeader'>
                
                   <button onClick={()=> FormLink.current.click()} ><FaTicketAlt id='LandingHeaderIcon' /> اشترك في البطولة</button>
                    <button onClick={()=> RegisterLink.current.click()} ><FaJoint id='LandingHeaderIcon' /> إنتمــي</button>
                    <Link className='LinkToRegister' href='/register' ref={RegisterLink}>register</Link>
                  <a target='_blank' className='LinkToRegister' href='https://forms.gle/tkLeyGkmiXNxVcY47' ref={FormLink}>form</a>
                   
                </div>

          <AiOutlineClose onClick={()=> setMobileHeader(false)} className='CloseMobileHeader' />

</div> : <></>
        }



        <header className='LandingHeader' id='LandingHeaderID'>
              <div className='LeftLandingHeader'>
                  <Link href="/"><Image src={'/logo.png'} width={55} height={40} alt="چي چي" title='چي چي' unoptimized></Image>GGEG</Link>
              </div>

              <div className='RightLandingHeader'>
                  <button onClick={()=> FormLink.current.click()}><FaTicketAlt id='LandingHeaderIcon' /> اشترك في البطولة</button>
                  <button onClick={()=> RegisterLink.current.click()}><FaJoint id='LandingHeaderIcon' /> إنتمــي</button>
                  <Link className='LinkToRegister' href='/register' ref={RegisterLink}>register</Link>
                  <a target='_blank' className='LinkToRegister' href='https://forms.gle/tkLeyGkmiXNxVcY47' ref={FormLink}>form</a>
              </div>

              <HiBars4 onClick={()=> setMobileHeader(true)}  className="HeaderBars" />


        </header>

        
        <div className='FirstLandingDiv' id='FirstLandingDiv'>
            <div className='FirstBackground'>
                <Image src={`/2background.jpg`} fill></Image>
            </div>
            <span className='BlackScreen'></span>

            <div className='OnBlackOne'>
                <div className='InnerBlackOne'>
                    <h1><span>چي چي</span> .. هو أول</h1>
                    <h1><span>!.. </span>مجتمع <span>جيمرز عربي</span></h1>
                    <h2>.. احنا جيمرز .. وبنفهمك كجيمر</h2>
                    <p>دلوقتي تقدر تجمع بين إنك تلعب.. تشارك في سكريمات</p>
                    <p>!وبطولات.. تكون فريق أو تنضم لنادي.. وانت دايما كسبان</p>
                </div>

                <div className='InnerBlackTwo'>

                <div className='SecTwo'>
                    <Image src={'/coins2.png'} width={90} height={90} alt="الكاشات" title="الكاشات" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>هدفنا</p>
                        <p>نكسّب</p>
                        <span>£<CountUp end={10000} /></span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/1s.png'} width={90} height={90} alt="التوب جيمر" title="التوب جيمر" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>اعلى</p>
                        <p>مكسب</p>
                        <span>£<CountUp end={300} /></span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/mouse.png'} width={70} height={90} alt="عدد اللاعيبة" title="عدد اللاعيبة" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>هدفنا</p>
                        <p>نوصل لجيمرز</p>
                        <span><CountUp end={500} /></span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/tr.png'} width={90} height={90} alt="عدد البطولات" title="عدد البطولات" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>نعمل</p>
                        <p>بطولات</p>
                        <span><CountUp end={100}/></span>
                    </div>
                </div>

                </div>
            </div>

            <div className='OnBlackTwo'>



            </div>
        </div>



   


        <div className='SeventhLandingDiv' id='El3ab'>

            <h1>..انت ك جيمر دلوقتي تقدر ترانك</h1>
            <h1>!..في العابك المفضلة</h1>

            <div className='SeventhBackground'>
                <div className='SeventhInnerBackground'>

                </div>
            </div>





        <div className='gallery'>

            <img onClick={()=>RegisterLink.current.click()} src={'/val.jpg'} ></img>


    

            <img onClick={()=>RegisterLink.current.click()} src={'/lea.jpg'}></img>

        </div>





        </div>


        <footer>

            <div className='FirstFooter'>
                <div className='LeftFirst'>
                    <a href="https://discord.gg/DuKwFMn3" target='_blank'><FaDiscord className='DiscordIcon' /> تعالى ديسكورد</a>
                </div>

                <div className='RightFirst'>
                    <h1>عايز صُحبه؟</h1>
                    <p>حصّلنا عالديسكورد </p>
                </div>
            </div>


            <div className='SecondFooter'>
                    <div className='LeftSecond'>
                        <Image src={'/logowhite.png'} width={95} height={85}></Image>
                    </div>

                    <div className='RightSecond'>
                        <a href="https://www.facebook.com/profile.php?id=100090654730601" target='_blank'><FaFacebookF className='SocialIcon' /></a>
                        <Link href="#"><BsTwitch className='SocialIcon' /></Link>
                        <a href="https://discord.gg/DuKwFMn3" target='_blank'><FaDiscord className='SocialIcon' /></a>
                        <a href="https://wa.link/aoenrr" target='_blank'><BsWhatsapp className='SocialIcon' /></a>

                    </div>
            </div>


            <div className="ThirdFooter">
                <p><span>GGEG</span> حقوق النشر محفوظة لشركة  <span>2023</span> &#169; </p>
            </div>

        </footer>
        


    </div>
  )
}


Home.layout = 'L1'