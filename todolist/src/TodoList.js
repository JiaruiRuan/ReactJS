import React, {Component ,  Fragment } from 'react'
import './style.css';


class TodoList extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			inputValue: '',
			list: []
		}
	}


	render() {
		return (
	
			<Fragment>
				 {/*here it is JSX, and it is a component*/}
				<div> 
					<label for = "insertArea">
						 input:
					</label>
					<input 
						id = "insertArea"
						className = 'input'
						value = {this.state.inputValue} 
						onChange = {this.handleInputChange.bind(this)}
					/>
					<button onClick = {this.handleBtnClick.bind(this)}> submit</button>
				</div>

				<ul>
					{
						this.state.list.map((item, index) =>{
							return (
							
							<li
							 	key = {index} 
							 	onClick={this.handleItemDelete.bind(this, index)}
							 	dangerouslySetInnerHTML = { {__html: item} }
							>
							</li>

							)
							
						})
					}
				</ul>

			</Fragment>
		)
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleBtnClick() {
		this.setState({
			list:[...this.state.list, this.state.inputValue],
			inputValue: ''
		})
	}

	handleItemDelete(index) {
		const tmp = [...this.state.list];
		tmp.splice(index,1);

		this.setState({
			list: tmp
		})

	}
}

export default TodoList;