const Greeting =(props) => {

    console.log(props);
    const agesentnce =`Your age is ${props.age}`;
    return <p>Hello {props.name}.{agesentnce}</p>;
}

export default Greeting;