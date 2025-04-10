
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CalendarDays } from 'lucide-react';

interface GoalProgressProps {
  handleFeatureClick: (featureName: string) => void;
}

const GoalProgress: React.FC<GoalProgressProps> = ({ handleFeatureClick }) => {
  return (
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
  );
};

export default GoalProgress;
