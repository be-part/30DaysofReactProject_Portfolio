const WarningAlertBox = () => {
    return (
        <div className="alert">
          <span className="closebtn" onClick={(event) => event.target.parentElement.style.display = 'none'}>&times;</span>
          <p>Warning!</p>
        </div>
      );
}


export default WarningAlertBox
