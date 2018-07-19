import React from 'react';
import News from './components/news';
import Button from './components/button';

let one = [
    {
    title: '新闻',
    list: ['新闻列表', '新闻列表', '新闻列表']
    },
    {
    title: '娱乐',
    list: ['娱乐列表', '娱乐列表', '娱乐列表']
    }, {
    title: '体育',
    list: ['体育列表', '体育列表', '体育列表']
    }
]

class App extends React.Component {


    render(){
        return (
            <div>
              <Button color = 'gray'/>
          </div>
        );
    }
}

export default App;
