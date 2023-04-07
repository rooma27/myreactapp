import Formsy from 'formsy-react';
import React from 'react';
import TextFormsy from './TextFormsy';



export default class FormsyForm extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    console.log(model);
    // fetch('http://example.com/', {
    //   method: 'post',
    //   body: JSON.stringify(model),
    // });
    
  }

  render() {
    return (
      <Formsy className="form-group" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        
        <TextFormsy  className="form-control" name="email" validationError="This is not a valid email" required />
       
       

        <TextFormsy className="form-control" name="number"  validationError="This is not a valid number" required />
       
        <TextFormsy className="form-control" name="url"  validationError="This is not a valid URL" required />
       
        <button className="btn btn-primary" type="submit" disabled={!this.state.canSubmit}>
          Submit
        </button>
      </Formsy>
    );
  }
}