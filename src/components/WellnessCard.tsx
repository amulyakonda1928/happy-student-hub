import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface WellnessCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  className?: string;
  variant?: "default" | "wellness" | "alert";
}

export const WellnessCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  className,
  variant = "default"
}: WellnessCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-wellness";
      case "down": return "text-alert";
      case "stable": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getCardStyles = () => {
    switch (variant) {
      case "wellness": return "bg-gradient-energy border-wellness/20 shadow-wellness";
      case "alert": return "bg-gradient-to-br from-alert/10 to-alert/5 border-alert/20";
      default: return "bg-gradient-calm shadow-soft";
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      getCardStyles(),
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn(
          "h-4 w-4",
          variant === "wellness" ? "text-wellness" : 
          variant === "alert" ? "text-alert" : "text-primary"
        )} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {trend && trendValue && (
          <p className={cn("text-xs flex items-center gap-1 mt-1", getTrendColor())}>
            <span>{trendValue}</span>
            <span>vs last week</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};