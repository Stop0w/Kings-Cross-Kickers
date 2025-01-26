import React from 'react';

export function Schedule() {
  return (
    <div className="space-y-12">
      <div className="glass-card p-6 rounded-xl overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6">Match Schedule</h2>
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 text-left">Date</th>
              <th className="py-3 text-left">Time</th>
              <th className="py-3 text-left">Location</th>
              <th className="py-3 text-left">Teams</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item} className="border-b border-white/5">
                <td className="py-3">Mar {item}, 2024</td>
                <td className="py-3">9:00 AM</td>
                <td className="py-3">Main Field</td>
                <td className="py-3">Team A vs Team B</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Announcements</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="glass-card p-6 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Announcement Title</h3>
                <span className="text-sm text-gray-400">Mar {item}, 2024</span>
              </div>
              <p className="text-gray-300">
                Announcement content goes here. This is a placeholder text for the announcement.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
