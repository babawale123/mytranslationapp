import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components'
import Sidebar from '../Component/Sidebar';
import { translateAction } from '../action/translateAction'

const AppContainer = styled.div`
    position: relative;
    display:flex;
`

const TranslateContainer = styled.div`
   width: 100%;
   margin-left:200px;
   display:flex;
   align-items: center;
   flex-wrap: wrap;
   padding:70px;
`



const LanguagesContainer = styled.div`
    margin:5px;
    padding:90px;
    width: 400px;
    height: 400px;
    background:white;
    box-shadow: 0 0 10px rgba(0,0,0,0.07);
    border-radius:5px;
    display:flex;
    align-items: center;
    justify-content: center;
   
`

const TranslateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const SelectInput = styled.select`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`

const FormButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const SelectContainer = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin:10px;
`;

const Option = styled.option`
  padding: 10px;
`;

const TextAreaContainer = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none; 
`;

const Button = styled.button`
    padding:10px 80px;
    margin:10px;
    background-color:teal;
    border-radius:15px;
    color:white;
    cursor:pointer;
`

const InputFormContainer = styled.div`
    width:40%;
    height:65vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius:10px;
    padding:60px;
    margin:10px;
`
const OutPutFormContainer = styled.div`
    width:50%;
    height:65vh;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius:10px;
    padding:60px;
    margin:10px;
`

const Translate = () => {
    const [languages, setLanguages] = useState([])
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


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(source,target)
        dispatch(translateAction(source,target,text))
    }
  return (
    <AppContainer>
        <Sidebar />
            <TranslateContainer>
                <InputFormContainer>
                    <TranslateForm onSubmit={handleSubmit}>
                        <FormLabel>Select Source Country</FormLabel>
                        <SelectContainer onChange={(e)=>setSource(e.target.value)} value={source}>
                          <Option>select country</Option>
                          {Array.isArray(languages.languages) ? languages.languages.map((language,index)=>(
                            <Option key={index} value={language.code}>{language.name}</Option>
                          )):null}
                        </SelectContainer>

                        <FormLabel>Select Target Country</FormLabel>
                        <SelectContainer onChange={(e)=>setTarget(e.target.value)} value={target}>
                          <Option>select country</Option>
                          {Array.isArray(languages.languages) ? languages.languages.map((language,index)=>(
                            <Option key={index} value={language.code}>{language.name}</Option>
                          )):null}
                        </SelectContainer>

                        <TextAreaContainer onChange={(e)=>setWord(e.target.value)} rows={6} cols={6}>
                        </TextAreaContainer>

                        <Button>{loading ?'Translating.....':"Translate"}</Button>
                    </TranslateForm>
                </InputFormContainer>

                <OutPutFormContainer>
                            {error && <p style={{color:"red"}}>{error}</p>}
                      {Array.isArray(texts) ? texts.map((word,index)=>(
                        <p key={index}>{word.translatedText}</p>
                      )):null}
                </OutPutFormContainer>
            
            </TranslateContainer>
    </AppContainer>
  )
}

export default Translate