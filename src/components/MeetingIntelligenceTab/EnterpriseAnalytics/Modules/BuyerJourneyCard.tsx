import React from 'react';
import { Map, Info, Frown } from 'lucide-react';

interface BuyerJourneyCardProps {
  onDataClick: (title: string, content: string, value: number) => void;
}

const BuyerJourneyCard: React.FC<BuyerJourneyCardProps> = ({ onDataClick }) => {
  const journeyItems = [
    { text: 'Need, Now', score: 5, value: 6, description: 'Identify immediate business needs and urgency factors driving the purchase decision' },
    { text: 'Exchange, Eliminate, Eradicate', score: 1, value: 5, description: 'Understand what current processes or solutions will be replaced or improved' },
    { text: 'Evaluate, Explore, Expand', score: 4, value: 2, description: 'Research phase where buyers compare options, explore alternatives, and expand their understanding' },
    { text: 'Decision', score: 1, value: 3, description: 'Final decision-making stage where buyers commit to a specific solution and vendor' },
    { text: 'Solution', score: 2, value: 4, description: 'Implementation and adoption phase where the chosen solution is deployed and integrated' }
  ];

  // Calculate overall performance based on average score
  const averageScore = journeyItems.reduce((sum, item) => sum + item.value, 0) / journeyItems.length;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
        <div className="flex items-center flex-1">
          <div className="p-2 sm:p-3 rounded-lg" style={{ backgroundColor: 'transparent' }}>
            <Map className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#605BFF' }} />
          </div>
          <div className="ml-3 sm:ml-4 flex-1">
            <div className="flex items-center flex-wrap">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Buyer's Journey</h3>
              <div className="ml-2 sm:ml-3 relative group">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-help" />
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-72 sm:w-80 p-3 bg-white text-gray-900 text-sm rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                  <div className="font-medium mb-1">Buyer's Journey - N.E.E.D.S.</div>
                  <div className="text-gray-600">Maps the buyer's progression through different stages of their purchasing process, from initial need recognition to final solution implementation, helping sales teams align their approach with buyer readiness.</div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#605BFF] font-medium">N.E.E.D.S.</p>
          </div>
        </div>
        <div className="flex items-center justify-end ml-2">
          <div className="flex items-center justify-center w-8 sm:w-12">
            <Frown 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              style={{ color: 'red' }}
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-1 sm:space-y-0">
        {journeyItems.map((item, index) => (
          <div key={index} className="py-1 sm:py-0.5 px-1 rounded-lg hover:bg-gray-50 transition-colors duration-200 relative group">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-xs sm:text-sm flex-shrink-0 w-40 sm:w-64">{item.text}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1 mx-2 sm:mx-3">
                <div 
                  className="h-1 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(item.score / 10) * 100}%`,
                    backgroundColor: item.score < 4 ? 'red' : item.score >= 4 && item.score < 6 ? '#FF8E1C' : 'green'
                  }}
                ></div>
              </div>
              <button
                onClick={() => onDataClick('Buyer Journey', item.text, item.value)}
                className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity duration-200 flex-shrink-0 min-w-[2rem]"
                style={{ 
                  color: item.score < 4 ? 'red' : item.score >= 4 && item.score < 6 ? '#FF8E1C' : 'green'
                }}
              >
                {item.value}
              </button>
            </div>
            
            {/* Tooltip */}
            <div className="absolute left-0 bottom-full mb-2 w-72 sm:w-80 p-3 bg-white text-gray-900 text-sm rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <div className="font-medium mb-1">{item.text}</div>
              <div className="text-gray-600">{item.description}</div>
              {/* Arrow */}
              <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerJourneyCard;