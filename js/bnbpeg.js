// bnbpeg click event
$('#bnbpeg-token').click(function () {
    bnbTab = 'token';

    $('#bnb-table tbody').html("");
    let element_id = '#bnb-table';
    // let token = "TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD";
    let api_url = "https://api.bscscan.com/api?module=account&action=txlist&address=0x3e3B357061103DC040759aC7DceEaba9901043aD&startblock=1&endblock=99999999&sort=asc&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"

    bnbPegToken(api_url, element_id);

});


$('#bnbpeg-rollup').click(function () {
    bnbTab = 'rollup';

    $('#bnb-table tbody').html("");
    let element_id = '#bnb-table';
    // let token = "TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"
    let api_url = "https://api.bscscan.com/api?module=account&action=txlist&address=0xABa46894aCaB62A47Ff28c0a69e6333B80425dA5&startblock=1&endblock=99999999&sort=asc&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD"

    bnbPegRollup(api_url, element_id);
});

function bnbPegToken(api_url, element_id) {

    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
                            html += '<tr>'+
                                '<td class="text-left">'
                                    +value.blockNumber+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.hash.toString()+
                                '</td>'+
                                '<td class="text-left">'
                                    +value.gasUsed+
                                '</td>'+
                                '<td class="text-left">'+
                                    '3.5 ETH'+
                                '</td>'+
                                '<td class="text-left">'
                                    +date.toLocaleTimeString()+
                                '</td>'+
                            '</tr>';
                        }
                    } else {
                        html += '<tr>'+
                                    '<td class="text-left">'
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td class="text-left">'+
                                        '3.5 ETH'+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                                '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $('#bnb-table').append(html);
                
            }
        });
}


function bnbPegRollup(api_url, element_id) {
    $.get(api_url,
        function (data) {
            if (data.status) {
                var html = ''
                $.each(data.result, function (index, value) {
                    const date = new Date(value.timeStamp * 1000);
                    if (searchToken != '') {
                        if (searchToken == value.hash.toString()) {
                            html += '<tr>'+
                                    '<td class="text-left">'+
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td class="text-left">'+
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td class="text-left">'+
                                        '3.5 BNB'+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                            '</tr>';
                        }
                    } else {
                        html += '<tr>'+
                                    '<td class="text-left">'+
                                        +value.blockNumber+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +value.hash.toString()+
                                    '</td>'+
                                    '<td class="text-left">'+
                                        +value.gasUsed+
                                    '</td>'+
                                    '<td class="text-left">'+
                                        '3.5 BNB'+
                                    '</td>'+
                                    '<td class="text-left">'
                                        +date.toLocaleTimeString()+
                                    '</td>'+
                            '</tr>';
                    }

                });

                if (data.result.length == 0) {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                } else if (html == '') {
                    html = '<div style="color: #8A8DBA !important;">No records found!</div>'
                }

                $('#bnb-table tbody').append(html);
            }
        });
}
