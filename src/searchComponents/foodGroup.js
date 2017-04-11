import React from 'react';
import Select from 'react-select';

//Select component to make it easier to look for food groups
var FoodSearch = React.createClass({
	propTypes: {
      options: React.PropTypes.array,
      updateCB: React.PropTypes.func
    },
    getData: function() {
        return this.state.value;
    },
    getInitialState () {
		return {
			value: [],
		};
	},
	handleSelectChange (value) {
		this.setState({value});
	},
	render () {
		return (
				<Select
				multi 
				simpleValue
				valueKey="ID"
				labelKey="NAME" 
				placeholder="Select Food Group" 
				value={this.state.value}
				options={this.props.options}
				onChange={this.handleSelectChange} />
		);
	}
});

module.exports = FoodSearch;