// App.jsx
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

// import NameForm from './NameForm';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get('name') || 'Rooma'
    };
  }

  handleNameChange(event) {
    const { cookies } = this.props;

    cookies.set('name', this.state.name, { maxAge: 5 });

     this.setState({ name:event.target.value });
    console.log(event.target.value);
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleNameChange.bind(this)} />
        {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </div>
    );
  }
}

export default withCookies(App);