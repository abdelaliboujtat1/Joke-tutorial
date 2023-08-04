function App(){
  
    const result=data.map(item=>{
        return (
    <div>
        <Joke
          
            {...item}
          
        />
    </div>)})
    return( 
    <div>
        {result}
    </div>
    )
   /* return <Joke/>*/
}