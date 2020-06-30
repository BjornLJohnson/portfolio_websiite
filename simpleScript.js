var value = 2000;
authToken = "";
theContent = {
    "key1": "hello",
    "key2": "world",
    "key3": "amazon"
}


$(document).ready(function () {
    $("#theButton").click(sendRequest);

    function sendRequest(){
        $.ajax({
            method: 'GET',
            url: 'https://8x6sxe620f.execute-api.us-west-2.amazonaws.com',
//             headers: {
//                 Authorization: authToken
//             },
//             data: JSON.stringify(theContent),
//             contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error executing lambda function: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when processing your request :\n' + jqXHR.responseText);
            }
        });
    };
    
    function completeRequest(result) {
        console.log('Response received from API: ', result);
    }
}); 

