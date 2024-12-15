import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
{/* copy paste from techstack */}
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">TOP RECENT PROJECTS</h2>
        <hr />
        <p className="pb-3 text-center">👉here are my top 3 recent project with live links and source code! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure hic corrupti architecto rerum neque perferendis at aliquid adipisci dolore aspernatur! Similique eos modi numquam eligendi labore ipsam, commodi veritatis praesentium pariatur! At eligendi consequatur suscipit hic quo accusantium vel illo nulla quod expedita? Fuga deleniti temporibus aut mollitia quas cumque!</p>

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="https://www.bbva.ch/wp-content/uploads/2022/05/04_08-Redes-sociales-ecommerce-una-relacion-con-fuertes-resultados.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Govinda Shopping Website</h5>
                </div>

                <a className="ad-btn" href="#">View</a>
              </div>
            </div> 
          </div>
{/* copy paste  */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="https://www.bbva.ch/wp-content/uploads/2022/05/04_08-Redes-sociales-ecommerce-una-relacion-con-fuertes-resultados.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Govinda Shopping Website</h5>
                </div>

                <a className="ad-btn" href="#">View</a>
              </div>
            </div> 
          </div>
{/* copy paste  */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src="https://www.bbva.ch/wp-content/uploads/2022/05/04_08-Redes-sociales-ecommerce-una-relacion-con-fuertes-resultados.png" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Govinda Shopping Website</h5>
                </div>

                <a className="ad-btn" href="#">View</a>
              </div>
            </div> 
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects
