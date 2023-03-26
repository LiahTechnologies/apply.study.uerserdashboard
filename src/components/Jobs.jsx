import React from 'react'
import {Typography, Box,Card } from "@mui/material"
import { DarkModeOutlined,NotificationsOutlined } from "@mui/icons-material"
import { makeStyles } from '@mui/styles'
import { TopDashboardNav } from './topDashboardNav'

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
        marginLeft: '6px',
        marginRight: '6px'
    },
  
  
  })
export const Jobs = () => {
    
  return (
  <Box>
         {TopDashboardNav("Jobs")}
         <Typography variant='h6' textAlign='center'> Jobs
          </Typography>
  </Box>
  )
}
