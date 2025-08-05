import "./IncrementButton.css";

function IncrementButton({ incrementElement }) {
  return (
    <div className="increment-button">
      <div className="square"> </div>
      <p>Include {incrementElement}</p>
    </div>
  );
}

export default IncrementButton;
