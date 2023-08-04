function Joke(props){
    const [isShown,setIsShown]=React.useState(false)
    function toggle(){
        setIsShown(prevShown => !prevShown)
    }
 /* 
 const [messages,setMassages]=React.useState(["a","b"])
  */  return (
       <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>}
        <button onClick={toggle} >{isShown ? "Hide" :"Show"} Punchline</button>
        <hr/>
        </div>
      /*   <div>
            {messages.length != 0 &&<h1> you have unread messages !</h1>}
        </div>*/
    )
}