import React,{Component} from 'react' ;
import className from 'classnames';

class Footer extends Component {
    render(){
        let {length,hash} = this.props;
        console.log(hash+'123')
        return<footer className="footer">
        <span className="todo-count">
          <strong> {length} </strong>
          <span>item left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              className={className({
                selected:hash == 'all'
              })}
              href="#/all"
            >All</a>

          </li>
          <li>
            <a
            href="#/active"
            className={className({
              selected:hash == 'active'
            })}
            >Active</a>

          </li>
          <li>
            <a
             className={className({
              selected:hash == 'completed'
            })}
            href="#/completed"
            >Completed</a>

          </li>
        </ul>
        {/* 清除完成按钮 */}
        <button
          className="clear-completed"
        >
          clear all completed
        </button>
      </footer>
    }
}

export default Footer;