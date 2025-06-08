
import { Smartphone, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-pink overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Smartphone className="text-white/30 w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="text-white/30 w-6 h-6" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="text-white/30 w-7 h-7" />
        </div>
        <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Smartphone className="text-white/30 w-10 h-10" />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-10 pt-16">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {/* Large Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b027a4b5-c62c-4eb6-b095-4835ab5d785f.png" 
              alt="NOMNOM CASE - The case that has your back and your snack"
              className="mx-auto h-32 md:h-48 w-auto filter drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            The case that has your back<br />
            <span className="text-cream">and your snack</span>
          </h1>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Protect your phone with cases inspired by your favorite snacks. Sweet designs, premium protection.
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <button className="bg-white hover:bg-cream text-gray-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Shop Now
          </button>
        </div>

        {/* Animated phone cases graphic */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float">
              <Smartphone className="text-white w-12 h-12" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <Smartphone className="text-white w-12 h-12" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <Smartphone className="text-white w-12 h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
