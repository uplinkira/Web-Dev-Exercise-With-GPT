//Map To Generate Child Buttons
// functional component
const App = () => {
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// numbers of button
    const handler = () => alert(`hello world`);
    let list = a.map((item, index) => {
        return <button key={index} onClick={handler}>{item}</button>
    });
    return <div>{list}</div>;
};
const MyButton = ({ onClick }) => {
    let { Button } = ReactBootstrap;
    return <Button onClick={onClick}>Click me</Button>;
};

//--------------------------------
ReactDOM.render(<App />, document.getElementById('root'));