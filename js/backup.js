function getBlock(number){

    console.log("Get block reward")
    
    var block_number = number;
    var apiUrl = "https://api.etherscan.io/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            return num/1000000000000000000;
        }
     }
   });
}



function getBlockPegTokenNumber(number){

    //alert(number);
    
    var block_number = number;
    var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD";
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            return num/1000000000000000000;
        }
     }
   });
}

function getBlockPegRollNumber(number){

console.log("Get block reward")
    
    var block_number = number;
    var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            return num/1000000000000000000;
        }
     }
   });
}

function getBlockPegLockNumber(number){

console.log("Get block reward")
    
    var block_number = number;
    var apiUrl = "https://api.bscscan.com/api?module=block&action=getblockreward&blockno="+number+"&apikey=TH6XW2FQY1I8CDFWVD6YD9XCRYHYTUQ9BD";
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: true, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            return num/1000000000000000000;
        }
     }
   });
}



function getBlocka(number){

    console.log("Get block reward")
    
    var block_number = number;
    var apiUrl = "https://api-ropsten.etherscan.io/api?module=block&action=getblockreward&blockno="+number+"&apikey=9439IK1Y6D6UZFBN298YATMAAAXD3XSIVS";
    var block_rewards = 0;
    
    $.ajax({
        url: apiUrl,
        type: "GET",
        async: false, // set to false so order of operations is correct
        data: {block_number : block_number},
        success: function(data){
        if(data.status){
            console.log("data"+"block_number"+block_number+" "+data.result.blockReward);
            block_rewards = data.result.blockReward

            var num = parseFloat(block_rewards);
            return num/1000000000000000000;
        }
     }
   });
}