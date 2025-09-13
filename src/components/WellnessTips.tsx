import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Heart, Moon, Brain } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Take Regular Breaks",
    description: "Try the 25-5 rule: Study for 25 minutes, then take a 5-minute break.",
    category: "Study",
    icon: Brain,
    priority: "high"
  },
  {
    id: 2,
    title: "Practice Deep Breathing",
    description: "4-7-8 breathing: Inhale for 4, hold for 7, exhale for 8 seconds.",
    category: "Stress",
    icon: Heart,
    priority: "medium"
  },
  {
    id: 3,
    title: "Maintain Sleep Schedule",
    description: "Aim for 7-9 hours of sleep and try to go to bed at the same time each night.",
    category: "Sleep",
    icon: Moon,
    priority: "high"
  }
];

export const WellnessTips = () => {
  return (
    <Card className="bg-gradient-calm shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-wellness" />
          Daily Wellness Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tips.map((tip) => (
          <div key={tip.id} className="border-l-4 border-wellness pl-4 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground flex items-center gap-2">
                <tip.icon className="h-4 w-4 text-wellness" />
                {tip.title}
              </h4>
              <Badge 
                variant={tip.priority === "high" ? "default" : "secondary"}
                className="text-xs"
              >
                {tip.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{tip.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};