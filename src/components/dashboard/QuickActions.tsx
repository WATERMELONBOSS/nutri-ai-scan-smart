
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ScanLine, ChefHat, Apple } from 'lucide-react';

interface QuickActionsProps {
  handleFeatureClick: (featureName: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ handleFeatureClick }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card 
          className="card-hover cursor-pointer"
          onClick={() => handleFeatureClick("Log Meal")}
        >
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-nutri-purple/10 rounded-full flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-nutri-purple" />
            </div>
            <h3 className="text-sm font-medium">Log Meal</h3>
          </CardContent>
        </Card>
        
        <Card 
          className="card-hover cursor-pointer"
          onClick={() => handleFeatureClick("Scan Label")}
        >
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-nutri-green/10 rounded-full flex items-center justify-center mb-3">
              <ScanLine className="h-6 w-6 text-nutri-green" />
            </div>
            <h3 className="text-sm font-medium">Scan Label</h3>
          </CardContent>
        </Card>
        
        <Card 
          className="card-hover cursor-pointer"
          onClick={() => handleFeatureClick("Find Recipes")}
        >
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-nutri-orange/10 rounded-full flex items-center justify-center mb-3">
              <ChefHat className="h-6 w-6 text-nutri-orange" />
            </div>
            <h3 className="text-sm font-medium">Find Recipes</h3>
          </CardContent>
        </Card>
        
        <Card 
          className="card-hover cursor-pointer"
          onClick={() => handleFeatureClick("Night Craving")}
        >
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-3">
              <Apple className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-sm font-medium">Night Craving</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuickActions;
