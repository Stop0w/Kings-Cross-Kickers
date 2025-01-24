import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { HiOutlineChartBar } from 'react-icons/hi';

const data = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 30 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 32 },
  { month: 'May', value: 40 },
  { month: 'Jun', value: 45 },
  { month: 'Jul', value: 48 },
];

export default function AnalyticsCard() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-black rounded-lg">
          <HiOutlineChartBar className="w-5 h-5" />
        </div>
        <span className="text-gray-400">Advanced analytics data</span>
      </div>
      
      <h2 className="text-2xl font-semibold">Access powerful data to help<br />you boost your business</h2>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Monthly Income</span>
          <span className="text-green-500 text-sm">+25%</span>
        </div>
        <div className="text-3xl font-bold">$68,900</div>
      </div>

      <LineChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
        <XAxis dataKey="month" stroke="#666" />
        <YAxis stroke="#666" />
        <Line type="monotone" dataKey="value" stroke="#FF6B00" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
}
