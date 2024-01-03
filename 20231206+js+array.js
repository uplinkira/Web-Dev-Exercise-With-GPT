<script>
    // arrays exercise
    var list = [];
    list.push(create());
    list.push(create());
    list.push(create());
    list.push(create());
    //用中英双语解释list.push：把create()的结果放到list里面去
    //为什么是push? 因为list是一个array，array里面有很多元素，所以要把新的元素push进去
    //从英语词源解释，push是推的意思，所以push是把新的元素推进去
    // change color of balls in array
    var i=0;
    var length = list.length;
    while (i < length){
        var ball = list[i];
        colorRandom(ball);
        i++;
    }
    
    //只让其中3个球变色3次，其他球不变色
    //en: only let 3 balls change color 3 times, other balls don't change color
    var i=0;
    var length = list.length - 1;
    while (i < length){
        var ball = list[i];
        colorRandom(ball);
        i++;
    }

</script>