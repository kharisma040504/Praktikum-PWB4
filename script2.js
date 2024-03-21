$(document).ready(function() {
    $('#datasetForm').submit(function(event) {
        event.preventDefault();

        // Reset border color
        $('input, textarea').css('borderColor', '');

        // Retrieve form data
        const formData = {
            datasetName: $('#datasetName').val(),
            creator: $('#creator').val(),
            verifier: $('#verifier').val(),
            recordCount: $('#recordCount').val(),
            attributeCount: $('#attributeCount').val(),
            sourceDescription: $('#sourceDescription').val(),
            startDate: $('#startDate').val(),
            endDate: $('#endDate').val(),
            completionStatus: $('#completionStatus').val(),
            completionNote: $('#completionNote').val(),
            recordTime: new Date().toLocaleString()
        };

        // Validate form data
        let isValid = true;
        $.each(formData, function(key, value) {
            if (!value) {
                $(`#${key}`).css('borderColor', 'red');
                isValid = false;
            }
        });

        // Validate record count and attribute count
        if (formData.recordCount <= 0 || formData.attributeCount <= 0) {
            $('#recordCount, #attributeCount').css('borderColor', 'red');
            isValid = false;
        }

        // Validate start date and end date
        const startDate = new Date(formData.startDate);
        const endDate = new Date(formData.endDate);
        if (startDate > endDate) {
            $('#startDate, #endDate').css('borderColor', 'red');
            isValid = false;
        }

        if (!isValid) {
            alert('Mohon lengkapi semua field yang diperlukan.');
            return;
        }

        // Construct success message
        const successMessage =
            `PENDAFTARAN DATASET BERHASIL!
Nama Dataset: ${formData.datasetName}
Pembuat Dataset: ${formData.creator}
Verifikator Dataset: ${formData.verifier}
Jumlah Records: ${formData.recordCount}
Jumlah Attribute Data: ${formData.attributeCount}
Deskripsi Sumber Data: ${formData.sourceDescription}
Tanggal Mulai Dibuat: ${formData.startDate}
Tanggal Selesai Dibuat: ${formData.endDate}
Status Penyelesaian: ${formData.completionStatus}
Catatan Akhir: ${formData.completionNote}`;

        // Display success message
        alert(successMessage);

        // Reset form
        $('#datasetForm')[0].reset();
    });
});
