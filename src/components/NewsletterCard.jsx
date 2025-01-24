import { HiOutlinePencil } from 'react-icons/hi';

export default function NewsletterCard() {
  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-black rounded-lg">
          <HiOutlinePencil className="w-5 h-5" />
        </div>
        <span className="text-gray-400">Customize newsletters</span>
      </div>
      
      <h2 className="text-2xl font-semibold">We made it simple to create<br />stunning newsletters</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">To:</label>
          <select className="w-full bg-black/30 border border-white/10 rounded-lg p-2">
            <option>All Contacts</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Subject:</label>
          <input 
            type="text" 
            value="Exciting updates are on the way!"
            className="w-full bg-black/30 border border-white/10 rounded-lg p-2"
            readOnly
          />
        </div>

        <div className="flex gap-2">
          <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm">
            Monthly updates
          </span>
        </div>
      </div>
    </div>
  );
}
