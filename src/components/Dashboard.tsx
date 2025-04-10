
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Utensils, 
  Droplets, 
  Activity, 
  BarChart2, 
  CalendarDays,
  ChefHat,
  Calendar,
  Apple,
  ScanLine,
  Baby,
  Microscope,
  Flask,
  Stethoscope,
  Gift
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Dashboard: React.FC = () => {
  // Handler for feature clicks
  const handleFeatureClick = (featureName: string) => {
    toast({
      title: "Feature Selected",
      description: `You selected the ${featureName} feature`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-nutri-purple/10 to-nutri-green/10 p-6 rounded-xl">
        <h1 className="text-xl md:text-2xl font-medium text-gray-800">
          Hey there, I'm ArogyaMate — the only one who scans your snacks and your shampoo, whispers sweet nothings about macros, and still lets you sneak a midnight dosa.
        </h1>
      </div>
      
      {/* Daily Summary */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Today's Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Calories */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Calories</p>
                  <h3 className="text-2xl font-bold">1,280 / 2,200</h3>
                </div>
                <div className="h-10 w-10 bg-nutri-purple/10 flex items-center justify-center rounded-full">
                  <Utensils className="h-5 w-5 text-nutri-purple" />
                </div>
              </div>
              <Progress value={58} className="h-2 mt-4" />
            </CardContent>
          </Card>
          
          {/* Protein */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Protein</p>
                  <h3 className="text-2xl font-bold">78g / 140g</h3>
                </div>
                <div className="h-10 w-10 bg-nutri-green/10 flex items-center justify-center rounded-full">
                  <Activity className="h-5 w-5 text-nutri-green" />
                </div>
              </div>
              <Progress value={55} className="h-2 mt-4 bg-gray-200">
                <div className="h-full bg-nutri-green rounded-full" style={{ width: '55%' }}></div>
              </Progress>
            </CardContent>
          </Card>
          
          {/* Water */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Water</p>
                  <h3 className="text-2xl font-bold">1.2L / 3.0L</h3>
                </div>
                <div className="h-10 w-10 bg-blue-500/10 flex items-center justify-center rounded-full">
                  <Droplets className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <Progress value={40} className="h-2 mt-4 bg-gray-200">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
              </Progress>
            </CardContent>
          </Card>
          
          {/* Steps */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Steps</p>
                  <h3 className="text-2xl font-bold">6,423 / 10,000</h3>
                </div>
                <div className="h-10 w-10 bg-nutri-orange/10 flex items-center justify-center rounded-full">
                  <BarChart2 className="h-5 w-5 text-nutri-orange" />
                </div>
              </div>
              <Progress value={64} className="h-2 mt-4 bg-gray-200">
                <div className="h-full bg-nutri-orange rounded-full" style={{ width: '64%' }}></div>
              </Progress>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Featured Services */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Cosmetic & Personal Care Scanner */}
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-pink-500/20 flex items-center justify-center rounded-full">
                  <Flask className="h-6 w-6 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">🧴 Cosmetic & Personal Care Scanner</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Analyze ingredients in your personal care products for potential allergens and harmful chemicals.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={() => handleFeatureClick("Cosmetic Scanner")}
                  >
                    Scan Product
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Sickness Mode */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-blue-500/20 flex items-center justify-center rounded-full">
                  <Stethoscope className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Sickness Mode (Curated Sick Diets)</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Personalized nutrition recommendations for when you're feeling under the weather.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => handleFeatureClick("Sickness Mode")}
                  >
                    Enable Sickness Mode
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Periods & Pregnancy */}
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-purple-500/20 flex items-center justify-center rounded-full">
                  <Baby className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Periods & Pregnancy Cravings Mediator</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Healthier alternatives to satisfy cravings during periods and pregnancy.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                    onClick={() => handleFeatureClick("Periods & Pregnancy Mode")}
                  >
                    Get Recommendations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* What Can I Cook */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-green-500/20 flex items-center justify-center rounded-full">
                  <ChefHat className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">What Can I Cook with My Fridge?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Discover recipes you can make with ingredients already in your kitchen.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleFeatureClick("What Can I Cook")}
                  >
                    Enter Ingredients
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Wedding & Event Fitness */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-amber-500/20 flex items-center justify-center rounded-full">
                  <Gift className="h-6 w-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Wedding & Event Fitness Pack</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Personalized fitness and nutrition plans to look your best on your special day.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                    onClick={() => handleFeatureClick("Wedding Fitness")}
                  >
                    Create Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Label & Additive Scanner */}
          <Card className="bg-gradient-to-r from-red-50 to-rose-50 border-red-200 card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-red-500/20 flex items-center justify-center rounded-full">
                  <Microscope className="h-6 w-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Label & Additive Scanner (Game-Changer)</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Decode food labels and identify potentially harmful additives in packaged foods.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => handleFeatureClick("Label Scanner")}
                  >
                    Scan Label
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Goal Progress */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Your Goals</h2>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>View All</span>
          </Button>
        </div>
        
        <Card className="overflow-hidden card-hover">
          <CardHeader className="bg-gradient-to-r from-nutri-purple/5 to-nutri-green/5 p-6">
            <CardTitle className="text-xl">Wedding Prep Plan</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm font-medium">Overall Progress</p>
                  <p className="text-sm text-nutri-purple font-semibold">68%</p>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Target Weight</p>
                  <p className="font-medium">62 kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Weight</p>
                  <p className="font-medium">67 kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Event Date</p>
                  <p className="font-medium">Aug 15, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Days Remaining</p>
                  <p className="font-medium">127 days</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-nutri-purple to-nutri-green hover:opacity-90 text-white"
                onClick={() => handleFeatureClick("Wedding Prep Plan")}
              >
                View Detailed Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
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
    </div>
  );
};

export default Dashboard;
