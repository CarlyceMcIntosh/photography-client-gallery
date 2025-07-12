/*Client Selector Dropdown Menu Component */
import React from 'react'; // Import React to use JSX and create components

// Define a functional component called ClientSelector
// It accepts two props: selectedClient and onClientChange

const ClientSelector =({selectedClient, onClientChange})=>{
  return(
    <div style={{ marginBottom: '1rem' }}>
      <label>Select Client</label>

      {/* Dropdown menu (select input) */}
      <select 
        value={selectedClient} // Controlled input: bound to parent state
        onChange={(e) => onClientChange(e.target.value)} // When changed, send new value to parent via callback
        style={{ marginLeft: '1rem' }}
      >
        {/* Default placeholder option */}
        <option value="">-- Choose Client --</option>

        {/* Hardcoded client options for now — later you can map this from API data */}
        <option value="client1@example.com">client1@example.com</option>
        <option value="client2@example.com">client2@example.com</option>

      </select>
    </div>
  )
}
// Export the component so it can be used in other files
export default ClientSelector;


