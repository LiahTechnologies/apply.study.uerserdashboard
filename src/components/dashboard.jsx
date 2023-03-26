import { ArrowForwardIosOutlined, } from "@mui/icons-material"
import { Typography,  Card, Box, Avatar, createTheme,  } from "@mui/material"
import { makeStyles, styled, ThemeProvider } from "@mui/styles"

import { Link, Route, Routes,} from "react-router-dom"
import { AppliedJobs } from "./appliedJobs"
import { Profile } from "./profile"
import {  Jobs, Settings } from "./Jobs"
import userImage from '../common/images/user.jpg'
import { useState } from "react"


const theme = createTheme({
    breakpoints: {
        values: {
          xxs: 0, // small phone
          xs: 300, // phone
          sm: 400, // tablets
          md: 900, // small laptop
          lg: 1200, // desktop
          xl: 1536 // large screens
        }
      }
})

const useStyle = makeStyles({

    mainWrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        // overflowX:"hidden"
    },

    

    detailcard_wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '88vh',
        overflowY: 'scroll',
        alignItems: 'center',
        marginTop: '18px',
        scrollbarWidth: '0px',
        '&::-webKetScrollBar': {
            display: 'none'
        }
    },


    detailcard: {
        
        minHeight:'18rem',
     
        width: '60%',
        padding: '30px',
        marginTop: '10px',
        marginBottom: '10px',
        background: 'brown',
        // display:'block',
        // overflow: 'scroll',

    },

    image: {

        display: 'flex',
        justifyContent: "center",

    },

    logocontainer: {
        display: 'flex',
        justifyContent: "center",
        marginBottom: '1rem',
        marginTop: '1rem'

    },

    logoTextColorBlue: {
        color: 'blue',
        fontWeight: 'bold',

    },

    logoTextColorRed: {
        color: 'red',
        fontWeight: 'bold'
    },

    sidelinks: {
        height: ' 40px',
        // width: '100%',
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        marginTop: '20px',

        '&:hover': {

            background: 'blue',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',

        },

       
    },
    sideBar:{
        // '@media screen (maxwidth:750px)':{
        //     display:'none'
        // }
    }
    ,
    sidelinkwrapper: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    line: {
        height: '30px',
        marginRight: '6px',

    },

    topBar: {
        height: '9vh',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '10px',
        paddingRight: '10px'
    },

    topLine: {
        height: '20px',
        width: '2px',
        background: 'black',
        marginLeft: '6px',
        marginRight: '6px'
    },

    detailcard_hearder: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },

    horizontal_line: {
        height: '2px',
        width: '100%',
        background: "black",
        marginTop: '10px',
    },

    dot: {
        width: '12px',
        height: '8px',
        borderRadius: '50%',
        background: 'black',
        marginRight: '10px',
        marginTop: '5px'
    },






})
const Dashboard = () => {
    const style = useStyle()

    const [active,setActive]= useState('appliedJobs')

    

    return (
        <ThemeProvider theme={theme} >
            <Box className={style.mainWrapper} >
                <Box flex='0.8' 
                sx={{

                      display:{
                        xxs:'none',
                        xs:'none',
                        sm:'block',
                      }
                   
                }} >
                    <Card sx={{height: '100vh',width: '90%'}}>
                        <Box className={style.logocontainer}>
                            <Typography className={style.logoTextColorBlue} variant="h6" component='div'>TEK</Typography>
                            <Typography className={style.logoTextColorRed} variant="h6" component='div'>STEDIA</Typography>
                        </Box>
                        <Box className={style.image}>

                            <Avatar alt="image" src={userImage}  sx={{ width: '40%', height:'30%'}}/>
                        </Box>


                        {/*  THIS PART IS FOR THE SIDELINKS OF THE  DASHBOARD */}

                        
                       
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
                        
                        

                    </Card>
                </Box>
                <Box flex='4' ml='10px'  >

                    {/*  THIS IS THE  TOP BAR OF THE PAGE  */}
                    

                    <Routes>
                        <Route path="/" Component={AppliedJobs}/>
                    </Routes>
                    <Routes>
                        <Route path="/profile" Component={Profile}/>
                    </Routes>
                    <Routes>
                        <Route path="/jobs" Component={Jobs}/>
                    </Routes>



                   
                </Box>

            </Box>
         </ThemeProvider>
    )
}

export default Dashboard




