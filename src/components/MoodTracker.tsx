import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Meh, Frown, Heart, Zap, Brain } from "lucide-react";

const moods = [
  { id: "great", icon: Smile, label: "Great", color: "bg-wellness" },
  { id: "good", icon: Heart, label: "Good", color: "bg-accent" },
  { id: "okay", icon: Meh, label: "Okay", color: "bg-primary" },
  { id: "low", icon: Frown, label: "Low", color: "bg-alert" },
];

const activities = [
  { id: "study", label: "Study", icon: Brain },
  { id: "exercise", label: "Exercise", icon: Zap },
  { id: "social", label: "Social", icon: Heart },
  { id: "rest", label: "Rest", icon: Smile },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [hasTrackedToday, setHasTrackedToday] = useState(false);

  const handleSubmit = () => {
    if (selectedMood) {
      setHasTrackedToday(true);
      // Here you would typically save to database
    }
  };

  const toggleActivity = (activityId: string) => {
    setSelectedActivities(prev => 
      prev.includes(activityId) 
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  if (hasTrackedToday) {
    return (
      <Card className="bg-gradient-wellness text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smile className="h-5 w-5" />
            Mood Tracked Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-90">
            Thank you for checking in today. Remember to take care of yourself!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-calm shadow-soft">
      <CardHeader>
        <CardTitle>How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {moods.map((mood) => (
            <Button
              key={mood.id}
              variant={selectedMood === mood.id ? "wellness" : "calm"}
              className="h-20 flex-col gap-2"
              onClick={() => setSelectedMood(mood.id)}
            >
              <mood.icon className="h-6 w-6" />
              <span className="text-xs">{mood.label}</span>
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            What activities did you do today?
          </p>
          <div className="flex flex-wrap gap-2">
            {activities.map((activity) => (
              <Badge
                key={activity.id}
                variant={selectedActivities.includes(activity.id) ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1 transition-all duration-200"
                onClick={() => toggleActivity(activity.id)}
              >
                <activity.icon className="h-3 w-3 mr-1" />
                {activity.label}
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleSubmit} 
          disabled={!selectedMood}
          variant="wellness"
          className="w-full"
        >
          Track My Mood
        </Button>
      </CardContent>
    </Card>
  );
};