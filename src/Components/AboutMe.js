import img from './imagees/John-Doe.jpg'
function AboutMe () {
    return(
        <div>
            <section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src={img} alt="jhon-doe" />
    </section>
        </div>
    )
}
export default AboutMe