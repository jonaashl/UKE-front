const ConvertedResultDisplay = (props) => {
    return <div>{props.value ? `Ditt romertall ble konvertert til: ${props.value}` : "Ditt tall kommer her!"}</div>
}

export default ConvertedResultDisplay
