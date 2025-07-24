const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[rgb(2,161,192)] border-b z-50">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-center">
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white px-4 py-1 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:font-bold"
            >
              소개
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white px-4 py-1 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:font-bold"
            >
              경력
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white px-4 py-1 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:font-bold"
            >
              기술
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white px-4 py-1 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:font-bold"
            >
              프로젝트
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white px-4 py-1 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:font-bold"
            >
              깃허브
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;