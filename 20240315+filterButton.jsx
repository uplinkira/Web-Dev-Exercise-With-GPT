const App = () => {
    const { useState } = React;
    //This line extracts the useState hook from the React object, making it available for use within your component. useState is a React hook that lets you add React state to functional components.此行从 React 对象中提取 useState 挂钩，使其可以在组件中使用。 useState 是一个 React 钩子，可让您向功能组件添加 React 状态。

    let [state, setState] = useState([1, 2, 3, 4]);
    //state: The first element of the array, state, represents the current state value. In this case, it's initialized to [1, 2, 3, 4]. state ：数组的第一个元素 state 表示当前状态值。在本例中，它被初始化为 [1, 2, 3, 4] 。
    // setState: The second element, setState, is a function that you can use to update the state. setState ：第二个元素 setState 是一个可用于更新状态的函数。


    const handler = index => {
        let newState = state.filter(item => item != index);
        //code to update state and remove destroyed button
        // [1, 3, 4]
        // let newState = state.filter(item => item != index);: This line creates a new array named newState by filtering the current state array. The filter method iterates over the state array and includes only those elements (item) that do not match the given index. let newState = state.filter(item => item != index); ：此行通过过滤当前的 state 数组创建一个名为 newState 的新数组。 filter 方法迭代 state 数组，并仅包含那些与给定 index 不匹配的元素 ( item )。

        console.log(newState); 
        setState(newState);
        //updating the component's state to exclude the clicked item.更新组件的状态以排除单击的项目。
        // When setState is called, the App component's state is updated, triggering a re-render.当调用 setState 时， App 组件的状态会更新，从而触发重新渲染。
    };

    //state.map((item, index) => { ... }): The map function is used to iterate over the state array. For each element in the array (item), and its index (index), the map function transforms the item into a new element, in this case, a MyButton React component. state.map((item, index) => { ... }) ： map 函数用于迭代 state 数组。对于数组中的每个元素 ( item ) 及其索引 ( index )， map 函数会将该项转换为新元素，在本例中，一个 MyButton React 组件。
    let list = state.map((item, index) => {
        return <MyButton onClick={() => handler(item)} key={index}></MyButton>
        //During re-rendering, map processes the updated state array (which now excludes the clicked item), generating a new list of MyButton components that no longer includes the clicked button.在重新渲染期间， map 处理更新的 state 数组（现在排除了单击的项目），生成一个新的 MyButton 组件列表，该列表不再包含单击按钮。
    });
    return <div>{list}</div>
};

const MyButton = ({onClick}) => {
    let { Button } = ReactBootstrap;
    return <Button onClick={onClick}>Click Me</Button>
};

//----------------------------------------------

ReactDOM.render(<App/>, document.getElementById('root'));