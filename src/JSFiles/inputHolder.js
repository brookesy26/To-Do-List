const Input = ({ type, onChange, id, name, readOnly, placeholder, value }) => {
    return (
        <input type={type}
            onChange={onChange}
            id={id}
            name={name}
            readOnly={readOnly}
            placeholder={placeholder}
            value={value} />
    )
}

export default Input