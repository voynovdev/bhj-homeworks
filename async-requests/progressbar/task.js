const progress = document.getElementById( 'progress' );

document.getElementById('form').addEventListener('submit', (e)=>{
	e.preventDefault()
	const xhr = new XMLHttpRequest()
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            let percentComplete = (event.loaded / event.total);
            progress.value = percentComplete;
        }
    })
    xhr.open(`POST`, `https://students.netoservices.ru/nestjs-backend/upload`)
	const formData = new FormData(document.getElementById('form'));
	xhr.send(formData);
})
