const ConvertedResultDisplay = (props) => {
    return <div>{props.value ? `Normalt nummer: ${props.value}` : "Skriv inn et romertall og klikk på knappen"}</div>
}

export default ConvertedResultDisplay
