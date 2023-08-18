"use client"
import './game.scss';
import './keyboard.scss';
import Keyboard from "react-simple-keyboard";
import { Component, useState, useRef, useEffect } from 'react';


export default function Game()
{
    
    const [layout, setLayout] = useState<string>("default"); /*layout klawiatury */
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
  


    useEffect(() => {
        // Funkcja obsługująca zdarzenie klawiatury
        const handleKeyPress = (event: KeyboardEvent) => {
          if (event.key) {
            setWriteText(prevWriteText => prevWriteText + event .key);
            const targetButton = document.querySelector('[data-skbtn="' + event.key.toString() + '"]');
            targetButton?.classList.add("hg-activeButton");
            setTimeout(() => {
              targetButton?.classList.remove("hg-activeButton");
            }, 100);
            
          }
        };

        // nasłuchiwanie na zdarzenie klawiatury przy montażu komponentu
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