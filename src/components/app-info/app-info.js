/* eslint-disable no-unused-vars */
import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
		<div className="app-info">
			<h1>Учетт сотрудников в компании N</h1>	
			<h2>Общее чисдо сотрудников: {employees}</h2>		
			<h2>Премию получат: {increased}</h2>
		</div>
	);
}

export default AppInfo;