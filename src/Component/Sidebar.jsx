import React from 'react'
import { styled } from 'styled-components'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {AiOutlineTranslation,AiTwotoneAudio,AiOutlineLogout} from 'react-icons/ai'
import {FaBlogger} from 'react-icons/fa'
import {GiWhiteBook} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { userLogoutAction } from '../action/userAction'


const SidebarContainer = styled.div`
    position:fixed;
    padding:30px 0;
    width:200px;
    height:100vh;
    background-color:#4b4267;
    h2 {
        text-align:center;
        padding:30px;
        color:white;
    }
    ul li {
        padding:20px;
        border-top:1px solid  #4b4249;
        border-bottom:1px solid #4b4245;
        color:white;
        display:flex;
        align-items:center;
        gap:7px;
        font-weight:600;
        &: hover {
            background-color:white;
            color:black;
        }
        
    }
`

const Sidebar = () => {

    const handleLogout = () => {
        dispatchEvent(userLogoutAction())
    }
  return (
    <SidebarContainer>
        <h2>WRConcept</h2>
        <ul>
        <Link to='/dashboard'> <li><MdOutlineDashboardCustomize/>Dashboard</li></Link>
        <Link to='/translate'> <li><AiOutlineTranslation/><a>Language Translate</a></li></Link>
            <li><AiTwotoneAudio/><a>Text/Audio converter</a></li>
            <li><FaBlogger /><a>Blog Generator</a></li>
            <Link><li><GiWhiteBook/><a>eBook Generator</a></li></Link>

            <Link to='/' onClick={handleLogout}>
                <li><AiOutlineLogout/>Logout</li>
            </Link>
        </ul>
    </SidebarContainer>
  )
}

export default Sidebar