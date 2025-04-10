
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Search, 
  BarChart2, 
  User, 
  Menu, 
  X,
  Scanner,
  Apple,
  Settings
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Apple className="h-7 w-7 text-nutri-green" />
          <h1 className="text-xl font-bold gradient-text">NutriScan</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Dashboard</a>
          <a href="#" className="text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Food Scanner</a>
          <a href="#" className="text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Nutrition Plans</a>
          <a href="#" className="text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Recipes</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="relative">
            <Scanner className="h-5 w-5" />
          </Button>
          <Button className="bg-nutri-purple hover:bg-nutri-purple/90">
            Get Premium
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <a href="#" className="py-3 text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Dashboard</a>
            <a href="#" className="py-3 text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Food Scanner</a>
            <a href="#" className="py-3 text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Nutrition Plans</a>
            <a href="#" className="py-3 text-nutri-dark hover:text-nutri-purple transition-colors font-medium">Recipes</a>
            <div className="flex space-x-4 py-3">
              <Button variant="outline" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Scanner className="h-5 w-5" />
              </Button>
              <Button className="bg-nutri-purple hover:bg-nutri-purple/90">
                Get Premium
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
