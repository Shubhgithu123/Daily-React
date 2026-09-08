function App(){
let count = 0;


function incrementCounter(){
  count++;
  const p = document.querySelector("p");

  p.textContent = `Count : ${count}`

  
}

return (
  <>
  <p>Count : 0</p>

  <button onClick={incrementCounter}>Increment</button>
  </>
)
}


export default App;