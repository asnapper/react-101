import * as React from 'react'

export interface EditableSelectProps {
    options: string[]
    selectedIndex: number
    onSelect: (selectedIndex: number) => void
    onChange: (value: string) => void
}

export const EditableSelect = (props: EditableSelectProps) => {
    const [ selectedValue, setSelectedValue ] = React.useState('')

    const handleSelect = (event) => props.onSelect(event.target.selectedIndex) // index change always calls parent comp method
    const handleChange = (event) => setSelectedValue(event.target.value) // track current edit state locally
    const handleSave = () => props.onChange(selectedValue) // parent handler only called on explicit save
    
    // reset edit state if options or selected index change
    React.useEffect(() => {
        setSelectedValue(props.options[props.selectedIndex])
    }, [props.options, props.selectedIndex])

    // very unspohisticated rendering, either use some css magic or render either select or input
    // whatever floats your boat
    return <>
        <select onChange={handleSelect} value={props.selectedIndex}>
            {props.options.map((option, index) => (
                <option key={index} value={index}>{option}</option>
            ))}
        </select>
        <input type="text" value={selectedValue} onChange={handleChange} />
        <button onClick={handleSave}>save</button>
    </>
}

export default EditableSelect