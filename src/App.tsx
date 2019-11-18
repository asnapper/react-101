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

    return <EditableSelect
        options={options}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        onChange={handleChange}
    />
}

export default App