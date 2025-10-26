export default function Portfolio() {

  return (
    <div className="h-screen w-full h-screen bg-background relative">

      {/* Theme */}
      <div className="layer layer-window"></div>

      {/* Name */}
      <div className="layer layer-name">
        <h1 className="text-left font-serif text-6xl relative name mb-8">
          <span className="jen">Jen</span>
          <span className="nifer">nifer</span>
          <span className="mak">Mak</span>
        </h1>
      </div>

      {/* Socials */}
      <div className="layer layer-socials">
        <a href="https://github.com/jenmak">
          <img src="/github.svg" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/jennifermichellemak/">
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="/JenMak_Resume_2025.pdf">
          <img src="/resume.svg" alt="Resume" />
        </a>
      </div>

      <div className="layer layer-content font-serif relative">
        {/* Content */}
        <div className="bg-swatch-1 mb-4">
          <h1 className="text-foreground text-lg mb-2">Senior UX Engineer</h1>
          <h2 className="text-sm mb-2"><span className="text-accent-2">Formerly</span> Grubhub & Unqork.</h2>
          <h2 className="text-sm pb-2">Computer Science, BS. <span className="text-accent-2">NYU 2013</span>.</h2>
        </div>

        {/* Apps */}
        <div className="bg-swatch-2 mb-4">
          <h4 className="text-accent-3 text-xs mb-3 font-sans">Apps</h4>
          <div className="flex flex-row gap-2 mb-1">
            <a className="hover:text-linen" href="https://github.com/jenmak/day-ai">
              <img className="w-2 h-2" src="/github.svg" alt="Github" />
            </a>
            <a target="_blank" href="http://www.dripdropcity.com">
              <h3 className="text-sm mb-3 hover:text-linen">Drip Drop City</h3>
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <a className="hover:text-linen" href="https://github.com/jenmak/construct-flow">
              <img className="w-2 h-2" src="/github.svg" alt="Github" />
            </a>
            <a target="_blank" href="https://construct-flow.com">
              <h3 className="text-sm pb-2 hover:text-linen">Construct Flow</h3>
            </a>
          </div>
        </div>

        {/* Articles */}
        <div className="bg-swatch-3">
          <h4 className="text-accent-3 text-xs mb-3 font-sans">Articles</h4>
          <a target="_blank" href="https://www.builtinnyc.com/articles/software-engineers-solved-technical-challenges">
            <h3 className="text-xs pb-2 hover:text-linen">Built in NYC: Cracking the Case; How 3 Software Engineers Solved Their Biggest Technical Challenges</h3>
          </a>
        </div>
      </div>
    </div>
  )
}