/* eslint-disable no-unused-vars */
import './employees-list.css'
import EmployeesListItem from '../employess-list-item/employees-list-item';


const EmployeesList = ({data}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem key={id} {...itemProps}/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployeesList;