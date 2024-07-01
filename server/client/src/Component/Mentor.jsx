import Card from "./Card"
import MentorCard from "./Mentor-card"
import Pagination from "./Pagination"

function Mentor() {
     const title = "Educatsy has the qualified mentor"
     const imgage = "https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/642a606d237e740014364349/appSource/images/img_4906331_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240529%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T135809Z&X-Amz-Expires=25200&X-Amz-Signature=333e35eeba7e0a61bf2212e6dbbf5469bbdfecc5e7a17e4f0e3edcc6e8ebf84b&X-Amz-SignedHeaders=host"
     return (
          <>
               
               <Card title={title} imageSrc={imgage}/>
               
               <div className="grid-container">
                    <div className="grid-image">
                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A8xFM_TycKRLusHM_CU8dQ9qkaWovrQ1oO8Tc7Q0xQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLnUJj0zMLXJniJcroV20K-ijHTRNpG1huw&s" alt="Mentor" />
                              <span>Dolores Umbridge</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1f3845rEbBwJx5sGsSxc_bMPBCsIfIlLEMg&s" alt="mentor" />
                              <span>Minerva McGonagall</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbXKzdlSgvAr_EXPlRjogjNj5WVhTnIhSYQ&s" alt="Mentor" />
                              <span>Severus Snape</span>
                              <p>Dark Arts Headmaster</p>
                         </div>
                    </div>
                    <div className="grid-image">
                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A8xFM_TycKRLusHM_CU8dQ9qkaWovrQ1oO8Tc7Q0xQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLnUJj0zMLXJniJcroV20K-ijHTRNpG1huw&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1f3845rEbBwJx5sGsSxc_bMPBCsIfIlLEMg&s" alt="mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbXKzdlSgvAr_EXPlRjogjNj5WVhTnIhSYQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>
                    </div>
                    <div className="grid-image">
                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A8xFM_TycKRLusHM_CU8dQ9qkaWovrQ1oO8Tc7Q0xQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLnUJj0zMLXJniJcroV20K-ijHTRNpG1huw&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1f3845rEbBwJx5sGsSxc_bMPBCsIfIlLEMg&s" alt="mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbXKzdlSgvAr_EXPlRjogjNj5WVhTnIhSYQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>
                    </div>
                    <div className="grid-image">
                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A8xFM_TycKRLusHM_CU8dQ9qkaWovrQ1oO8Tc7Q0xQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLnUJj0zMLXJniJcroV20K-ijHTRNpG1huw&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1f3845rEbBwJx5sGsSxc_bMPBCsIfIlLEMg&s" alt="mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>

                         <div className="card-images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbXKzdlSgvAr_EXPlRjogjNj5WVhTnIhSYQ&s" alt="Mentor" />
                              <span>DumbleDoe</span>
                              <p>Principle</p>
                         </div>
                    </div>
               </div>
               <Pagination />
               <MentorCard/>
          </>
     )
}

export default Mentor
