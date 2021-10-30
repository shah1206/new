var canvas, hangman , mon, choice, manHappy,eximg, running,hunt,rand,word,lives,hint,stone,stoneImg, current_response
var p=0
var c=0
var GameState=0
var result=[]
var array=[]
var words = ["ANIMALS" , "YELLOW", "LAWYER", "ACCOUNTANT", "SURGEON","SYMPHONY","CHARTER","ADDITIONAL","DESPOSITION","EROSION","CHEMISTRY","GEOGRAPHY","WEATHERING","MULTIPLICATION","SUBLIMATION","VAPORIZATION","POSTURE","SOCIOLOGY","EDUCATION","CELEBRATION","POPULARITY","DISCOVERY","FORMULA"]
hint=["cat and dogs are both?","color","court case","works with numbers","helps cure people","beethoven was popular for his?","a type of legal document","means to add","the movement of sand","the gradual destruction ","the study of chemicals","the study of the earth","the breakage of rocks over time","product","the conversion from solid directly to gas","liquid to gas","spinal...","the study of groups of people","neccasary for sucess","to commemorate","to be liked by many","to find","chemical _?" ]
function preload(){
manHappy=loadImage("photofunky.gif")
running=loadImage("new.gif")
hunt=loadImage("unnamed.gif")
stoneImg=loadImage("rock.png")
}

function setup(){
    canvas = createCanvas(1500 ,600);
    hangman= createSprite(1200,500,30,30)
    mon= createSprite(900,500,40,40)
    stone=createSprite(900,200,70,70)
    stone.addImage(stoneImg)
    stone.scale = 0.3
    stone.visible=false
    mon.shapeColor= "black"
    mon.addImage(hunt)
    rand=Math.round(random(0,22))
    //console.log(rand)
    fword=words[rand].split("")
    word=words[rand]
    //console.log(word)
    hangman.shapeColor="black"
    hangman.addImage(manHappy)
    hangman.scale=0.3
    var x=50, y=150
    for (var i =1;i<= 26;i=i+1){
        b1=createImg("alphabets/letter  ("+i+").png")
        b1.position(x,y)
         x=x+60
        if (i===8 || i==16|| i==24){
            x=50
          y=y+60
        }
        b1.size(50,50)
        //console.log("alphabets/letter  ("+i+").png")
        array.push(b1)
    }

   
}
function draw (){
    background("grey")
    drawSprites()
    fill("black")
   console.log(p)
   if (GameState==0){
 textSize(15)
 text("PRESS THE SPACE KEY TO START",100,20)   
 
    if(keyDown ("space")){
       hangman.velocityX= -3
   }
   if ( hangman.x<1050){
       hangman.velocityX=0
       hangman.velocityY= -3
       hangman.addImage(running)
       hangman.scale=0.9
   }
   if (hangman.y<200){
       hangman.velocityY=0
       GameState=1
   }
}
else if (GameState==1){
stone.visible= true
array[0].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="A"){
        console.log("y")
        result.push("A")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        console.log("N")
        hangman.y=hangman.y+10
    }
})
array[1].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="B"){
        result.push("B")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[2].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="C"){
        result.push("C")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[3].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="D"){
        result.push("D")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[4].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="E"){
        result.push("E")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[5].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="F"){
        result.push("F")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[6].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="G"){
        result.push("G")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[7].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="H"){
        result.push("H")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[8].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="I"){
        result.push("I")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[9].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="J"){
        result.push("J")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[10].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="K"){
        result.push("K")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[11].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="L"){
        result.push("L")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[12].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="M"){
        result.push("M")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[13].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="N"){
        result.push("N")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[14].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="O"){
        result.push("O")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[15].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="P"){
        result.push("P")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[16].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="Q"){
        result.push("Q")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[17].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="R"){
        result.push("R")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[18].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="S"){
        result.push("S")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[19].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="T"){
        result.push("T")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[20].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="U"){
        result.push("U")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[21].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="V"){
        result.push("V")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[22].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="W"){
        result.push("W")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[23].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="X"){
        result.push("X")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[24].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="Y"){
        result.push("Y")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
array[25].mouseClicked(function(){
    c=c+1
    if(word.charAt(p)==="Z"){
        result.push("Z")
        stone.y=stone.y+10
        p=p+1
    }
    else{
        hangman.y=hangman.y+10
    }
})
//current_response = fword.includes(result[result.length-1])

//var response = fword.length === result.length  d&& fword.every(function (element) { return result.includes(element); });


  console.log(c)
  console.log(fword.length)
}
    fill("black")
    textSize(25)
    textAlign(CENTER)
    text (hint[rand].toUpperCase(),500,40)
 
    for (var i=0;i<result.length;i++){
     text(result[i],360+i*70,85)
     if(i==fword.length-1){
         stone.velocityY=5
         if(mon.y>450){
            mon.destroy()
            stone.destroy()
         }
         
     }
}
 if (c>fword.length-2 && result.length<fword.length){
     hangman.velocityY=2

     if (hangman.y>=480){
         hangman.destroy()
     }
 }


    for (var i=330, c= 0;c<fword.length;i=i+70){
        stroke("black")
        line(i,90,i+50,90)
        c++
    }
}
