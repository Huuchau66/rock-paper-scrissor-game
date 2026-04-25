import React,{useState} from 'react'
import "./App.css"

function App() {
    const [result,setResult] = useState("");
    const [computer,setComputer] = useState("");
    const [player,setPlayer] = useState("");

    const choices = ['rock','paper','Scissor']

    const playGame = (userChoices)=>{

        const randomChoices = choices[Math.floor(Math.random()*3)]
        setPlayer(userChoices);
        setComputer(randomChoices);

        if(userChoices===randomChoices){
            setResult('Draw 🤝')
        } else if (
            (userChoices ==="rock" && randomChoices === "Scissor") || (userChoices ==="paper" && randomChoices === "rock")||  (userChoices ==="Scissor" && randomChoices === "paper")
        ){setResult('You Win 🎉 ')} else {setResult('You Lose 😢')}
        }
    
    
  return (
    <div className='container'>
      <div className='game'>
        <h1>Rock-Paper-Scissor-Game</h1>
        <strong>USER VS COMPUTER</strong>
        <div><span>Player choices:{player}</span><span> VS </span><span>Computer choices:{computer}</span></div>
        
        <span className='result'>{result}</span>
        <div className='item'>
            <span onClick={()=>playGame('Scissor')} className='item1' >✌</span>
            <span onClick={()=>playGame('rock')} className='item1'>✊</span>
            <span onClick={()=>playGame('paper')} className='item1'>🖐</span>
        </div>
        
      </div>
    </div>
  )
}

export default App
