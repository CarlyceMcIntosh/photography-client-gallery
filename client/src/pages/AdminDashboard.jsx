/*this page ... */
import React, {useState} from 'react';
import ClientSelector from '../components/admin/ClientSelector'; //imports reusable component
import SidebarTabs from '../components/admin/SideBarTabs';
import UploadForm from '../components/admin/UploadForm';
import GalleryView from '../components/admin/GalleryView';

const AdminDashboard = () =>{
  // State to track which client is selected
  const [selectedClient, setSelectedClient] = useState('');
  // State to track which tab is active: 'upload' or 'gallery'
  const [activeTab, setActiveTab] = useState('upload')

  return(
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      {/*ClientSelector component */}
      {/* Pass in current selected client and the function to update it */}
      <ClientSelector
        selectedClient={selectedClient}
        onClientChange={setSelectedClient}
      />
      {/* Layout: Sidebar + Content Area */}
      <div style={{ display: 'flex', border: '1px solid #ccc' }}>
        {/* Sidebar */}
        <SidebarTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {/* Main Content (placeholder for now) */}
        <div style={{ flex: 1, padding: '1rem' }}>
          {activeTab === 'upload' ? (
            <UploadForm selectedClient={selectedClient} />

          ) : (
            <GalleryView selectedClient={selectedClient}/>

          )}
          </div>
        </div>
    </div>
  );
};
export default AdminDashboard;