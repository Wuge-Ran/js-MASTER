import React,{Component} from 'react';
import './index.css';
import Footer from './components/footer';
import Header from './components/header';
import List from './components/list';



class App extends Component {
	render(){
		return <section className="todoapp">
					<Header/>
					<List/>
					<Footer/>
				</section>	
	}
}

export default App;