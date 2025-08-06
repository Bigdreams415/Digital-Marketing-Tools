'use client'

import { useState, ChangeEvent } from 'react'
import CampaignDetails from './CampaignDetails'

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    campaignName: '',
    description: '',
    type: 'Email' as 'Email' | 'SMS' | 'WhatsApp',
    tags: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTypeSelect = (selectedType: 'Email' | 'SMS' | 'WhatsApp') => {
    setFormData((prev) => ({ ...prev, type: selectedType }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Campaign Created:', formData)
    // Add your submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <CampaignDetails
        campaignName={formData.campaignName}
        description={formData.description}
        type={formData.type}
        tags={formData.tags}
        onChange={handleChange}
        onTypeSelect={handleTypeSelect}
      />

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          Launch Campaign
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </form>
  )
}