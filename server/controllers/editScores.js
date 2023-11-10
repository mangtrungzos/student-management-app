function editStudent(masv) {
    const editUrl = `editScore.html?masv=${masv}`;

    window.location.href = editUrl;
}

function back() {
    window.location.href = '../../client/pages/studentScore.html';
}

// Trích xuất ID từ URL
const urlParams = new URLSearchParams(window.location.search);
const masv = urlParams.get('masv');
fetch(`http://localhost:3000/getScore/${masv}`)
    .then(response => response.json())
    .then(student => {
        document.getElementById('MASV').value = student.MASV;
        document.getElementById('MAMH').value = student.MAMH;
        document.getElementById('TENMH').value = student.TENMH;
        document.getElementById('DIEM').value = student.DIEM;
    })
    .catch(error=> {
        console.error('There was an error fetching student data:', error);
    });


document.getElementById('studentform').addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form default behavior

    const newDiem = document.getElementById('DIEM').value;

    const data = {
        "DIEM": newDiem
    };

    fetch(`http://localhost:3000/score/update/${masv}`, {    
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }) 
    
    .then(result => {
      console.log(result); 
    })
    .catch(error => console.error('failed:', error));
});
    