import {useEffect, useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../../Redux/actions'

const mapStateToProps = state => ({
  homeData: state.homeData,
  userName: state.userName,
  searched: state.searched
});

const mapDispatchToProps = dispatch => ({
  fetchAPI: api => dispatch(actions.fetchAPI(api)),
});

const Home = (props) => {
  const api = `https://api.github.com/users/${props.userName}`
  const data = !props.homeData ? {} : props.homeData
  const {login, avatar_url, followers} = data;
  
  useEffect(()=> {    
      props.fetchAPI(api)
  },[props.searched])
  
  return(
    <div className="Home">
      <img src={avatar_url} alt=""/>
      <p>{login}</p>
      <p>Github User</p>
      <p>{followers} Followers</p>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);