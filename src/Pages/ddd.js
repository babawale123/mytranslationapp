import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../Component/Flex'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { translateAction } from '../action/translateAction'

const Container = styled.div`
 padding:60px;
 margin:20px 50px;
 height:70vh;

 @media(max-width:768px){
    flex-direction:column;
 }
 `

const Left = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    padding:60px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.02);
    height:60vh;
    background-color:teal;

    @media(max-width:768px){
        margin:15px;
        
     }
    
`
const Header = styled.h1`
    text-align:center;
    font-size:4rem;
    font-weight:900;
    color:white;

`

const Right = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    box-shadow:0 0 10px rgba(0,0,0,0.15);
    padding:60px;
    border-radius:15px;

    @media(max-width:768px){
        margin:15px;
        z-index:1;
     }

  `
const Input = styled.input`
    margin:10px;
    width:100%;
    border-radius:15px;
    padding:20px;
`
const Button = styled.button`
    padding:10px 80px;
    margin:10px;
    background-color:teal;
    border-radius:15px;
    color:white;
`
const Label = styled.label`

`




const Registration = () => {
    const [languag, setLanguages] = useState([])
    const [source, setSource] = useState("")
    const [target, setTarget] = useState("")
    const [text, setWord] = useState("")
    const dispatch = useDispatch()
    const translate = useSelector((state)=>state.translate)
    const {loading,error,texts} = translate
  
    useEffect(() => {
        const config = {
          headers: {
            'X-RapidAPI-Key': 'b913fd172emsh3aaf89d78bcf48dp193478jsn1f12621a4421',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
          },
        };
    
        const fetchData = async () => {
          try {
            const response = await axios.get(
              'https://text-translator2.p.rapidapi.com/getLanguages',
              config
            );
            // The response.data is already the actual data, no need to destructure it again
            console.log(response.data.data);
            setLanguages(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleSubmit = async(e) => {
            e.preventDefault();
            console.log(source,target,text)
           dispatch(translateAction(source,target,text))
      }
    
      return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                    <h3>Source Language</h3>
                    <select onChange={(e)=>setSource(e.target.value)} value={source}>
                    <option value="" selected disabled hidden>Select language</option>
                    {Array.isArray(languag.languages) && languag.languages.length > 0 ? (
                        languag.languages.map((language, index) => (
                            <option value={language.code}>{language.name}</option>
                            ))
                            ) : (
                                <p>Loading or No Data</p>
                                )}
                    </select>
            
                        <br />
                        <br />
                        <br />
                    <h3>target Language</h3>
                    <select onChange={(e)=>setTarget(e.target.value)} value={target}>
                    <option value="" selected disabled hidden>Select language</option>
                    {Array.isArray(languag.languages) && languag.languages.length > 0 ? (
                        languag.languages.map((language, index) => (
                            
                            <option value={language.code}>{language.name}</option>
                            ))
                            ) : (
                                <p>Loading or No Data</p>
                                )}
                    </select>
                    <br />
                    <br />
                    <input type='text' name='inputText' onChange={(e)=>setWord(e.target.value)} value={text} />
                    <br />
                    <Button>Submit</Button>
                    <p> {Array.isArray(texts) && texts.length > 0 ? (
                        texts.map((text, index) => (
                           <p>{text.translatedText}</p>
                            ))
                            ) : (
                                <p>Loading or No Data</p>
                                )}</p>
            </form>
      </div>
      );
}

export default Registration