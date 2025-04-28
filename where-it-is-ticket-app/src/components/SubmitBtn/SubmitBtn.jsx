import './submitBtn.css';
function SubmitBtn({ text, onClick }) {
	return (
		<button onClick={onClick} className='submit-btn'>
			{text}
		</button>
	);
}

export default SubmitBtn;
