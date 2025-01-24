import { HiOutlineChatAlt2 } from 'react-icons/hi';

export default function SupportCard() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-black rounded-lg">
          <HiOutlineChatAlt2 className="w-5 h-5" />
        </div>
        <span className="text-gray-400">Fantastic support</span>
      </div>
      
      <h2 className="text-2xl font-semibold">24/7 fast chat support</h2>
      
      <div className="flex items-start gap-3 bg-black/30 p-4 rounded-2xl">
        <img src="https://api.dicebear.com/6.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-8 h-8 rounded-full" />
        <p className="text-gray-300">Hey there! I'm here to help. 👋</p>
      </div>
    </div>
  );
}
