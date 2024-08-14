// script.js
document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const inputData = document.getElementById('inputData').value;

    try {
        const response = await fetch('http://localhost:5000/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputData }),
        });

        const result = await response.json();
        document.getElementById('response').innerText = `Response from server: ${result.message}`;
    } catch (error) {
        console.error('Error:', error);
    }
});
