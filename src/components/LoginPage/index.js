import React from 'react';
import Button from '../Button';
import Message from '../Message';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { islogin: false };
  }


    changeLoginState = () => {
      this.setState({
        islogin: true,
      });
    }

    render() {
      const { islogin } = this.state;
      return (
        <div>
          {
            islogin ? <Message /> : <Button changeLoginState={this.changeLoginState} />
        }
        </div>
      );
    }
}
export default LoginPage;
