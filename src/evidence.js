import "./newEvidence.css";

export default function NewEvidence() {
  return (
    <div className="evidence-container">
      <div className="evidence-item evidence-item-title">
        <h2>Evidence</h2>
      </div>
      <div className="evidence-item">
        <h3>First Name:</h3>
        <p>Jan</p>
      </div>
      <div className="evidence-item">
        <h3>Last Name:</h3>
        <p>Novák</p>
      </div>
      <div className="evidence-item">
        <h3>Age:</h3>
        <p>26</p>
      </div>
      <div className="evidence-item">
        <h3>Phone Number:</h3>
        <p>555 555 555</p>
      </div>
      <div className="evidence-item">
        <h3>Insurance Number:</h3>
        <p>5484484884</p>
      </div>
      <div className="evidence-item">
        <h3>Insurance Code:</h3>
        <p>nfnfe49</p>
      </div>
      <div className="btn-delete-container">
        <button className="btn-delete">Delete user</button>
      </div>
    </div>
  );
}
