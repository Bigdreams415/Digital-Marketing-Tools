'use client'

import { ChangeEvent } from 'react'
import { Mail, Megaphone, Tag } from 'lucide-react'

interface CampaignDetailsProps {
  campaignName: string
  description: string
  type: 'Email' | 'SMS' | 'WhatsApp'
  tags: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onTypeSelect: (type: 'Email' | 'SMS' | 'WhatsApp') => void
}

export default function CampaignDetails({
  campaignName,
  description,
  type,
  tags,
  onChange,
  onTypeSelect,
}: CampaignDetailsProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
        <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
          <span className="bg-white/20 p-2 rounded-lg">
            <Mail className="text-white" size={20} />
          </span>
          Campaign Details
        </h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Campaign Name */}
        <div>
          <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Name
          </label>
          <div className="relative">
            <input
              id="campaignName"
              name="campaignName"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              placeholder="e.g. Summer Sale 2025"
              value={campaignName}
              onChange={onChange}
            />
            <button 
              type="button"
              className="absolute right-3 top-3 text-xs bg-blue-600/10 text-blue-600 px-2 py-1 rounded hover:bg-blue-600/20 transition-colors"
              onClick={() => {/* AI generation logic */}}
            >
              AI Suggest
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
            placeholder="Briefly describe what this campaign is about..."
            value={description}
            onChange={onChange}
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Type
          </label>
          <div className="flex gap-3">
            {['Email', 'SMS', 'WhatsApp'].map((t) => (
              <button
                key={t}
                type="button"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all flex-1 ${
                  type === t
                    ? 'bg-blue-600 text-white shadow-md border-blue-600'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => onTypeSelect(t as 'Email' | 'SMS' | 'WhatsApp')}
              >
                <span className={`p-2 rounded-full ${
                  type === t ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {t === 'Email' && <Mail size={16} />}
                  {t === 'SMS' && <Megaphone size={16} />}
                  {t === 'WhatsApp' && <Tag size={16} />}
                </span>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            Audience Tags
          </label>
          <input
            id="tags"
            name="tags"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
            placeholder="e.g. vip-customers, summer-sale"
            value={tags}
            onChange={onChange}
          />
          <p className="text-xs text-gray-500 mt-2">
            Separate tags with commas. <span className="text-blue-600 cursor-pointer">Analyze audience →</span>
          </p>
        </div>
      </div>
    </div>
  )
}