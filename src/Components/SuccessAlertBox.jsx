const SuccessAlertBox = () => {
    return (
        <div className="alert">
          <span className="closebtn" onClick={(event) => event.target.parentElement.style.display = 'none'}>&times;</span>
          <p>Success!</p>
        </div>
      );
}


export default SuccessAlertBox