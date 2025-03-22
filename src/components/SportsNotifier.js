import { useState } from "react";
import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export default function SportsNotifier() {
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [teams] = useState(["Real Madrid", "Barcelona", "Manchester United", "Bayern Munich"]);
  const [matches] = useState([
    { team: "Real Madrid", date: "Mar 24'25", time: "20:00" },
    { team: "Barcelona", date: "Mar 25'25", time: "18:30" },
  ]);

  const handleSelectTeam = (team) => {
    setFavoriteTeam(team);
  };

  const handleNotificationToggle = (match) => {
    setNotifications((prev) =>
      prev.includes(match) ? prev.filter((m) => m !== match) : [...prev, match]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 p-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Sports Notifier</h1>
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <Card className="w-full bg-white text-black shadow-lg rounded-2xl p-4">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">Selecciona tu equipo favorito</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {teams.map((team) => (
              <div key={team} className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
                <Checkbox
                  checked={favoriteTeam === team}
                  onCheckedChange={() => handleSelectTeam(team)}
                />
                <span className="text-lg font-medium">{team}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="w-full bg-white text-black shadow-lg rounded-2xl p-4">
          <CardHeader>
            <CardTitle className="text-center text-xl font-semibold">Próximos partidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {matches.map((match, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition">
                <div>
                  <p className="text-lg font-semibold">{match.team}</p>
                  <p className="text-sm text-gray-600">{match.date} - {match.time}</p>
                </div>
                <Button
                  variant={notifications.includes(match) ? "secondary" : "default"}
                  className={`p-2 rounded-full transition-all ${notifications.includes(match) ? "bg-green-500" : "bg-blue-500"}`}
                  onClick={() => handleNotificationToggle(match)}
                >
                  <Bell className="w-6 h-6 text-white" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
