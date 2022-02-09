import Layout, { siteTitle } from '../components/layout'
import Location from "../components/home/location"
import CurrentRole from '../components/home/currentRole';
import Experience from '../components/home/experience';
import LatestPost from '../components/home/latestPost';
import Sidebar from "../components/sidebar";

export default function Home() {
  let universityToggledState = false;
  return (
    <Layout home>
      <div className='column is-one-third'>
        <Sidebar></Sidebar>
      </div>
      <div className="column is-one-third">
        <CurrentRole></CurrentRole>
        <Experience></Experience>
      </div>
      <div className="column is-one-third">
        <LatestPost></LatestPost>
        <Location></Location>
      </div>
    </Layout>
  );
}
