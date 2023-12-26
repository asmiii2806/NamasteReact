import React from 'react';
import ReactDOM from 'react-dom/client';

/*const parent= React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"},
[React.createElement("h1", {},"helo world"),
React.createElement("h1", {}, "helo world")]));*/

//react element 
const elem=<span>basics stuff</span>;
const parent=(<h1 className="head">
    {elem}
     Namaste react!!
     </h1>
     );



//functional component
const Title=()=>(<h1 className="head"> HII ALL!!</h1>);

const HeadingComponent=()=>         //functional componenet
(
    <div id="container">
        <Title/>  
        {Title()}
            
        {<h1>learning</h1>}                                                              
        {parent}    
     <h1>Namaste...</h1>
     </div>

);







const root=ReactDOM.createRoot(document.getElementById("root"));
 
// rednering a react element
//root.render(parent);

root.render(<HeadingComponent />);


