/* eslint-disable no-unused-vars */
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
				{name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
				{name: 'Carl W.', salary: 5000, increase: true, rise: false, id: 3},
			],
			term: '',
			filter: ''
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
            name, 
            salary,
            increase: false,
			rise: false,
            id: this.maxId++
        }
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term})
	}

	onChangeFilter = (filter) => {
		this.setState({filter})
	}


	onFilter = (filter) => {
		switch (filter) {
			case 'all':
				return this.searchEmp(this.state.data, this.state.term);
			case 'rise':
				return this.state.data.filter(item => {
					return item.rise
				});
			case 'higher':
				return this.state.data.filter(item => {
					return item.salary > 1000
				});
			default:
				return this.state.data;
		}
	}
    render() {
		const {data, filter,} = this.state;
		const visibleData = this.onFilter(filter);
		const employees = data.length;
		const increased = data.filter(item => item.increase).length;
		return (
			<div className="app">
				<AppInfo
					employees={employees}
					increased={increased}
				/>
	
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter onChangeFilter={this.onChangeFilter}/>
				</div>
	
				<EmployeesList 
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}/>
				<EmployeesAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;	