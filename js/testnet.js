 // testnet token
 $('#testnet-token').click(function () {
     $('#card-row').html("");

     let element_id = '#card-row'
     let api_url =
         "https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x5D0778eDE3867c69590FE611fCF8e233887CB655&startblock=0&endblock=99999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

     testNetToken(api_url, element_id);
 });


 // testnet rollups
 $('#testnet-rollup').click(function () {
     $('#card-row').html("");
     let element_id = '#card-row'
     let api_url = "https://api-ropsten.etherscan.io/api?module=account&action=txlistinternal&address=0xFa32465ddFC3628F8723fe7941F035a494bfbFf2&startblock=0&endblock=999999999&sort=asc&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"

     rollup(api_url, element_id);
 });


 // testnet & mainnet 
 function testNetToken(api_url, element_id) {

     $.get(api_url,
         function (data) {
             if (data.status) {

                 var html = ''
                 $.each(data.result, function (index, value) {

                     html += '<div class="card no-border mb-3 bg-dark1">' +
                         '<div class="card-body bg-dark1 mb-3">' +
                         '<div class="row mb-2">' +
                         '<div class="col-sm-2 col-md-2">' +
                         '<div class="row">' +
                         '<div class="col-sm-12 col-md-12">' +
                         '<h6 class="text-white text-center">#' + value.blockNumber + '</h6>' +
                         '</div>' +
                         '</div>' +
                         '<div class="row">' +
                         '<div class="col-sm-12 col-md-12">' +
                         '<h6 class="text-purple text-center">Block</h6>' +
                         '</div>' +
                         '</div>' +
                         '</div>' +
                         '<div class="col-sm-6 col-md-6">' +
                         '<div class="row">' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p">3 Transactions </p>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p"> 1,840 bytes </p>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p">35 seconds ago </p>' +
                         '</div>' +
                         '</div>' +
                         '<div class="row">' +
                         '<div class="col-sm-2 col-md-2">' +
                         '<p class="text-light-p text-left">Miner</p>' +
                         '</div>' +
                         '<div class="col-sm-10 col-md-10">' +
                         '<h6 class="text-purple text-center hash">' + value.hash + '</h6>' +
                         '</div>' +
                         '</div>' +
                         '<div class="row">' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p text-left">Reward</p>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p text-center">3.2 ETH</p>' +
                         '</div>' +
                         '</div>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                         '</div>' +
                         '</div>' +
                         '</div>' +
                         '</div>';

                     if (!$.inArray(tokens,value)) {
                        tokens.push(value);
                    }

                 });

                 $(element_id).append(html);

                //  tokens.push(data.result)
             }
         });
 }


 // roll ups // testnet & mainnet 
 function rollup(api_url, element_id) {

     $.get(api_url,
         function (data) {
             if (data.status) {
                 var html = ''
                 var time = ""
                 $.each(data.result, function (index, value) {

                    //  var block_number = value.blockNumber
                    //  var block_api = "https://api-ropsten.etherscan.io/api?module=block&action=getblockreward&blockno=" + block_number + "&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS"
                    //  var reward = ""

                    //  $.get(block_api, function (data) {
                    //      if (data) {
                    //          reward = data.result.blockReward
                    //          console.log(data.result.blockReward)
                    //      }

                    //  });

                     html += '<div class="card no-border mb-3 bg-dark1">' +
                         '<div class="card-body bg-dark1 mb-3">' +
                         '<div class="row mb-2">' +
                         '<div class="col-sm-2 col-md-2">' +
                         '<div class="row">' +
                         '<div class="col-sm-12 col-md-12">' +
                         '<h6 class="text-white text-center">#' + value.blockNumber + '</h6>' +
                         '</div>' +
                         '</div>' +
                         '<div class="row">' +
                         '<div class="col-sm-12 col-md-12">' +
                         '<h6 class="text-purple text-center">Block</h6>' +
                         '</div>' +
                         '</div>' +
                         '</div>' +
                         '<div class="col-sm-6 col-md-6">' +
                         '<div class="row">' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p">3 Transactions </p>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p"> 1,840 bytes </p>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p">35 seconds ago </p>' +
                         '</div>' +
                         '</div>' +
                         '<div class="row">' +
                         '<div class="col-sm-2 col-md-2">' +
                         '<p class="text-light-p text-left">Miner</p>' +
                         '</div>' +
                         '<div class="col-sm-10 col-md-10">' +
                         '<h6 class="text-purple text-center hash">' + value.hash + '</h6>' +
                         '</div>' +
                         '</div>' +
                         '<div class="row">' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p text-left">Reward</p>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p text-center">3.2 ETH</p>' +
                         '</div>' +
                         '</div>' +
                         '</div>' +
                         '<div class="col-sm-4 col-md-4">' +
                         '<p class="text-light-p text-right">' + value.gasUsed + ' Gas Used</p>' +
                         '</div>' +
                         '</div>' +
                         '</div>' +
                         '</div>';

                 });

                 $(element_id).append(html);
             }
         });
 }