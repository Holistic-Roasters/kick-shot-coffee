'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface BackerReward {
  id: string;
  title: string;
  price: number;
  isPopular?: boolean;
  benefits: string[];
}

interface BackerRewardsProps {
  rewards: BackerReward[];
  onSelectReward?: (reward: BackerReward) => void;
  selectedRewardId?: string;
  linkPrefix?: string;
  className?: string;
}

export default function BackerRewards({
  rewards,
  onSelectReward,
  selectedRewardId,
  linkPrefix = '/preorder?tier=',
  className = ''
}: BackerRewardsProps) {
  const [hoveredRewardId, setHoveredRewardId] = useState<string | null>(null);

  const handleSelectReward = (reward: BackerReward) => {
    if (onSelectReward) {
      onSelectReward(reward);
    }
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {rewards.map((reward) => {
        const isSelected = selectedRewardId === reward.id;
        const isHovered = hoveredRewardId === reward.id;
        
        return (
          <div 
            key={reward.id}
            className={`
              bg-blackout-black p-6 
              ${reward.isPopular ? 'border-2 border-neuro-yellow relative' : 'border border-asphalt-gray hover:border-neuro-yellow transition-colors'}
              ${isSelected ? 'ring-2 ring-toxic-cyan' : ''}
            `}
            onMouseEnter={() => setHoveredRewardId(reward.id)}
            onMouseLeave={() => setHoveredRewardId(null)}
          >
            {reward.isPopular && (
              <div className="absolute top-0 right-0 bg-neuro-yellow text-blackout-black font-trench px-4 py-1 transform translate-y-[-50%]">
                POPULAR
              </div>
            )}
            <h3 className="text-2xl font-trench text-neuro-yellow mb-2">{reward.title}</h3>
            <p className="text-toxic-cyan text-xl mb-4">${reward.price}</p>
            <ul className="text-white space-y-2 mb-6">
              {reward.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-neuro-yellow mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            {onSelectReward ? (
              <button 
                onClick={() => handleSelectReward(reward)}
                className={`
                  w-full font-trench uppercase py-2 px-4 text-center transition-colors
                  ${isSelected || isHovered 
                    ? 'bg-toxic-cyan text-blackout-black' 
                    : 'bg-neuro-yellow text-blackout-black hover:bg-toxic-cyan'}
                `}
              >
                {isSelected ? 'Selected' : 'Select Package'}
              </button>
            ) : (
              <Link 
                href={`${linkPrefix}${reward.id}`}
                className="block bg-neuro-yellow text-blackout-black font-trench uppercase py-2 px-4 text-center hover:bg-toxic-cyan transition-colors"
              >
                Select Reward
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
