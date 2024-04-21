import video from "../public/demo.mp4"
import poster from "../public/demo.png"
import { Helmet } from "react-helmet"

function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="heic2image is a python program which converts heic images to jpeg/png" />
        <meta name="heywords" content="heic, jpg, png, python, tkinter, pillow-heif, image" />
      </Helmet>
      <div className="page">
        <section>
          <div className="page-header">
            <span>Heic 2 Image</span>
          </div>
          <div className="video">
            <video autoPlay muted loop poster={poster} src={video}></video>
          </div>
          <div className="downloads">
            <a href="" title="Download" download>Download .exe</a>
          </div>
        </section>
        <div className="copyright">
          <span>&copy; heic2image.app 2024</span>
        </div>
      </div>    
    </>
  )
}

export default App
