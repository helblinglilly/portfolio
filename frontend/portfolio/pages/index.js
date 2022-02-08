import Link from "next/link"
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  let universityToggledState = false;
  return (
    <Layout home>
      <div className="column">
        <div className="currentRole">
          <p className="title">Current Role</p>
          <p style={{display: "inline"}}>Currently I'm working on </p>
          <Link href="https://digital.nhs.uk/services/nhs-pathways" style={{display: "inline"}}>Pathways at NHS Digital</Link>
            <p style={{display: "inline"}}>. This is about 50/50 between maintaining the existing products and deploying a 
            a new product to the cloud.</p>
            <p>The existing products are mostly built in C# using ASP.NET and I'm working as part of a team. After learning the 
              ropes, the service team that has maintained them for the past 2 years have departed and a new team has joined. 
              This has caused a sudden change in dynamic, and I find myself helping the new team getting started.
            </p>
            <p>
              The new product is being developed by the reporting team, and it is my responsibility to deploy it to the cloud.
              We have existing infrastructure in place, so I'm learning how to integrate into an existing Kubernetes cluster. 
              At the same time, I'm learning to use terraform to provision the required AWS resources.
            </p>
        </div>
        <div className="qualifications pt-6">
          <p className="title">Qualifications</p>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title" onClick={toggleUniversity}>
                University of Kent
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <p>▽</p>
                </span>
              </button>
            </header>
            
            <div className="card-content hidden" id="universityContent">
              <p><b>BSc Computer Science: Distinction</b></p>
              <p>In my final year I worked with KITC - an in-house consultancy firm supporting local businesses' online presence during the height of the pandemic</p>
              <a>Transcript</a>
            </div>

          </div>
        </div>
      </div>
      <div className="column">
        <div className="tiles">
          <p className="title">Location</p>
          <iframe className="map" style={{borderRadius: 15 + "px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75398.71585168022!2d-1.5837988269883614!3d53.80354915520323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!5e0!3m2!1sen!2suk!4v1644350878285!5m2!1sen!2suk" width="500" height="450" loading="lazy"></iframe>
          <p className='alternateLocation'>{alternateLocation}</p>
          <p>{previousLocation}</p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
}

const alternateLocation = `I'm currently based in Leeds, West Yorkshire, United Kingdom.`
const previousLocation = `Previously, I lived in Kent during my studies and before moving to the UK I lived in Schaffhausen, Switzerland`;

const toggleUniversity = () => {
  document.querySelector("#universityContent").classList.toggle("hidden");
}