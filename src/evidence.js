import "./newEvidence.css";

export default function NewEvidence() {
  return (
    <div className="evidence-container">
      <div className="evidence-item">
        <h3>Jméno</h3>
        <p>Jan</p>
      </div>
      <div className="evidence-item">
        <h3>Příjmení</h3>
        <p>Novák</p>
      </div>
      <div className="evidence-item">
        <h3>Věk</h3>
        <p>26</p>
      </div>
      <div className="evidence-item">
        <h3>Telefonní číslo</h3>
        <p>555 555 555</p>
      </div>
      <div className="evidence-item">
        <h3>Číslo pojištěnce</h3>
        <p>5484484884</p>
      </div>
      <div className="evidence-item">
        <h3>kód smlouvy</h3>
        <p>nfnfe49</p>
      </div>
      <div className="btn-delete-container">
        <button className="btn-delete">Delete user</button>
      </div>
    </div>
  );
}
