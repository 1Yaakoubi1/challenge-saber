import img1 from './imagees/proj1.jpg'
import img2 from './imagees/proj2.jpg'
import img3 from './imagees/proj3.jpg'
import img4 from './imagees/proj4.jpg'




function Projects() {
  const array=[{k1:'Projet1',img:img1},
  {k1:'Projet2',img:img2},
  {k1:'Projet3',img:img3},
  {k1:'Projet4',img:img4}]
    return (
        <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
{array.map(el=>   <div className="project-card">
          <img src={el.img} alt="project" />
          <h3>{el.k1}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>   )}
        
      </div>
    </section>
    );
}
export default Projects