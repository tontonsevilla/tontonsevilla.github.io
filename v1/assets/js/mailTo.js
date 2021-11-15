function mailTo() {
    if ($('#mailTo_form')[0].reportValidity()) {
        var subject = 'Message from GitHub Personal Page';
        var message = `Name: ${$('#mailTo_name').val()} %0d%0a Message: ${$('#mailTo_message').val()} %0d%0a    `;
        window.open(`mailto:winston_sevilla@outlook.com?subject=${subject}&body=${message}`);   
    }
}