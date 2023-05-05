const ConvertedResultDisplay = (props) => {
    return <div>{props.value ? `Normalt nummer: ${props.value}` : "Ditt tall kommer her!"}</div>
}

export default ConvertedResultDisplay
