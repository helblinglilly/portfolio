export default function Experience() {
    return (
        <div className="experience pt-6">
          <p className="title">Experience</p>
            <p className="title is-5">Work History</p>

            {/* NHSD */}
            <div className="card is-fullwidth">
              <header className="card-header">
                <p className="card-header-title" onClick={toggleNHSD}>
                  NHS Digital
                </p>
                <button className="card-header-icon" onClick={toggleNHSD} aria-label="more options">
                  <span className="icon">
                    <p>▽</p>
                  </span>
                </button>
              </header>
              <div className="card-content hidden" id="nhsdContent">
                <p><b>Graduate Scheme</b></p>
                <p>Pathways - Developer</p>
                <p>C#, JS, CloudOps (AWS)</p>
              </div>
            </div>

            {/* Waitrose */}
            <div className="card mt-2">
              <header className="card-header">
                <p className="card-header-title" onClick={toggleWaitrose}>
                  Waitrose
                </p>
                <button className="card-header-icon" onClick={toggleWaitrose} aria-label="more options">
                  <span className="icon">
                    <p>▽</p>
                  </span>
                </button>
              </header>
              <div className="card-content hidden" id="waitroseContent">
                <p><b>Legalities</b></p>
                <p>Working in a small team with ever changing environments.</p>
                <p><b>Cashier</b></p>
                <p>Customer service</p>
              </div>
            </div>

            {/* McDonalds */}
            <div className="card mt-2">
              <header className="card-header">
                <p className="card-header-title" onClick={toggleMcDonalds}>
                  McDonalds
                </p>
                <button className="card-header-icon" onClick={toggleMcDonalds} aria-label="more options">
                  <span className="icon">
                    <p>▽</p>
                  </span>
                </button>
              </header>
              <div className="card-content hidden" id="mcdonaldsContent">
                <p><b>Crew Member</b></p>
                <p>Mostly in customer-service centric roles, especially in the high pressure DriveThru environment in two different stores.</p>
              </div>
            </div>
        </div>
    );
}

const toggleNHSD = () => {
  document.querySelector("#nhsdContent").classList.toggle("hidden");
}

const toggleWaitrose = () => {
  document.querySelector("#waitroseContent").classList.toggle("hidden");
}

const toggleMcDonalds = () => {
  document.querySelector("#mcdonaldsContent").classList.toggle("hidden");
}