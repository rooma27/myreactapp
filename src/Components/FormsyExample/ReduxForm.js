import Formsy from 'formsy-react';
import React ,{useState} from 'react';
import TextFormsy from './TextFormsy';
import { useSelector, useDispatch } from 'react-redux';
import {
    postdata,selectFormData
  } from '../../Slices/FormSlice';

function ReduxForm() {

	const [canSubmit, setCanSubmit] = useState(false);
    const formData = useSelector(selectFormData);
    const dispatch = useDispatch();
	console.log("formdata",formData)

    function disableButton() {
        setCanSubmit(false);
      }
    
      function enableButton() {
        setCanSubmit( true );
      }

      function submit(model) {
        console.log(model);
        dispatch(postdata(model));
        
      }
    return (
        <div>
    <Formsy className="form-group" onValidSubmit={submit} onValid={enableButton} onInvalid={disableButton}>
        
        <TextFormsy  className="form-control" name="email" validationError="This is not a valid email" required />
       
       

        <TextFormsy className="form-control" name="number"  validationError="This is not a valid number" required />
       
        <TextFormsy className="form-control" name="url"  validationError="This is not a valid URL" required />
       
        <button className="btn btn-primary" type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </Formsy>  
      <div>
        <h1>This is form data from selector</h1>
       <h2>{formData &&formData.email}</h2>
       <h2>{formData &&formData.number}</h2>

       <h2>{formData &&formData.url}</h2>


      </div>
      </div>
      
      );

}

export default ReduxForm;