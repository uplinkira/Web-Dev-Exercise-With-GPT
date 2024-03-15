//Map To Generate Child Buttons
// key is used within the map function to assign a unique identifier to each MyButton component created in the list. key 在 map 函数中使用，为列表中创建的每个 MyButton 组件分配唯一标识符。
// By providing a unique key for each component, React can track each MyButton component individually in the DOM. If the list changes (for example, if an item is added or removed), React can efficiently update the DOM by only modifying the components that changed, rather than re-rendering the entire list of components.通过为每个组件提供唯一的 key ，React 可以在 DOM 中单独跟踪每个 MyButton 组件。如果列表发生变化（例如，添加或删除某个项目），React 可以通过仅修改发生变化的组件来有效地更新 DOM，而不是重新渲染整个组件列表。

// functional component
const App = () => {
    let a = [1, 2, 3, 4];// numbers of button
    const handler = e => alert(`button: ${e.target.getAttribute('index')}`);
    //This function is used as an event handler and makes use of the closure concept by capturing the e (event) object from its surrounding execution context when called upon a button click. However, the function directly accesses the event's properties (e.target) to get the button's index. The closure here is more about capturing the event context than capturing lexical scope variables like the index.此函数用作事件处理程序，并通过在单击按钮时调用时从其周围的执行上下文捕获 e （事件）对象来利用闭包概念。但是，该函数直接访问事件的属性 ( e.target ) 以获取按钮的索引。这里的闭包更多的是捕获事件上下文，而不是捕获像 index 这样的词法范围变量。=>20240314+mapClosure.jsx
    let list = a.map((item, index) => {
        return <MyButton index={index} onClick={handler} key={item}></MyButton>
    });
    //key={item} assigns a unique key to each MyButton component, which is the value of item from the array a. key={item} 为每个 MyButton 组件分配一个唯一的键，它是数组 a 中 item 的值。
    //each onClick handler is the same function instance. The difference between button actions is determined by the index attribute fetched from the event's target in the handler function, not by using different function instances.每个 onClick 处理程序都是同一个函数实例。按钮操作之间的差异由从 handler 函数中的事件目标获取的 index 属性确定，而不是通过使用不同的函数实例来确定。=>20240314+mapClosure.jsx
    return <div>{list}</div>;
};
//It uses destructuring in the parameter list to directly extract onClick and index properties from the props object passed to the component. 在参数列表中使用解构来直接从传递给组件的 props 对象中提取属性。
//This means MyButton expects to receive onClick and index as its properties (props).这意味着 MyButton 期望接收 onClick 和 index 作为其属性.

const MyButton = ({ onClick, index }) => {
    let { Button } = ReactBootstrap;
    //This line destructures the ReactBootstrap object to get the Button component. It's a way to import the Button component from the ReactBootstrap library so it can be used in this component.此行解构 ReactBootstrap 对象以获取 Button 组件。这是一种从 ReactBootstrap 库导入 Button 组件的方法，
    return (
        <Button index={index} onClick={onClick}>
            Click me
        </Button>
    );
    // The onClick prop in MyButton is then passed down to the Button component. This onClick in MyButton is actually the handler function from App.
    //MyButton 中的 onClick 属性随后被传递到 Button 组件。 MyButton 中的 onClick 实际上是 App 中的 handler 函数。
    // In the App component, handler is an arrow function that gets triggered on a click event and shows an alert with the button index.
    //在 App 组件中， handler 是一个箭头函数在单击事件时触发并显示带有按钮索引的警报。
};

//--------------------------------
ReactDOM.render(<App />, document.getElementById('root'));