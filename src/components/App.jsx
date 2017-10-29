import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			questions: [{
				id: 1,
				text: 'What is your name?',
				choices: [
					{
						id: 'a',
						text: 'Michael'
					},
					{
						id: 'a',
						text: 'Andrew'
					},
					{
						id: 'a',
						text: 'Timmy'
					}
				],
					correct: 'b'
			},
			{
				id: 2,
				text: 'What is your sister\'s name?',
				choices: [
					{
						id: 'a',
						text: 'Ann'
					},
					{
						id: 'a',
						text: 'Donna'
					},
					{
						id: 'a',
						text: 'Misty'
					}
				],
					correct: 'c'
			},
			{
				id: 3,
				text: 'What is your dad\'s name?',
				choices: [
					{
						id: 'a',
						text: 'Bruce'
					},
					{
						id: 'a',
						text: 'Brogrammer'
					},
					{
						id: 'a',
						text: 'Bob'
					}
				],
					correct: 'a'
			}
		],
		score: 0,
		current: 1
	}
}



	render(){
		return(
			<div>
				<QuestionList {...this.state} />
			</div>
		)
	}
}
export default App