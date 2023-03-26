
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import {  BookmarkOutlined, CorporateFare, DarkModeOutlined,  LinkOutlined,  LocationOnOutlined, NotificationsOutlined,  } from "@mui/icons-material"
import {  Typography,  Card, Box,  Button, createTheme } from "@mui/material"
import { TopDashboardNav } from './topDashboardNav'
import { grey } from "@mui/material/colors"

import data from '../common/data.json';


const useStyle = makeStyles({

  mainWrapper: {
      width: '100vw',
      height: '90vh',
      display: 'flex',
  },

  card: {
      height: '80vh'
  },

  detailcard_wrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
      
      alignItems: 'center',
      marginTop: '18px',
    
      '&::-webkit-scrollbar':{
        display:'none'
      }
  },


  detailcard: {
      
      
      maxHeight:'100vh',
        //  width:'60%',
      padding: '30px',
      marginTop: '10px',
      marginBottom: '10px',
      
    
      '&::-webkit-scrollbar':{
        display:'none'
      }
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
    //   height: ' 40px',
    //   width: '100%',
      display: 'flex',
      justifyContent: 'center',

      alignItems: 'center',
    //   marginTop: '20px',

      '&:hover': {

          background: 'blue',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'sans-serif',

      }
  },

  sidelinkwrapper: {
      width: '80%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
  },

  line: {
      height: '30px',
      marginRight: '6px',


      '&:hover': {
          background: 'red'
      }
  },

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
      marginLeft: '6px',
      marginRight: '6px'
  },

  detailcard_hearder: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
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
  }

/*  THIS IS FOR MOBILE RESPONSIVENESS OF THE APPLICATION  */

  


})



const theme = createTheme({
    breakpoints: {
        values: {
          xxs: 0, // small phone
          xs: 300, // phone
          sm: 600, // tablets
          md: 900, // small laptop
          lg: 1200, // desktop
          xl: 1536 // large screens
        }
      }
})


export const AppliedJobs = () => {
  const style = useStyle()
  const [showShort, setShowShort] = useState(0)
  

  return (
    <>
    
      
                    <Box >
                  {  TopDashboardNav("Applied Jobs")}
                  </Box>
                    <Box className={style.detailcard_wrapper}
                  
                    >
                        {
                            data.map((data)=>(

                                <Card key={data.id} className={style.detailcard} sx={{
                                    minHeight:{
                                        xxs:'8vh',
                                        xs:'8vh',
                                        sm:"18rem"
                                    },
                                    width:{
                                    xxs:'72vw',
                                    xs:"72vw",
                                    sm:'60%',
                                    md:'60%',
                                    ld:"50%"
                                },
                                mr:{
                                    xs:'10px',
                                    sm:'0px'
                                },
                                minHeight:{
                                    xs:'70vh',
                                    sm:'18rem'
                                    
                                },
                                overflow:'scroll'
                                
                                }}>
                                    <Box>
                                    <Box className={style.detailcard_hearder} sx={{
                                        flexDirection:{
                                        xs:"column",
                                        sm:"row",
        
                                            },
        
                                   
                                    justifyContent:{
                                        xxs:'space-evenly',
                                        xs:'normal',
                                        sm:'space-between',
                                    },
                                    alignItems:{
                                        // xxs:'space-evenly',
                                        // xs:'start',
                                        // sm:'center'
                                    },
                                    // outline: '2px solid grey',
                                    }}>
                                        <Box>
                                            <Typography variant="h5" fontSize="verysmall" pb='10px'>{data.title}</Typography>
                                            <Box display='flex' alignItems='center'>
                                                <CorporateFare fontSize="verysmall" />
                                                <Typography mr='10px'>{data.company}</Typography>
                                                <LocationOnOutlined fontSize="verysmall" />
                                                <Typography>{data.location}</Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' flexDirection='column'>
                                            <Box display='flex' alignItems='center'>
                                                <LinkOutlined mr='10px' fontSize="verysmall" />
                                                <Typography mr='10px'>Share</Typography>
                                                <BookmarkOutlined mr='10px' fontSize="verysmall" />
                                                <Typography mr='10px'>Save</Typography>
                                            </Box>
                                            <Typography>status: {data.status}</Typography>
                                        </Box>
                                    </Box>
                                    <Box className={style.horizontal_line} sx={{
                                        mt:{
                                            xs:'0px'
                                        }
                                    }}/>
        
        
                                    <Typography pt='10px'>Minimum Qualifications:</Typography>
                                    <Box display='flex' paddingLeft='10px' alignItems='start'>
                                        <Box className={style.dot} />
                                        <Typography variant='p' component='div' p='0px'>{data.minQualifications}</Typography>
                                    </Box>
                                    <Box display='flex' paddingLeft='10px' alignItems='start'>
                                        <Box className={style.dot} />
                                        <Typography variant='p' component='div' p='0px'>{data.note}</Typography>
                                    </Box>
                                    {showShort===data.id
                                        &&
                                        <>
                                            <Typography pt='10px'>Prefered Qualifications:</Typography>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>{data.prefQualifications}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>{data.prefQualifications}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>{data.note}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>{data.location}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>{data.note}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>{data.prefQualifications}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>Post Date{data.datePosted}</Typography>
                                            </Box>
                                            <Box display='flex' paddingLeft='10px' alignItems='start'>
                                                <Box className={style.dot} />
                                                <Typography variant='p' component='div' p='0px'>Close Date{data.dateClose}</Typography>
                                            </Box>
                                        </>
        
                                    }
        
                                    <Box display='flex' justifyContent='center' pt='30px'>{showShort !==data.id?<Button onClick={() => setShowShort(data.id)} >Expand</Button>:<Button onClick={() => setShowShort(0)} >Short</Button>}</Box>
                                </Box>
                                </Card>
                            ))
                        }
                        

                       
                       

                        
                        
                       
                       

                        
                      
                    </Box>
    </>
  )
}
