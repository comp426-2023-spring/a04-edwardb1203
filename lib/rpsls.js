
export function rps(shot){
    let variables = ['rock', 'paper', 'scissors'];
    if (shot == undefined){
        // If no arg supplied, return a random result. Fn from w3resource.
        return {"player": variables[Math.floor(Math.random()*variables.length)]}
    }
    else {
        shot = shot.toLowerCase();
        // Error if arg supplied is not within our possible results
        if (! variables.includes(shot)){
            return 'out-of-range error';
        }
        else{
            // Create a simulated opponent who selects a random variable
            let bot = variables[Math.floor(Math.random()*variables.length)];
            // Set the result based on rps rules
            let result = 'tie';

            if (shot == 'rock'){
                if(bot == 'paper'){
                    result = 'lose';
                }
                else if(bot == 'scissors'){
                    result = 'win';
                }
            }
            else if (shot == 'paper'){
                if(bot == 'scissors'){
                    result = 'lose';
                }
                else if(bot == 'paper'){
                    result = 'win';
                }
            }
            else if (shot == 'scissors'){
                if(bot == 'rock'){
                    result = 'lose';
                }
                else if(bot == 'paper'){
                    result = 'win';
                }
            }
            return {"player": shot,  'opponent': bot, 'result': result};
        }
    }
}

export function rpsls(shot){
    let variables = [ 'rock','paper','scissors','lizard','spock'];
    if (shot == undefined){
        // If no arg supplied, return a random result. Fn from w3resource.
        return {"player": variables[Math.floor(Math.random()*variables.length)]}
    }
    else {
        shot = shot.toLowerCase();
        // Error if arg supplied is not within our possible results
        if (! variables.includes(shot)){
            return 'out-of-range error';
        }
        else{
            // Create a simulated opponent who selects a random variable
            let bot = variables[Math.floor(Math.random()*variables.length)];
            // Set the result based on rps rules
            let result = 'tie';

            if (shot == 'rock'){
                if(bot == 'paper'){
                    console.log("Paper covers rock");
                    result = 'lose';
                }
                else if(bot == 'spock'){
                    console.log("Spock vaporizes rock");
                    result = 'lose';
                }
                else if(bot == 'scissors'){
                    console.log("Rock crushes scissors");
                    result = 'win';
                }
                else if(bot == 'lizard'){
                    console.log("Rock smooshes lizard");
                    result = 'win';
                }
            }
            else if (shot == 'paper'){
                if(bot == 'scissors'){
                    console.log("Scissors cut paper");
                    result = 'lose';
                }
                else if(bot == 'lizard'){
                    console.log("Lizard eats paper");
                    result = 'lose';
                }
                else if(bot == 'rock'){
                    console.log("Paper covers rock");
                    result = 'win';
                }
                else if(bot == 'spock'){
                    console.log("Paper disproves Spock... QED!");
                    result = 'win';
                }
            }
            else if (shot == 'scissors'){
                if(bot == 'rock'){
                    console.log("Rock smashes scissors");
                    result = 'lose';
                }
                else if(bot == 'spock'){
                    console.log("Spock smashes scissors");
                    result = 'lose';
                }
                else if(bot == 'paper'){
                    console.log("Scissors cuts paper");
                    result = 'win';
                }
                else if(bot == 'lizard'){
                    console.log("Scissors decapitate lizard");
                    result = 'win';
                }
            }
            else if (shot == 'lizard'){
                if(bot == 'rock'){
                    result = 'lose';
                    console.log("Rock crushes lizard");
                }
                else if(bot == 'scissors'){
                    result = 'lose';
                    console.log("Scissors decapitate lizard");
                }
                else if(bot == 'spock'){
                    result = 'win';
                    console.log("Lizard poisons Spock");
                }
                else if(bot == 'paper'){
                    result = 'win';
                    console.log("Lizard eats paper");
                }
            }
            else if (shot == 'spock'){
                if(bot == 'lizard'){
                    console.log("Lizard poisons Spock");
                    result = 'lose';
                }
                else if(bot == 'paper'){
                    console.log("Paper disproves Spock...QED!");
                    result = 'lose';
                }
                else if(bot == 'scissors'){
                    console.log("Spock smashes scissors");
                    result = 'win';
                }
                else if(bot == 'rock'){
                    console.log("Spock vaporizes rock");
                    result = 'win';
                }
            }
            return {"player": shot,  'opponent': bot, 'result': result};
        }
    }
}