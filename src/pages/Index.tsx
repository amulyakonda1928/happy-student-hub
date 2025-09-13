import { useState, useEffect } from "react";
import { WellnessCard } from "@/components/WellnessCard";
import { MoodTracker } from "@/components/MoodTracker";
import { WellnessTips } from "@/components/WellnessTips";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Moon, 
  BookOpen, 
  Activity,
  TrendingUp,
  Calendar,
  Settings
} from "lucide-react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const mockData = {
    mood: { current: "Good", trend: "stable", trendValue: "Same" },
    stress: { current: "3/10", trend: "down", trendValue: "-1 point" },
    sleep: { current: "7.5h", trend: "up", trendValue: "+30 min" },
    study: { current: "4.2h", trend: "up", trendValue: "+1.2h" },
    wellness: { current: "85%", trend: "up", trendValue: "+5%" }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-wellness text-white shadow-wellness">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Student Wellness Monitor</h1>
              <p className="text-sm opacity-90">
                {getGreeting()}, Alex! Let's check your wellness today.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Calendar className="h-3 w-3 mr-1" />
                {currentTime.toLocaleDateString()}
              </Badge>
              <Button variant="calm" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Wellness Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-wellness" />
            Today's Wellness Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <WellnessCard
              title="Overall Wellness"
              value={mockData.wellness.current}
              icon={Heart}
              trend={mockData.wellness.trend as any}
              trendValue={mockData.wellness.trendValue}
              variant="wellness"
            />
            <WellnessCard
              title="Current Mood"
              value={mockData.mood.current}
              icon={Heart}
              trend={mockData.mood.trend as any}
              trendValue={mockData.mood.trendValue}
            />
            <WellnessCard
              title="Stress Level"
              value={mockData.stress.current}
              icon={Brain}
              trend={mockData.stress.trend as any}
              trendValue={mockData.stress.trendValue}
              variant={parseInt(mockData.stress.current) > 6 ? "alert" : "default"}
            />
            <WellnessCard
              title="Sleep Last Night"
              value={mockData.sleep.current}
              icon={Moon}
              trend={mockData.sleep.trend as any}
              trendValue={mockData.sleep.trendValue}
            />
            <WellnessCard
              title="Study Time"
              value={mockData.study.current}
              icon={BookOpen}
              trend={mockData.study.trend as any}
              trendValue={mockData.study.trendValue}
            />
          </div>
        </section>

        {/* Mood Tracking & Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MoodTracker />
          <WellnessTips />
        </div>

        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-wellness" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="calm" className="h-20 flex-col gap-2">
              <Moon className="h-6 w-6" />
              <span className="text-xs">Log Sleep</span>
            </Button>
            <Button variant="calm" className="h-20 flex-col gap-2">
              <Brain className="h-6 w-6" />
              <span className="text-xs">Stress Check</span>
            </Button>
            <Button variant="calm" className="h-20 flex-col gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xs">Study Session</span>
            </Button>
            <Button variant="calm" className="h-20 flex-col gap-2">
              <Heart className="h-6 w-6" />
              <span className="text-xs">Wellness Plan</span>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;