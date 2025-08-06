import CampaignForm from './components/campaignsForm'

export default function CampaignPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Campaign Studio</h1>
          <p className="text-lg text-gray-600">Create marketing campaigns that convert</p>
        </div>
        <CampaignForm />
      </div>
    </main>
  )
}