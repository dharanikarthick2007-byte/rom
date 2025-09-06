import { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard";
import Leaderboard from "../components/Leaderboard";
import EcoTokenDisplay from "../components/EcoTokenDisplay";

export default function Home() {
  const [challenges, setChallenges] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [ecoTokens, setEcoTokens] = useState(0);

  useEffect(() => {
    fetch("/api/challenges").then(res => res.json()).then(setChallenges);
    fetch("/api/leaderboard").then(res => res.json()).then(setLeaderboard);
    fetch("/api/tokens").then(res => res.json()).then(data => setEcoTokens(data.tokens));
  }, []);

  return (
    <div className="min-h-screen bg-green-50">
      <header className="p-4 bg-green-600 text-white text-2xl font-bold">Carbon Clash</header>
      <main className="p-4">
        <EcoTokenDisplay tokens={ecoTokens} />
        <section>
          <h2 className="text-xl font-semibold mt-4">Today's Eco-Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((ch, i) => <ChallengeCard key={i} challenge={ch} />)}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mt-8">Leaderboard</h2>
          <Leaderboard data={leaderboard} />
        </section>
      </main>
    </div>
  );
}