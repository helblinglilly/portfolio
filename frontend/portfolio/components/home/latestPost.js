export default function LatestPost() {
    return (
        <div className="latestPost">
            <p className="title">Latest Blog Post</p>

            <div className="card mt-2">
                <header className="card-header">
                  <p className="card-header-title">Latest Post</p>
                </header>
                <div className="card-content" id="mcdonaldsContent">
                  <p>Content Preview</p>
                </div>
                <footer className="card-footer has-text-right">
                    <time datetime="2016-1-1">21/06/2022</time>
                </footer>
              </div>
        </div>
    )
}