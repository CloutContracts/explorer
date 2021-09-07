$('#etcpeg-token').click(function () {
    etcTab = 'token';

    $('#peg-table tbody').html("");
    let element_id = '#peg-table';
    let api_url =
        "https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=0x9186ff77866DfD1007429F552e48C6d1A927297A"
    etcPegToken(api_url, element_id)
});

$('#etcpeg-rollup').click(function () {
    etcTab = 'rollup';
    $('#peg-table tbody').html("");
    let element_id = '#peg-table';
    let api_url =
        "https://blockscout.com/etc/mainnet/api?module=account&action=txlist&address=0x6f6ed4820E44128794D22eB0b8B5c035a8Eac4E6"
    etcPegRollup(api_url, element_id);
});
// 0x9186ff77866DfD1007429F552e48C6d1A927297A
$('#etcpeg-lock').click(function () {
    etcTab = 'lock';
    console.log("Click Triggered");
    
    $('#peg-table tbody').html("");
    let element_id = '#peg-table';
    let api_url = "https://api.etherscan.io/api?module=account&action=txlist&address=0x2C7716BDf98e181df4CF1b40aD7648A40EE813b9&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"
    
    etcPegLock(api_url, element_id)
});

// etc peg token
function etcPegToken(api_url, element_id) {
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

                $('#peg-table').append(html);

            }
        });
}

// etc peg roll ups
function etcPegRollup(api_url, element_id) {
    
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
                                        '3.5 ETC'+
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
                                        '3.5 ETC'+
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

                $('#peg-table tbody').append(html);
            }
        });
}

function etcPegLock(api_url, element_id) {
    
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
                                        '3.5 ETC'+
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
                                        '3.5 ETC'+
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

                $('#peg-table tbody').append(html);
            }
        });
}
