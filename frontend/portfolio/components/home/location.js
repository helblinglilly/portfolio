export default function Location() {
    return (
        <div className="tiles">
          <p className="title">Location</p>
          <iframe className="map" style={{borderRadius: 15 + "px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75398.71585168022!2d-1.5837988269883614!3d53.80354915520323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!5e0!3m2!1sen!2suk!4v1644350878285!5m2!1sen!2suk" width="100%" height="450" loading="lazy"></iframe>
          <p className='alternateLocation'>{alternateLocation}</p>
          <p>{previousLocation}</p>
          <p></p>
        </div>
    );
}

const alternateLocation = `I'm currently based in Leeds, West Yorkshire, United Kingdom.`
const previousLocation = `Previously, I lived in Kent during my studies and before moving to the UK I lived in Schaffhausen, Switzerland`;