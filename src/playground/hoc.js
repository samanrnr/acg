import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>your detail: {props.info}</p>
  </div>
)

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated
        ? (
          <WrappedComponent {...props} />
        ) : (
          <p>you have to be loged in.</p>
        )

      }
    </div>
  )
}


const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info='your detail' />, document.getElementById('app'))
