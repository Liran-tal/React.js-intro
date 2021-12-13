import './buttons.css';

function Buttons(props) {

  return (
    <button className='buttons'>
			{props.text}
		</button>
  );
}

export default Buttons;
