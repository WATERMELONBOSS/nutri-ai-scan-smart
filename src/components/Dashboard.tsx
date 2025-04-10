
import React from 'react';
import { toast } from "@/hooks/use-toast";
import WelcomeMessage from './dashboard/WelcomeMessage';
import DailySummary from './dashboard/DailySummary';
import FeaturedServices from './dashboard/FeaturedServices';
import GoalProgress from './dashboard/GoalProgress';
import QuickActions from './dashboard/QuickActions';

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
      <WelcomeMessage />
      
      {/* Daily Summary */}
      <DailySummary />
      
      {/* Featured Services */}
      <FeaturedServices handleFeatureClick={handleFeatureClick} />
      
      {/* Goal Progress */}
      <GoalProgress handleFeatureClick={handleFeatureClick} />
      
      {/* Quick Actions */}
      <QuickActions handleFeatureClick={handleFeatureClick} />
    </div>
  );
};

export default Dashboard;
