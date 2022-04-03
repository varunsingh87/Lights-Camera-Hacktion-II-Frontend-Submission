export default function Input({name}) {

    return (
        <div>
            <label>{name}</label>
            {props.children}
        </div>
    )
}