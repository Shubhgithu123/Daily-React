// // const element = React.createElement("h1",{id:'title'},"hello shubham");

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(element);
// const obj = {
//     name:"shubham",
//     age:23
// }

// //{} used to write javascript expression 
// //text/element

// // we can write array , object cannot be directly displayed or rendered
// //Number , string ,array
// //true false ,null undefined (renedered but not displayed )
// //object : Error
// // let element = <h1>Shubham wangekar{obj.name + " " + obj.age}</h1>;


// // example
// const age = 10;
// // const element = <h1>Hello coder {age>10 ? "Adult" : "Kid"}</h1>

// //rendering array

// const courses = ["HTML","CSS","JAVASCRIPT","REACT"];

// // const one = (
// //     <ul>
// //         {courses.map((course)=>{
// //             return React.createElement("li",null,course)
// //         })}
// //     </ul>
// // )

// const one = (
//     <ul>
//         {courses.map((course)=>{
//             return <li>{course}</li>
//         })}
//     </ul>
// )

// console.log(one)
// const element = <h1>Hello coder {<b style={{color:"grey"}}>{age}</b>} </h1>



function Header(props){
    console.log(props)
    return (
        <h1>{props.name} Welcome to Incdian Election Comission</h1>
    )
}

function Main(){
    return (
        <h2>This is information about us</h2>
    )
}

function Footer(){
    return(
        <h3>Thanks for visiting out website</h3>
    )
}

function App(){

    return (
        <>
        <Header name="Rohit"></Header>
        <Main></Main>
        <Footer></Footer>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)

