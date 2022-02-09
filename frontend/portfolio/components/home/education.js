export default function Education(){
    return (
        <div>
            <p className="title is-5 pt-4">Education</p>
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
            <a className="mt-3 mb-3" href="/documents/university_transcript.pdf" target="_blank">Transcript</a>
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
    );
}


const toggleUniversity = () => {
    document.querySelector("#universityContent").classList.toggle("hidden");
  }
  
const toggleSixthForm = () => {
document.querySelector("#sixthformContent").classList.toggle("hidden");
}