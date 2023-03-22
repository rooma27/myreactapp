function Form() {
    return ( 
    <div>
        <form>
        <div>
        <label>
           User Name:
            <input type="text" name="name" />
        </label>
        </div>
        <div>
        <label>
            Password:
            <input type="text" name="pwd" />
        </label>
        </div>
        <input type="submit" value="Login" />
        </form>
    </div> );
}

export default Form;