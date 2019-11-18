import * as React from 'react'
import EditableSelect from './EditableSelect'
export const App = () => {

    // options should be bound to redux store
    const [ options, setOptions ] = React.useState([
        'test1',
        'test2',
        'test3',
        'test4'
    ])

    // options are tracked in local state
    const [ selectedIndex, setSelectedIndex ] = React.useState(3)

    // handle change should trigger redux action
    const handleChange = (value) => {
        setOptions(options.map((option, index) => {
            if (selectedIndex === index) {
                return value
            }
            return option
        }))
    }

    const handleDelete = () => {
        setOptions(options.filter((option, index) => {
            return index != selectedIndex
        }))
        setSelectedIndex(selectedIndex - 1 < 0 ? 0 : selectedIndex - 1)
    }

    return <EditableSelect
        options={options}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onChange={handleChange}
        onDelete={handleDelete}
    />
}

export default App