import AnalyticsCard from './components/AnalyticsCard';
import SupportCard from './components/SupportCard';
import NewsletterCard from './components/NewsletterCard';
import SoccerBall from './components/SoccerBall';

export default function App() {
  return (
    <div className="min-h-screen py-12 px-6 relative overflow-hidden">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <SoccerBall />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-6">
          <AnalyticsCard />
          <div className="space-y-6">
            <SupportCard />
            <NewsletterCard />
          </div>
        </div>
      </div>
    </div>
  );
}
