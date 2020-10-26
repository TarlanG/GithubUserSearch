import * as types from './actionTypes'
import axios from 'axios'

export const changeUser = value => ({
  type: types.CHANGEUSER,
  payload: value
})

export const search = () => ({
  type: types.SEARCH,
})

export const setData = data => ({
  type: types.SETDATA,
  payload: data
});

export const setFollowing = data => ({
  type: types.SETFOLLOWING,
  payload: data
})

export const fetchAPI = api => {
  return dispatch => axios(api, {
    auth: {
      username: "", // PUT YOUR GITHUB USERNAME HERE
      password: "", // PUT YOUR TOKEN HERE
    },
  })
  .then(res => dispatch(setData(res.data)))
};

export const folFetchAPI = api => {
  return dispatch => axios(api, {
    auth: {
      username: "", // PUT YOUR GITHUB USERNAME HERE
      password: "", // PUT YOUR TOKEN HERE
    },
  })
  .then(res => dispatch(setFollowing(res.data)))
}