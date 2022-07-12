const Total = ({parts}) => {
    const initialValue = 0;
    const total = parts.reduce(
        (previousValue, currentValue) => 
        {
        return previousValue + currentValue.exercises
        }, initialValue
    );
    
    return(
        <strong>Number of exercises {total}</strong>
    )   
}
export default Total