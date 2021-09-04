class Tool {

    constructor(x,y,w,h) {

        var options = {
            isStatic: true,
        }

        this.body = Bodies.rectangle(x,y,0,0,options);

        this.w = w;
        this.h = h;

        World.add(world, this.body);

    }

    display(screw1, nail1, nail2, bolt1, bolt2, pencil) {

        var pos = this.body.position;


        noFill();
        strokeWeight(0);

        imageMode(CENTER);
        if (fastener.y <= dHeight*.625){
            if (toolSwitch === 0){
                if (fastenerArray[0] === 1){
                    image(screw1,pos.x,pos.y,this.w,this.h); 
                }
                else if (fastenerArray[0] === 2){
                    image(nail1,pos.x,pos.y,this.w,this.h); 
                }
                else if (fastenerArray[0] === 3){
                    image(bolt1,pos.x,pos.y,this.w,this.h); 
                }
            }
            else if (toolSwitch === 1){
                if (fastenerArray[0] === 1){
                    image(screw1,pos.x,pos.y,this.w,this.h); 
                }
                else if (fastenerArray[0] === 2){
                    image(nail2,pos.x,pos.y,this.w,this.h); 
                }
                else if (fastenerArray[0] === 3){
                    image(bolt2,pos.x,pos.y,this.w,this.h); 
                }
            }
        }
        else if (fastener.y > dHeight*.625) {
            image(pencil,pos.x,pos.y,this.w,this.h); 
        }
        
    }
}