/* eslint-disable no-unused-vars */
import './employees-list.css'
import EmployeesListItem from "../employess-list-item/employees-list-item";


const EmployeesList = ({data}) => {

	const elements = data.map(item => {
		return (
			<EmployeesListItem {...item}/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployeesList;