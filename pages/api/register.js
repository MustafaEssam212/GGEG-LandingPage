import dbConnect from "@/utils/dbConnect";
import Users from "@/models/userSchema";


export default async function Register(req, res){
  await dbConnect()
  

  if(!req.body.FirstName || !req.body.LastName){
    res.status(400).send({message: `من فضلك تأكد من اسمك الشخصي`})
  }else if(!req.body.Email){
    res.status(400).send({message: `من فضلك تأكد من اسمك ايميلك`})
  }else if(!req.body.SelectedFavGame){
    res.status(400).send({message: `من فضلك تأكد من اللعبة المفضلة`})
  }else if(!req.body.GameID){
    res.status(400).send({message: `من فضلك تأكد من ملئ الخانات المطلوبة`})
  }else if(!req.body.SelectedAge){
    res.status(400).send({message: `من فضلك تأكد من خانة العمر`})
  }else if(!req.body.SelectedEducation){
    res.status(400).send({message: `من فضلك تأكد من خانة مرحلة التعليم`})
  }else {
    

      Users.findOne({email: req.body.Email}, (err, result) => {
        if(result){
          res.status(400).send({message: `لقد تم التسجيل بهذا الايميل مسبقاً`})
        }else{


            const newUser = new Users({
              firstName: req.body.FirstName,
              lastName: req.body.LastName,
              email: req.body.Email,
              favoriteGame: req.body.SelectedFavGame,
              gameID: req.body.GameID,
              age: req.body.SelectedAge,
              education: req.body.SelectedEducation,
              discordID: !req.body.DiscordID ? 'Not Selected' : req.body.DiscordID
            })

            newUser.save()

            res.status(200).send({message: 'Done'})



        }
      })


  }

}

export const config = {
  api: {
    externalResolver: true,
  },
}