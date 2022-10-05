import "./App.css";
import CompCls from "./Task1/Compcls";
import CompFunA from "./Task1/CompFunA";
import ComponantClsTsk02 from "./Task2/ComponantClsTsk02";
import ComponantTsk2 from "./Task2/ComponantTsk2";
import CompClsTsk3 from "./Task3/CompClsTsk3";
import CompFunTsk3 from "./Task3/CompFunTsk3";
function App() {
  return (
    <div className="Props ">
      <h2>task 1</h2>
      <p>
        {" "}
        Pass a property named username from Top class component to down most
        class component in the component hierarchy and print it.
      </p>
      <CompCls username="Alice" />
      <hr />
      <h2>task 1</h2>
      <p>
        {" "}
        Pass a property named username from Top Function component to down most
        function component in the component hierarchy and print it.
      </p>
      <CompFunA username="alice" />
      <hr />
      <h2>Task 2</h2>
      <p>
        {" "}
        Make a class component as child of App.js and pass your name as prop,
        then "Hello name" must be printed.
      </p>
      <ComponantClsTsk02 name="Alice" />
      <hr />
      <h2>Task 2_Cls_Componant</h2>
      <p>
        {" "}
        Make a Function component as child of App.js and pass your name as prop,
        then "Hello name" must be printed.
      </p>
      <ComponantTsk2 name="Alice" />
      <hr />
      <h2>Task 3 By class Componant</h2>
      <p>Make a parent class component and pass two numbers and an operator as props to its child component. The child component must perform the operation on the two numbers and print it.</p>
      <CompClsTsk3 num1="10" num2="15" opr="+"/>
      <hr />
      <h2>Task 3 By Function Componant</h2>
      <p>Make a parent Function component and pass two numbers and an operator as props to its child component. The child component must perform the operation on the two numbers and print it.</p>
      <CompFunTsk3 num1="10" num2="15" opr="+"/>
    </div>
  );
}

export default App;
