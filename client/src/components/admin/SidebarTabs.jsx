/**/
import React from 'react'; //imports react so you can use jsx

// This component receives:
// - activeTab: which tab is currently selected
// - onTabChange: function to call when user clicks a different tab
const SidebarTabs = ({activeTab, onTabChange}) =>{
  return (
    // Sidebar container with vertical layout
    <div style={{ width: '150px', borderRight: '1px solid #ccc' }}>
      
      {/* Upload Tab Button */}
      <button
        onClick={() => onTabChange('upload')} // Call parent with 'upload'
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem',
          backgroundColor: activeTab === 'upload' ? '#eee' : '#fff', // Highlight if active
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Upload
      </button>

      <button
        onClick={()=>onTabChange('gallery')} //call parent with 'gallery'
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem',
          backgroundColor: activeTab === 'gallery' ? '#eee' : '#fff', // Highlight if active
          border: 'none',
          cursor: 'pointer'
        }}
        
      >
        Gallery
      </button>
  </div>

  )
}
export default SidebarTabs;