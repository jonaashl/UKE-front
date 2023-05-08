const ConvertedResultDisplay = (props) => {
    return (
        <div className="osg-text--size-foxtrot">
            {props.value ? `Ditt romertall ble konvertert til: ${props.value}` : "Ditt tall kommer her!"}
        </div>
    )
}

export default ConvertedResultDisplay
