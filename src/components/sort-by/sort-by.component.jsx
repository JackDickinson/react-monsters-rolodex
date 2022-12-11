import { Component } from 'react';
import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'name(a-z)', label: 'Alphabetically (a-z)' },
    { value: 'name(z-a)', label: 'Alphabetically (z-a)' }
  ]

// Functional Component

// const SortBy = () => (
//     <div className="sort-by">
//         <label>Sort By</label>
//         <select>
//             <option value="chooseOption">Choose Option</option>
//             <option value="name">Name</option>
//         </select>
//     </div> 
// );

// Class Component
class SortBy extends Component {

    render() {
     
        const { onChangeHandler } = this.props;
        
        return (
            <Select classNames={{
                container: (state) =>
                    state.isFocused ? 'mb-6 border-2 border-black transition-all duration-200' : 'transition-all duration-200 border border-black mb-6',
                control: (state) =>
                    'shadow-xl border-0 border-black hover:border-0',
                dropdownIndicator: (state) =>
                state.isFocused ? 'transform transition-all duration-200 rotate-180' : 'transform transition-all duration-200'

            }}
                onChange={onChangeHandler} options={options} />
        );
    };
};

export default SortBy;
