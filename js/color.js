
var Links={
    SetColor:function(color){
        $('a').css('color',color);

    }
}


var Body = {
    SetColor : function(color){ 
       $('body').css('color',color);
    },
    SetBackgroundColor : function(color){
       $('body').css('backgroundColor',color);
    }
}

function nightDayHandler(self){
    if(self.value === 'day'){
        Body.SetBackgroundColor('#ffffff'); // 짙은 그린
        Body.SetColor('#000000');           // 화이트
        Links.SetColor('#007BFF');          // 강조 색상 그린
        self.value='night';  
    }else{
        Body.SetBackgroundColor('#2c2c2c'); // 기본 색상 블루
        Body.SetColor('#d3d3d3');           // 블랙
        Links.SetColor('#1e90ff');          // 짙은 블루
        self.value='day';  
    }
}
