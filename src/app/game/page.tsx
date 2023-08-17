"use client"
import './game.scss';
import './keyboard.scss';
import Keyboard from "react-simple-keyboard";
import { Component, useState, useRef, useEffect } from 'react';


export default function Game()
{
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const [WriteText, setWriteText] = useState<string>("");

    const [displayedText, setDisplayedText] = useState<string>("demoText");
    const keyboard = useRef();
  
    const onChange = (onChangeInput:string) => {
      setWriteText(onChangeInput);
      
      };
  
    const handleShift = () => {
      const newLayoutName = layout === "default" ? "shift" : "default";
      setLayout(newLayoutName);
    };
  
    const onKeyPress = (button:string) => {
     
      if (button === "{shift}" || button === "{lock}") handleShift();
    };
  
    const onChangeInput = (event:any) => {
      const input = event.target.value;
      setInput(input);
    };

    useEffect(() => {
        // Funkcja obsługująca zdarzenie klawiatury
        const handleKeyPress = (event: KeyboardEvent) => {
          if (event.key) {
            setWriteText(prevWriteText => prevWriteText + event.key);
            const targetButton = document.querySelector('[data-skbtn="' + event.key + '"]');
            targetButton?.addEventListener('click', event => {})
            console.log(WriteText)
          }
        };

        // Dodaj nasłuchiwanie na zdarzenie klawiatury przy montażu komponentu
        window.addEventListener('keydown', handleKeyPress);
    
        // Funkcja zwrotna czyszcząca nasłuchiwanie przy demontażu komponentu
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

      useEffect(() => {
        console.log(WriteText)
      }, [WriteText])
    
    return(
    <div>
        <div className='typearea'> 
        <div className='display_words'>
            <h1>{displayedText}</h1>
        </div>
           <textarea defaultValue={WriteText} readOnly/>
           <div className='keyboard'>
                <Keyboard
                    layoutName={layout}
                   onKeyPress={onKeyPress}
                    />
            </div>
       </div>
    </div>)
}