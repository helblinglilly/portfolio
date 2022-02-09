export default function LatestPost() {
    return (
        <div className="latestPost">
            <p className="title">Latest Blog Post</p>

            <div className="card mt-2">
                <header className="card-header">
                  <p className="card-header-title">Latest Post</p>
                  <div className="has-text-right pt-2 pr-3">
                    <i><time dateTime="21/06/2022">21/06/2022</time></i>
                  </div>
                </header>
                <div className="card-content" id="mcdonaldsContent">
                  <p>Content Preview</p>
                </div>
               
              </div>
        </div>
    )
}