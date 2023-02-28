import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {SiRiotgames} from 'react-icons/si'
import {GiThornedArrow} from 'react-icons/gi'
import {FaDiscord, FaFacebookF, FaTicketAlt} from 'react-icons/fa'
import {BsTwitch, BsWhatsapp} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {BsTrophy} from 'react-icons/bs'
import {RiSurveyFill} from 'react-icons/ri'
import {HiBars4} from 'react-icons/hi2'
import { useRef } from 'react'


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
                    <button onClick={()=> RegisterLink.current.click()} ><SiRiotgames id='LandingHeaderIcon' /> إنتمــي</button>
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
                  <button onClick={()=> RegisterLink.current.click()}><SiRiotgames id='LandingHeaderIcon' /> إنتمــي</button>
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
                        <p>كاشات</p>
                        <p>اتكسبت</p>
                        <span>£39,615</span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/1s.png'} width={90} height={90} alt="التوب جيمر" title="التوب جيمر" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>التوب</p>
                        <p>جيمر</p>
                        <span>£305,60</span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/mouse.png'} width={70} height={90} alt="عدد اللاعيبة" title="عدد اللاعيبة" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>عدد</p>
                        <p>اللاعيبة</p>
                        <span>7502</span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/tr.png'} width={90} height={90} alt="عدد البطولات" title="عدد البطولات" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>عدد</p>
                        <p>البطولات</p>
                        <span>7502</span>
                    </div>
                </div>

                </div>
            </div>

            <div className='OnBlackTwo'>



            </div>
        </div>



        <div className='SecondLandingDiv' id='Sharek'>


                <div className='BottomLeftSecondLanding'>

                    <h1>!.. تكسب</h1>
                    <p>في كل مره هتشارك بطولة او تحدي بتاخد</p>
                    <p>جوائز مادية او كؤوس او نقاط تقدر تبدلها</p>
                    <p>بمستلزمات إلكترونية - شحن في لعبتك</p>
                    <p>وجبات</p>
                    <p>وحاجات تانية كتير ..! انت دايما كسبان</p>
                    <button onClick={()=>setLogin(!Login)}>!إكسب چي چي ايزي بوينتس <GiThornedArrow id='ArrowIco' className='ArrowIcon' /></button>
                </div>

                <div className='SecondBackGround reveal'>
                    <Image src={'/pic1.png'} width={750} height={550} unoptimized></Image>
                </div>

                <div className='TopRightSecondLandin'>
                            <h1>!شارك</h1>
                            <p>في سكريمات</p>
                            <p>بطولات</p>
                            <p>إيڤينتس! في لعبتك المفضلة</p>
                </div>

                <div className='BlurBackGround'></div>




                <div className='SecondBlurBackGround'></div>

        </div>


        <div className='LandingThirdDiv' id="LandingDivThird">

            <div className='LeftThirdLandingDiv'>
                  <Image className='revea' src={'/pic2.png'} width={550} height={700} alt="سجل العب واكسب" title="سجل العب واكسب"></Image>

                  <div className='InnerLeftThird'>

                    <h1>!إنضم</h1>
                    <p>لأكبر مجتمع جيمرز كون فريقك او أنضم</p>
                    <p>لنادي</p>
                    <p>! وخليك مصنف على مصر</p>

                  </div>
            </div>


            <div className='RightThirdLandingDiv'>

                 <div className='InnerRightThird'>

                    <h1>!إنتمي</h1>
                    <p>إنتمي لاكبر مجتمع رياضات الكترونية</p>
                    <p>في مصر وخليك وسط إصحابك تيمك</p>
                    <p>وناديك</p>
                    <button onClick={()=>setLogin(!Login)}>إنضم دلوقتي <GiThornedArrow id='ArrowIco' className='ArrowIcon' /></button>
                 </div>

                 <Image className='reveal rotImg' src={'/pici.png'} width={550} height={700} alt="سجل العب واكسب" title="سجل العب واكسب"></Image>
            </div>

            <div className='ThirdBackgroundBlur'></div>
            <div className='SecThirdBackgroundBlur'></div>

        </div>


        <div className='FourthLandingDiv' id="LandingFourthDiv">
            <div className='FourthBackground'><div className='blackOnGround'></div></div>

            <div className='FourthLayout'>

                <div className='LeftFourthLayout'>
                    <Image className='revea ImageFourth' src={'/pic3.png'} width={400} height={650}></Image>
                    <div className='BlurFourthBackground'></div>
                </div>


                <div className='RightFourthLayout'>
                    <div className='FirstFourthRight'>
                        <h1>جمع صحابك في فريق</h1>
                        <h1>واتحدى فرق تانية</h1>
                        <h1>!.. ونافس ع التصنيف</h1>
                        <button onClick={()=>setLogin(!Login)}>إنضم</button>
                    </div>

                    <div className='SecondFourthRight'>

                            <div className='FourthCard BronzeCard'>

                                <Image className='backgroundImage' src={'/backi.jpg'} width={240} height={115}></Image>


                                <div className='CardProfile'>
                                    <Image src={'/profile.png'} width={90} height={90}></Image>
                                    <p className='CardRank ThiCardRank'>3<span>rd</span></p>
                                </div> 


                                <div className='CardDetails'>
                                        
                                        <p><span>DUK</span> OSAMITOS</p>
                                        <p><span>#</span>lmred01234</p>
                                </div>


                                <div className='LineCard'></div>


                                <div className='CardStats'>

                                    <p> :الفلوس <span>152£</span></p>
                                    <p>:الخسارة <span>152</span> </p>
                                    <p>:المكسب <span>152</span> </p>


                                </div>


                                <div className='LineCard2'></div>


                                <div className='CardTrophis'>

                                    <div>
                                        <p><BsTrophy className='PlatinumTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='GoldTrophy CardTrophy' /> 5000</p>
                                    </div>

                                    <div>
                                        <p><BsTrophy className='SilverTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='BronzeTrophy CardTrophy' /> 5000</p>
                                    </div>

                                </div>  



                                <div className='LineCard3'></div>


                                <div className='BottomCard'>
                                    <p>:المستوى <span>NOOB</span></p>
                                    <p>:الفريق <span>DUK</span></p>
                                    <p>:النادي <span>KFC</span></p>
                                </div>

                                

                            </div>

                            <div className='FourthCard GoldCard'>

                                <Image className='backgroundImage' src={'/backi.jpg'} width={240} height={115}></Image>


                                <div className='CardProfile'>
                                    <Image src={'/profile.png'} width={90} height={90}></Image>
                                    <p className='CardRank'>1<span>st</span></p>
                                </div> 


                                <div className='CardDetails'>
                                        
                                        <p><span>DUK</span> OSAMITOS</p>
                                        <p><span>#</span>lmred01234</p>
                                </div>


                                <div className='LineCard'></div>


                                <div className='CardStats'>

                                    <p> :الفلوس <span>152£</span></p>
                                    <p>:الخسارة <span>152</span> </p>
                                    <p>:المكسب <span>152</span> </p>


                                </div>


                                <div className='LineCard2'></div>


                                <div className='CardTrophis'>

                                    <div>
                                        <p><BsTrophy className='PlatinumTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='GoldTrophy CardTrophy' /> 5000</p>
                                    </div>

                                    <div>
                                        <p><BsTrophy className='SilverTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='BronzeTrophy CardTrophy' /> 5000</p>
                                    </div>

                                </div>  



                                <div className='LineCard3'></div>


                                <div className='BottomCard'>
                                    <p>:المستوى <span>NOOB</span></p>
                                    <p>:الفريق <span>DUK</span></p>
                                    <p>:النادي <span>KFC</span></p>
                                </div>

                                

                            </div>




                            <div className='FourthCard SilverCard'>

                                <Image className='backgroundImage' src={'/backi.jpg'} width={240} height={115}></Image>


                                <div className='CardProfile'>
                                    <Image src={'/profile.png'} width={90} height={90}></Image>
                                    <p className='CardRank SecCardRank'>2<span>nd</span></p>
                                </div> 


                                <div className='CardDetails'>
                                        
                                        <p><span>DUK</span> OSAMITOS</p>
                                        <p><span>#</span>lmred01234</p>
                                </div>


                                <div className='LineCard'></div>


                                <div className='CardStats'>

                                    <p> :الفلوس <span>152£</span></p>
                                    <p>:الخسارة <span>152</span> </p>
                                    <p>:المكسب <span>152</span> </p>


                                </div>


                                <div className='LineCard2'></div>


                                <div className='CardTrophis'>

                                    <div>
                                        <p><BsTrophy className='PlatinumTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='GoldTrophy CardTrophy' /> 5000</p>
                                    </div>

                                    <div>
                                        <p><BsTrophy className='SilverTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='BronzeTrophy CardTrophy' /> 5000</p>
                                    </div>

                                </div>  



                                <div className='LineCard3'></div>


                                <div className='BottomCard'>
                                    <p>:المستوى <span>NOOB</span></p>
                                    <p>:الفريق <span>DUK</span></p>
                                    <p>:النادي <span>KFC</span></p>
                                </div>

                                

                            </div>

                    </div>


                </div>



            </div>
            
        </div>



        <div className='FifthLandingDiv'>

            <div className='TopFifthLandingDiv'>
                    <div className='LeftFifth'>
                        <h1>تقدر تبدل النقاط اللي بتجمعها</h1>
                        <h1>من مشاركاتك بس</h1>
                        <h1>!وتبدلها بجوايز</h1>

                        <div className='FifthBackground'></div>
                    </div>

                    <div className='RightFifth'>
                        <Image src={'/pic4.png'} width={800} height={750}></Image>
                    </div>
            </div>


            <div className='SecondFifthLandingDiv'>
                    <Image src={'/bbb.png'} width={720} height={492} unoptimized></Image>
            </div>

        </div>


        <div className='SixthLandingDiv' id='Endam'>
                <h1>!إنضم لأول منصة أندية الكترونية في مصر</h1>

                <div className='SixthContainerTeams'>

                        <div onClick={()=>setLogin(!Login)} className='SixthRight'>

                           <div className='BlurFourthBackground'></div>
                            
                            <div className='SixthTeam'>
                                <Image src={'/1.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>لاعب <span>15</span></p>
                                        <p><span>1#</span> الرانك</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam TwoTeam'>
                                <Image src={'/2.png'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>لاعب <span>15</span></p>
                                        <p><span>1#</span> الرانك</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam OpTeam'>
                                <Image src={'/3.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>لاعب <span>15</span></p>
                                        <p><span>1#</span> الرانك</p>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div onClick={()=>setLogin(!Login)} className='SixthLeft'>
                            <div className='BlurFourthBackground2'></div>
                            <div className='SixthTeam OpTeam'>
                                <Image src={'/4.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>لاعب <span>15</span></p>
                                        <p><span>1#</span> الرانك</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam TwoTeam'>
                                <Image src={'/5.jpg'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>لاعب <span>15</span></p>
                                        <p><span>1#</span> الرانك</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam '>
                                <Image src={'/6.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>لاعب <span>15</span></p>
                                        <p><span>1#</span> الرانك</p>
                                    </div>

                                </div>
                            </div>

                        </div>

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

            <img onClick={()=>setLogin(!Login)} src={'/val.jpg'} ></img>


    

            <img onClick={()=>setLogin(!Login)} src={'/lea.jpg'}></img>

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