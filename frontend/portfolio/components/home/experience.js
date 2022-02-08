export default function Experience() {
    return (
        <div className="experience pt-6">
          <p className="title">Experience</p>

          <div className="columns">
            <div className="column">
              <p className="title is-5">Work History</p>

              {/* NHSD */}
              <div className="card">
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
                  <p>Pathways - Developer</p>
                  <p><b>Cashier</b></p>
                  <p>Pathways - Developer</p>
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
                  <p>Crew Member</p>
                </div>
              </div>

            </div>

            <div className="column">
              <p className="title is-5">Education</p>

              {/* University of Kent */}
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title" onClick={toggleUniversity}>
                    University of Kent
                  </p>
                  <button className="card-header-icon" onClick={toggleUniversity} aria-label="more options">
                    <span className="icon">
                      <p>▽</p>
                    </span>
                  </button>
                </header>
                
                <div className="card-content hidden" id="universityContent">
                  <p><b>BSc Computer Science: Distinction</b></p>
                  <a className="mt-3 mb-3" href="/documents/university_transcript.pdf">Transcript</a>
                  <p>In my final year I worked with KITC - an in-house consultancy firm supporting local businesses' online presence during the height of the pandemic</p>
                </div>

              </div>

              {/* Royal Harbour Academy */}
              <div className="card mt-2">
                <header className="card-header">
                  <p className="card-header-title" onClick={toggleSixthForm}>
                    Royal Harbour Academy
                  </p>
                  <button className="card-header-icon" onClick={toggleSixthForm} aria-label="more options">
                    <span className="icon">
                      <p>▽</p>
                    </span>
                  </button>
                </header>
                
                <div className="card-content hidden" id="sixthformContent">
                  <p>Btec Public Services: D*DD</p>
                  <p>IB Math Studies: 5/7</p>
                  <p>IB ITGS: 6/7</p>
                </div>
              </div>

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

const toggleUniversity = () => {
  document.querySelector("#universityContent").classList.toggle("hidden");
}

const toggleSixthForm = () => {
  document.querySelector("#sixthformContent").classList.toggle("hidden");
}