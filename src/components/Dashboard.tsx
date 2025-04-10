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
  ScanLine
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
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
              
              <Button className="w-full bg-gradient-to-r from-nutri-purple to-nutri-green hover:opacity-90 text-white">
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
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 bg-nutri-purple/10 rounded-full flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-nutri-purple" />
              </div>
              <h3 className="text-sm font-medium">Log Meal</h3>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 bg-nutri-green/10 rounded-full flex items-center justify-center mb-3">
                <ScanLine className="h-6 w-6 text-nutri-green" />
              </div>
              <h3 className="text-sm font-medium">Scan Label</h3>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 bg-nutri-orange/10 rounded-full flex items-center justify-center mb-3">
                <ChefHat className="h-6 w-6 text-nutri-orange" />
              </div>
              <h3 className="text-sm font-medium">Find Recipes</h3>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
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
