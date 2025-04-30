'use client'
import React, { useState } from 'react';
import { useScore } from './ScoreContext';

const HtmlComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { updateScores } = useScore();
  const [rank, setRank] = useState('4');
  const [percentile, setPercentile] = useState('90');
  const [currentScore, setCurrentScore] = useState('12');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateScores(rank, percentile, currentScore);
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img src="/HTML.png" alt="HTML Logo" className="w-12 h-12" />
          <div>
            <h2 className="text-lg font-medium text-black">Hyper Text Markup Language</h2>
            <p className="text-sm text-gray-500">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
        </div>
        <button
          onClick={handleOpenPopup}
          className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors duration-300"
        >
          Update
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg relative w-full max-w-lg shadow-lg">
            {/* Popup Header */}
            <div className="flex items-center gap-4 mb-8">
              <img src="/HTML.png" alt="HTML Logo" className="w-12 h-12" />
              <h2 className="text-3xl text-black font-bold">Update scores</h2>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-medium">
                    1
                  </div>
                  <label className="text-xl text-black font-medium">Update your <span className="font-bold">Rank</span></label>
                </div>
                <input
                  type="text"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-medium">
                    2
                  </div>
                  <label className="text-xl text-black font-medium">Update your <span className="font-bold">Percentile</span></label>
                </div>
                <input
                  type="text"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-medium">
                    3
                  </div>
                  <label className="text-xl text-black font-medium">Update your <span className="font-bold">Current Score (out of 15)</span></label>
                </div>
                <input
                  type="text"
                  value={currentScore}
                  onChange={(e) => setCurrentScore(e.target.value)}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-blue-900 font-medium"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors duration-300 flex items-center gap-2"
                >
                  save
                  <span className="text-xl">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HtmlComponent;