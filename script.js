let workerCount = 0;
let materialCount = 0;
let equipmentCount = 0;
let toolCount = 0;

// Add Worker Button
document.getElementById('add-worker').addEventListener('click', function() {
    workerCount++;
    const table = document.getElementById('worker-table');
    const row = table.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    const nameInput = document.createElement('input');
    const designationInput = document.createElement('input');
    
    nameInput.type = 'text';
    designationInput.type = 'text';
    
    // Set unique id for each worker field
    nameInput.id = `worker-name-${workerCount}`;
    designationInput.id = `worker-designation-${workerCount}`;
    
    cell1.appendChild(nameInput);
    cell2.appendChild(designationInput);
});

// Add Material Button
document.getElementById('add-material').addEventListener('click', function() {
    materialCount++;
    const table = document.getElementById('materials-table');
    const row = table.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    const quantityInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const sourceInput = document.createElement('input');
    
    quantityInput.type = 'text';
    descriptionInput.type = 'text';
    sourceInput.type = 'text';
    
    // Set unique id for each material field
    quantityInput.id = `material-quantity-${materialCount}`;
    descriptionInput.id = `material-description-${materialCount}`;
    sourceInput.id = `material-source-${materialCount}`;
    
    cell1.appendChild(quantityInput);
    cell2.appendChild(descriptionInput);
    cell3.appendChild(sourceInput);
});

// Add Heavy Equipment Button
document.getElementById('add-equipment').addEventListener('click', function() {
    equipmentCount++;
    const table = document.getElementById('equipment-table');
    const row = table.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    const quantityInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const sourceInput = document.createElement('input');
    
    quantityInput.type = 'text';
    descriptionInput.type = 'text';
    sourceInput.type = 'text';
    
    // Set unique id for each equipment field
    quantityInput.id = `equipment-quantity-${equipmentCount}`;
    descriptionInput.id = `equipment-description-${equipmentCount}`;
    sourceInput.id = `equipment-source-${equipmentCount}`;
    
    cell1.appendChild(quantityInput);
    cell2.appendChild(descriptionInput);
    cell3.appendChild(sourceInput);
});

// Add Tools & Machinery Button
document.getElementById('add-tools').addEventListener('click', function() {
    toolCount++;
    const table = document.getElementById('tools-table');
    const row = table.insertRow();
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    
    const quantityInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const sourceInput = document.createElement('input');
    
    quantityInput.type = 'text';
    descriptionInput.type = 'text';
    sourceInput.type = 'text';
    
    // Set unique id for each tool field
    quantityInput.id = `tool-quantity-${toolCount}`;
    descriptionInput.id = `tool-description-${toolCount}`;
    sourceInput.id = `tool-source-${toolCount}`;
    
    cell1.appendChild(quantityInput);
    cell2.appendChild(descriptionInput);
    cell3.appendChild(sourceInput);
});