import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../Redux/actions'

const mapDispatchToProps = dispatch => ({
  fetchAPI: value => dispatch(actions.setData()),
  changeUser: value => dispatch(actions.changeUser(value)),
  search: () => dispatch(actions.search())
});

const Header = (props) => {
  return(
    <div className="header">
      <Link to="/">Home </Link>
      <Link to="/following">Following</Link>
      <input onChange={event => props.changeUser(event.target.value)}  type="text" placeholder="Search Github User..."/>
      <button onClick={props.search}>&#128269;</button>
    </div>
  )
};

export default connect(null, mapDispatchToProps)(Header);