export default function Input({name, children}) {

    return (
        <div>
            <label>{name}</label>
            {children}
        </div>
    )
}