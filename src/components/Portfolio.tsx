export default function Portfolio() {

  return (
    <div className="h-screen w-full h-screen bg-background relative">
      <div className="layer layer-window"></div>
      <div className="layer layer-swatch-1"></div>
      <div className="layer layer-swatch-2"></div>
      <div className="layer layer-name">
        <h1 className="text-left font-serif text-6xl relative name mb-8">
          <span className="jen">Jen</span>
          <span className="nifer">
            <span className="letter-animate letter-1">n</span>
            <span className="letter-animate letter-2">i</span>
            <span className="letter-animate letter-3">f</span>
            <span className="letter-animate letter-4">e</span>
            <span className="letter-animate letter-5">r</span>
          </span>
          <span className="mak">Mak</span>
        </h1>
      </div>
      <div className="layer layer-socials">
        <a href="https://github.com/jenmak">
          <img className="social-icon" src="/github.svg" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/jennifermichellemak/">
          <img className="social-icon" src="/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="/JenMak_Resume_2025.pdf">
          <img className="social-icon" src="/resume.svg" alt="Resume" />
        </a>
      </div>
      <div className="layer layer-content font-serif">
        <h2 className="text-foreground text-xl mb-2">Senior UX Engineer</h2>
        <h2 className="text-md mb-6"><span className="text-accent-2">Formerly</span> Grubhub & Unqork.</h2>
        <h4 className="text-accent-3 text-sm mb-3 font-sans">Apps</h4>
        <a target="_blank" href="https://dripdropcityfrontend-production.up.railway.app/">
          <h3 className="text-md mb-3 hover:text-white">Drip Drop City</h3>
        </a>
        <a target="_blank" href="">
          <h3 className="text-md mb-3 hover:text-white">Permit Flow</h3>
        </a>
        <h4 className="text-accent-3 text-sm mb-3 font-sans">Articles</h4>
        <a target="_blank" href="https://www.builtinnyc.com/articles/software-engineers-solved-technical-challenges">
          <h3 className="text-md mb-3 hover:text-white">Built in NYC: Cracking the Case; How 3 Software Engineers Solved Their Biggest Technical Challenges</h3>
        </a>
      </div>
    </div>
  )
}