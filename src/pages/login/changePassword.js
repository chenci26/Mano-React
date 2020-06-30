import React, { useState, useEffect } from 'react'
import './login.scss'
import { withRouter } from 'react-router-dom'
import { error } from 'jquery'
import { AiOutlineQuestion } from 'react-icons/ai'

var sha1 = require('sha1')

function MyChangePassword(props) {
  const [newPassword, setNewpassword] = useState('')
  const { data, setData, username, setUsername } = props

  useEffect(() => {
    props.changeBackgroundColorBrown()
  }, [])

  async function getData(username) {
    const response = await fetch(`http://localhost:3002/member/${username}`)
    const json = await response.json()
    const items = json.rows
    setData(items)

    return data
  }

  const displayForm = (
    <>
      <form action="" method="">
        <div className="cgloginInput">
          <AiOutlineQuestion
            className="question"
            style={{ transform: 'rotate(-45deg)' }}
          />
          <AiOutlineQuestion
            className="question"
            style={{ transform: 'translateY(-30px)' }}
          />
          <AiOutlineQuestion
            className="question"
            style={{ transform: 'rotate(45deg)' }}
          />
          <div className="cgloginBlock">
            <h5>New Password</h5>
            <input
              className="form-control mb2"
              type="password"
              required="required"
              minLength="8"
              maxLength="20"
              value={newPassword}
              placeholder="請輸入新密碼"
              onChange={(event) => {
                setNewpassword(event.target.value)
              }}
            />
          </div>
          <div className="cgloginBlock">
            <h5>Confirm Password</h5>
            <input
              className="form-control mb2"
              type="password"
              required="required"
              minLength="8"
              maxLength="20"
              pattern={newPassword}
              title="密碼不相同"
              placeholder="請再次確認密碼"
            />
            <div className="cgloginBlock">
              <input
                value="send"
                type="submit"
                className="btn btn-primary mb2 cgloginBlock cgloginBtn cgBtn"
                onMouseEnter={() => {
                  // console.log(data)
                  getData(username)
                }}
                onClick={() => {
                  // loginProcess(loginSuccessCallback)
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )

  return <>{displayForm}</>
}

export default withRouter(MyChangePassword)
