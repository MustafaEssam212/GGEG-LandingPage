

import Head from "next/head"
import Image from "next/image"
import {SiDiscord} from 'react-icons/si'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { useState } from "react"
import { toast } from 'react-toastify';
import Link from "next/link"
import { useRouter } from "next/router"

const Register = () => {

    const[FavGame, setFavGame] = useState(false);
    const [SelectedFavGame, setSelectedFavGame] = useState('');


    const[Education, setEducation] = useState(false);
    const [SelectedEducation, setSelectedEducation] = useState('');

    
    const[Age, setAge] = useState(false);
    const [SelectedAge, setSelectedAge] = useState('');


    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [GameID, setGameID] = useState('');
    const [DiscordID, setDiscrodID] = useState('');
    
    const router = useRouter();

    const handleRegister = async (e) =>{
        e.preventDefault();

        const obj = {
            FirstName,
            LastName,
            Email,
            GameID,
            DiscordID,
            SelectedAge,
            SelectedEducation,
            SelectedFavGame
        }
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        if(data.message !== 'Done'){
            toast.warning(data.message)
        }else{
            toast.success('لقد تم تسجيلك بنجاح')

            setTimeout(()=>{
                router.push('https://forms.gle/tkLeyGkmiXNxVcY47')
            }, 2000)
        }

    }

  return (
    <div className="RegisterContainer">

        <Head>
            <title>چي چي! تسجيل عضوية</title>
            <link rel="icon" href="/icon1.png"></link>
        </Head>



        <div className="BackVideo">
            <video muted autoPlay loop>
                <source src="/backReg.mp4" type="video/mp4"></source>
            </video>
        </div>


        <div className="OnVideo">
                
                        <div className="TopForm">
                            <Link href="/"><Image src={`/logo.png`} width={80} height={55}></Image></Link>
                            <a href="https://discord.gg/DuKwFMn3" target='_blank'><SiDiscord className="Icon" /> ديسكورد</a>
                        </div>


                <div className="InnerOnVideo">


                        
                <div className="Form">

                
                        <form onSubmit={handleRegister}>

                            <div className="TwoInputs">
                                <input onChange={(s)=> setFirstName(s.target.value)} placeholder="الاسم الاول" type="text"></input>
                                <input onChange={(s)=> setLastName(s.target.value)} placeholder="اسم العائلة" type="text"></input>
                            </div>

                            <div className="SingleInput">
                                <input onChange={(s)=> setEmail(s.target.value)} placeholder="الإيميل" type="email"></input>
                            </div>


                            <div onClick={()=>setFavGame(!FavGame)} style={FavGame ? {border: `3px solid whitesmoke`} : {}} className="OptionsInput">
                                <p className="MainP">{!SelectedFavGame ? `اللعبة المفضلة` : SelectedFavGame} {FavGame ? <IoIosArrowUp className="ArrowIcon" /> : <IoIosArrowDown className="ArrowIcon" />}</p>

                                {
                                    FavGame ?                                 <div className="ChooseDiv">
                                    <p onClick={()=> setSelectedFavGame('League of Legends')}>League of Legends</p>
                                    <p onClick={()=> setSelectedFavGame('Valorant')}>Valorant</p>
                                  
                                </div>   : <></>
                                }

                            </div>


                            <div className="SingleInput">
                                <input onChange={(s)=> setGameID(s.target.value)} placeholder="Game ID" type="text"></input>
                            </div>


                            <div onClick={()=>setAge(!Age)} style={Age ? {border: `3px solid whitesmoke`} : {}} className="OptionsInput">
                                <p className="MainP">{!SelectedAge ? `العمر` : SelectedAge} {Age ? <IoIosArrowUp className="ArrowIcon" /> : <IoIosArrowDown className="ArrowIcon" />}</p>

                                {
                                    Age ?                                 <div className="ChooseDiv">
                                    <p onClick={()=> setSelectedAge('12 - 17')}>12 - 17</p>
                                    <p onClick={()=> setSelectedAge('18 - 23')}>18 - 23</p>
                                    <p onClick={()=> setSelectedAge('24 - 30')}>24 - 30</p>
                                    <p onClick={()=> setSelectedAge('31+')}>31+</p>
                                </div>   : <></>
                                }

                            </div>


                            <div onClick={()=>setEducation(!Education)} style={Education ? {border: `3px solid whitesmoke`} : {}} className="OptionsInput">
                                <p className="MainP">{!SelectedEducation ? `مرحلة التعليم` : SelectedEducation} {Education ? <IoIosArrowUp className="ArrowIcon" /> : <IoIosArrowDown className="ArrowIcon" />}</p>

                                {
                                    Education ?                                 <div className="ChooseDiv">
                                    <p onClick={()=> setSelectedEducation('في المدرسة')}>في المدرسة</p>
                                    <p onClick={()=> setSelectedEducation('في الجامعة')}>في الجامعة</p>
                                    <p onClick={()=> setSelectedEducation('خريج')}>خريج</p>
                                    
                                </div>   : <></>
                                }

                            </div>


                            <div className="SingleInput">
                                <input onChange={(s)=> setDiscrodID(s.target.value)} placeholder="Discord ID (إختياري)" type="text"></input>
                            </div>

                            <button type="submit">سجّل</button>

                        </form>
                
                </div>



                </div>


        </div>

    </div>
  )
}

export default Register
