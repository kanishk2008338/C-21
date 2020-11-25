function isTouching(p1,p2){

    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2
      && p1.y - p2.y < p2.height/2 + p1.height/2
      && p2.y - p1.y < p2.height/2 + p1.height/2) {
    //movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
    return true;
  }
  else {
    return false;
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  }
  
  }
  function bounceOff(p1,p2){
      if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2) {
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
  p1.velocityX = -1*p1.velocityX;
}
else if( p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2){
        p1.velocityY= -1*p1.velocityY;
    }
  
  //movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
}

function collide(p1,p2){

    if (p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2
      && p1.y - p2.y < p2.height/2 + p1.height/2
      && p2.y - p1.y < p2.height/2 + p1.height/2) {
    //movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
    o1.velocityX=0;
    o1.velocityY=0;
    o2.velocityX=0;
    o2.velocityY=0;
  }
  else {
    return false;
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  }
  
  }