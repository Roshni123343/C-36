class Form{
    constructor(){


    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,20);

        var input = createInput('Name');
        var button = createButton('PLAY');

        var greeting = createElement('h3');
        input.position(130,150);
        button.position(200,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount+= 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html('HELLO' + name);
            greeting.position(130,160);

        })


        
    }



}