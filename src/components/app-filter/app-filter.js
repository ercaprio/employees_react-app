/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component{
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 'tab1' 
		}
	}

	onChangeFilter = (e, tab) => {
		this.setState({
			activeTab: tab
		});
		this.props.onChangeFilter(e.target.getAttribute('data-filter'));
	}
    render() {
		const { activeTab } = this.state;
		return (
			<div className="btn-group">
				<button 
					className={activeTab === 'tab1' ? 'btn btn-light' : 'btn btn-outline-light'}
					type="button"
					data-filter="all"
					onClick={(e) => this.onChangeFilter(e, 'tab1')}>	
						Все сотрудники
				</button>
	
				<button 
					className={activeTab === 'tab2' ? 'btn btn-light' : 'btn btn-outline-light'}
					type="button"
					data-filter="rise"
					onClick={(e) => this.onChangeFilter(e, 'tab2')}>	
						На повышение
				</button>
	
				<button 
					className={activeTab === 'tab3' ? 'btn btn-light' : 'btn btn-outline-light'}
					type="button"
					data-filter="higher"
					onClick={(e) => this.onChangeFilter(e,'tab3')}>	
						З/П больше 1000$
				</button>
			</div>
		);
	}
}

export default AppFilter;