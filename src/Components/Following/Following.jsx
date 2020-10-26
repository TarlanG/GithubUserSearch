import {useEffect, useState} from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event';
import { connect } from 'react-redux'
import * as actions from '../../Redux/actions'

const mapStateToProps = state => ({
  homeData: state.homeData,
  followings: state.followingData,
  userName: state.userName,
  searched: state.searched
});

const mapDispatchToProps = dispatch => ({
  folFetchAPI: api => dispatch(actions.folFetchAPI(api)),
});

const Following = (props) => {
  const data =  props.followings
  const homeData = !props.homeData ? {} : props.homeData
  
  const api = `https://api.github.com/users/${props.userName}/following?page=1&per_page=10`;

  useEffect(()=> {    
    props.folFetchAPI(api)
  },[props.searched])

  return(
    <div className="following">
       Following
      <ul>
        {!data ? "Loading..." : data.map((user, index) =>{ 
            return <li key={index}> <img src={user.avatar_url} alt=""/> {user.login}</li>
          })}
      </ul>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);