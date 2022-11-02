export function Label(props){
    return (
        <>
            <label htmlFor={props.for} className={props.className} > {props.content} </label>
        </>
    )
}
export function Input(props){
    const require = props.required === true ? true : false; 
    return (
        <>
            <input 
                type={props.type}
                name={props.name}
                className={props.className}
                aria-describedby={props.areaDesBy}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                required = {require}
            />
        </>
    )
}