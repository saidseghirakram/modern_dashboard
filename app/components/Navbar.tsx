'use client';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 bg-[#f2f2f2] flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-medium text-gray-800">
          Akram <span className="text-sm align-top">©</span>
        </h1>
        <span className="text-gray-500 ml-2">(Web Designer & Developer)</span>
      </div>
      
      <div className="flex gap-4 text-gray-600">
        <a href="#services" className="hover:text-gray-800 transition-colors">Services</a>
        <a href="#works" className="hover:text-gray-800 transition-colors">Works</a>
        <a href="#about" className="hover:text-gray-800 transition-colors">About</a>
        <a href="#testimonials" className="hover:text-gray-800 transition-colors">Testimonials</a>
        <a href="#contact" className="hover:text-gray-800 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 