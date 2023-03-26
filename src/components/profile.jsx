import React, { useState } from 'react'
import {Typography, Box, Card, Avatar, TextField, Input} from "@mui/material"
import { DarkModeOutlined,Done,Edit,NotificationsOutlined } from "@mui/icons-material"
import { makeStyles } from '@mui/styles'
import { TopDashboardNav } from './topDashboardNav'

import userImage from '../common/images/user.jpg'

const ProfileStyle = makeStyles({
//   topBar: {
//     height: '9vh',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '10px',
//     paddingRight: '10px'
// },
// topLine: {
//     height: '20px',
//     width: '2px',
//     background: 'black',
//     marginLeft: '6px',
//     marginRight: '6px'
// },

card:{
  minHeight:'25rem',
  maxHeight:'100vh',
  display:'flex',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center',
  width: '50%',
  padding: '30px',
  marginTop: '10px',
  marginBottom: '10px',
},

avatar:{
  width: '30%',
  height:'30%'
  
}
})
export const Profile = () => {
  const [name,setName] = useState("Sakwe Betrandcliff")
  const [email,setEmail] = useState("fearless@gmail.com")
  const [cv,setCV] = useState("Betrandcliff.pdf")

  const [nameEdit,setNameEdit] = useState(false)
  const [emailEdit,setEmailEdit] = useState(false)
  const [cvEdit,setCvEdit] = useState(false)
  

  const style=ProfileStyle()
  return (
<Box>
    {
      TopDashboardNav("Profile")
    }

    <Box display='flex' justifyContent='center' alignItems='center' pt="1rem"  sx={
      {
        maxWidth:{
          xxs:'100vw',
          xs:'100vw',
          sm:'100%',

        }
      }
    } >
      <Card className={style.card} sx={{
      width:{xxs:'66vw',xs:'75vw',sm:'50%'},
      mr:{
        xxs:'10px',
        xs:'10px',
        sm:'0px',
      }

      }}>
        <Avatar  sx={{width:'30%',height: '20%'}} src={userImage} />
        <Box sx={{
          width:{
            xxs:'100%',
            xs:'100%',
            sm:'80%',
          },
        }}>

                      <Box display='flex' alignItems='center' mt='1rem'>
                        <Typography flex={0.5} paddingRight=' 10px'>Name: </Typography>
                        <Box flex={4} display='flex' justifyContent='space-between' alignItems='center'>
                          {nameEdit==false?<Typography sx={{paddingLeft:{
                            xxs:'10px',
                            xs:'10px',
                            sm:'0px',
                          }}}>{name}</Typography>:<TextField  label="Name" onChange={(e)=>setName(e.target.value)}/>

                          }
                          {
                            nameEdit==false?<Edit onClick={()=>setNameEdit(!nameEdit)}/>:<Done onClick={()=>setNameEdit(!nameEdit)}/>
                          }
                          </Box>
                      </Box>
                      
                      <Box display='flex' alignItems='center' mt='1rem'>
                        <Typography flex={0.5} paddingRight=' 10px'>Email: </Typography>
                        <Box flex={4} display='flex' justifyContent='space-between' alignItems='center'>
                          {emailEdit==false?<Typography 
                          sx={{paddingLeft:{
                            xxs:'10px',
                            xs:'10px',
                            sm:'0px',
                          }}}
                          >{email}</Typography>:<TextField  label="Email" onChange={(e)=>setEmail(e.target.value)}/>

                          }
                          {
                            emailEdit==false?<Edit onClick={()=>setEmailEdit(!emailEdit)}/>:<Done onClick={()=>setEmailEdit(!emailEdit)}/>
                          }
                          </Box>
                      </Box>
                      
                      <Box display='flex' alignItems='center' mt='1rem'>
                        
                        <Typography flex={0.5} paddingRight=' 10px'>CV: </Typography>
                        <Box flex={4} display='flex' justifyContent='space-between' alignItems='center'>
                          {cvEdit==false?<Typography 
                          sx={{paddingLeft:{
                            xxs:'10px',
                            xs:'10px',
                            sm:'0px',
                          }}}
                          >{cv}</Typography>:<Input disableUnderline type='file' onChange={(e)=>setCV(e.target.files[0].name)}/>

                          }
                          {
                            cvEdit==false?<Edit onClick={()=>setCvEdit(!cvEdit)}/>:<Done onClick={()=>setCvEdit(!cvEdit)}/>
                          }
                          </Box>
                      </Box>
                      

        </Box>
      
       
      </Card>
    </Box>



</Box>  )
}
