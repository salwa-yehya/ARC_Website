import './Form.css';

const Form = () => {
  return (
    <form className="form">
      <input className="input" type="text" placeholder="Name" />
      <input className="input" type="text" placeholder="E-Mail" />
      <textarea className="textarea" placeholder="Enter message"></textarea> 
      <center><button className="button">Submit</button></center>
    </form>
  );
};

export default Form;


