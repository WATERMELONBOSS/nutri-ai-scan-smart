
import React from 'react';
import FeaturedService from './FeaturedService';
import { 
  Beaker, 
  Stethoscope, 
  Baby, 
  ChefHat, 
  Gift, 
  Microscope 
} from 'lucide-react';

interface FeaturedServicesProps {
  handleFeatureClick: (featureName: string) => void;
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({ handleFeatureClick }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cosmetic & Personal Care Scanner */}
        <FeaturedService 
          icon={Beaker}
          iconBgClass="bg-pink-500/20"
          iconColor="text-pink-500"
          title="🧴 Cosmetic & Personal Care Scanner"
          description="Analyze ingredients in your personal care products for potential allergens and harmful chemicals."
          buttonText="Scan Product"
          buttonBgClass="bg-pink-500 hover:bg-pink-600"
          onClick={handleFeatureClick}
        />
        
        {/* Sickness Mode */}
        <FeaturedService 
          icon={Stethoscope}
          iconBgClass="bg-blue-500/20"
          iconColor="text-blue-500"
          title="Sickness Mode (Curated Sick Diets)"
          description="Personalized nutrition recommendations for when you're feeling under the weather."
          buttonText="Enable Sickness Mode"
          buttonBgClass="bg-blue-500 hover:bg-blue-600"
          onClick={handleFeatureClick}
        />
        
        {/* Periods & Pregnancy */}
        <FeaturedService 
          icon={Baby}
          iconBgClass="bg-purple-500/20"
          iconColor="text-purple-500"
          title="Periods & Pregnancy Cravings Mediator"
          description="Healthier alternatives to satisfy cravings during periods and pregnancy."
          buttonText="Get Recommendations"
          buttonBgClass="bg-purple-500 hover:bg-purple-600"
          onClick={handleFeatureClick}
        />
        
        {/* What Can I Cook */}
        <FeaturedService 
          icon={ChefHat}
          iconBgClass="bg-green-500/20"
          iconColor="text-green-500"
          title="What Can I Cook with My Fridge?"
          description="Discover recipes you can make with ingredients already in your kitchen."
          buttonText="Enter Ingredients"
          buttonBgClass="bg-green-500 hover:bg-green-600"
          onClick={handleFeatureClick}
        />
        
        {/* Wedding & Event Fitness */}
        <FeaturedService 
          icon={Gift}
          iconBgClass="bg-amber-500/20"
          iconColor="text-amber-500"
          title="Wedding & Event Fitness Pack"
          description="Personalized fitness and nutrition plans to look your best on your special day."
          buttonText="Create Plan"
          buttonBgClass="bg-amber-500 hover:bg-amber-600"
          onClick={handleFeatureClick}
        />
        
        {/* Label & Additive Scanner */}
        <FeaturedService 
          icon={Microscope}
          iconBgClass="bg-red-500/20"
          iconColor="text-red-500"
          title="Label & Additive Scanner (Game-Changer)"
          description="Decode food labels and identify potentially harmful additives in packaged foods."
          buttonText="Scan Label"
          buttonBgClass="bg-red-500 hover:bg-red-600"
          onClick={handleFeatureClick}
        />
      </div>
    </div>
  );
};

export default FeaturedServices;
