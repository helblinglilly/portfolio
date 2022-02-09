import Layout, { siteTitle } from '../components/layout'
import Location from "../components/home/location"
import CurrentRole from '../components/home/currentRole';
// import Experience from '../components/home/experience';
import Education from '../components/home/education';
import LatestPost from '../components/home/latestPost';
import Sidebar from "../components/sidebar";

export default function Home() {
  let universityToggledState = false;
  return (
    <Layout home>
      <div className='column is-one-quarter'>
        <Sidebar></Sidebar>
      </div>
      <div className="column is-two-third">
        <LatestPost></LatestPost>
        <CurrentRole></CurrentRole>
        <Education></Education>
      </div>
      <div className="column is-one-quarter">
      <Location></Location>
        {/* <Experience></Experience> */}
      </div>
    </Layout>
  );
}
