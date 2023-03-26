import React,{useState} from 'react'
import {Typography, Box,Card, Button } from "@mui/material"
import { DarkModeOutlined,Menu,NotificationsOutlined } from "@mui/icons-material"
import { makeStyles } from '@mui/styles'
import { Link} from "react-router-dom"
import { ArrowForwardIosOutlined, } from "@mui/icons-material"



const SettingStyle = makeStyles({
    topBar: {
        height: '9vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        paddingRight: '10px'
    },
    topLine: {
        height: '20px',
        width: '2px',
        background: 'black',
        marginLeft:'2px',
        marginRight:'2px',
    },
  
  
  })

export const TopDashboardNav = (page) => {
    const style=SettingStyle()
    const [active,setActive]= useState('appliedJobs')
  return (
    <Box sx={{
     
      // justifyContent:'end',
      display:{
        xxs:"block",
        xs:'block',
        md:'block'
      },
      minWidth:{
        xxs:'100vw',
        xs:'100vw',
        sm:'100%',
      }
    }} >
         <Card className={style.topBar} sx={{width:{xxs:'92vw',xs:'92vw',sm:'100%'}}} >
         <Menu sx={{
      display:{
        xxs:"block",
        xs:'block',
        md:'none'
      },
      pl:'10px'
    }} />
                        <Typography  variant='h6' pl='5px' sx={{
        display:{
          // xxs:"none",
          // xs:'none',
          // md:'block'
        }
    }} >{page}</Typography>

       
                        <Box display='flex' alignItems='center'>
                     
                            <Button ><NotificationsOutlined /></Button>
                            <Box className={style.topLine} />
                           <Button sx={{paddingRight:'10px'}}> <DarkModeOutlined /></Button>
                        </Box>
        </Card>

        {/* <Box sx={{
          display:{
            xxs:'block',
            sm:'none'
          }
        }}>
                    <Link to='/' className={style.sidelinks} onClick={()=>setActive("appliedJobs")} >
                            <Box className={style.sidelinkwrapper}>
                                <Box className={style.line} flex='0.04' sx={active=="appliedJobs"?{background:'red'}:{background:'transparent'}}/>
                                <Typography flex='2'> Applied Jobs</Typography>

                                <ArrowForwardIosOutlined flex='0.1' fontSize="small" />
                            </Box>
                            </Link>

                             <Link to='/profile' className={style.sidelinks} onClick={()=>setActive("profile")}>
                            <Box className={style.sidelinkwrapper} >
                                <Box className={style.line} flex='0.04' sx={active=="profile"?{background:'red'}:{background:'transparent'}} />
                                <Typography flex='2'> Profile</Typography>

                                <ArrowForwardIosOutlined flex='0.1' fontSize="small" />
                            </Box>
                            </Link>
                            
                            <Link to='/jobs' className={style.sidelinks}  onClick={()=>setActive("jobs")}>
                            <Box className={style.sidelinkwrapper}>
                                <Box className={style.line} flex='0.04' sx={active=="jobs"?{background:'red'}:{background:'transparent'}} />
                                <Typography flex='2'> Jobs</Typography>

                                <ArrowForwardIosOutlined flex='0.1' fontSize="small" />
                            </Box>
                            </Link>
        </Box> */}
    </Box>
  )
}
