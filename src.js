var LSystem = (function(){
    /*
    
     evolve takes a config object then 
     evolves it a single generation
     
    Object config
        String axiom,
        
        Number iterations*,
        
        Object rules
            from: to,
            ...
    
     */
    var evolve = function(config){
        var s = "";
        var a = config.axiom || "";
        var r = config.rules || {};
        
        config.iterations = config.iterations || 0;
        
        var keys = Object.keys(r);
        
        for(var i = 0; i<a.length; i++){
            var char = a.charAt(i);
            var index = keys.indexOf(char);
            
            if(index !== -1){
                s += r[keys[index]];
            } else {
                s += char;
            }
        }
        
        if(config.iterations === 0){
            return s;
        } else {
            return evolve({
                axiom: s,
                
                iterations: config.iterations - 1,
                
                rules: r
            });
        }
    };
    
    /*
    
     iterate takes a config object then
     iterates over the axiom
     
    Object config
        String axiom
        
        Object commands 
            char: function onChar
    
     */
    var iterate = function(config){
        var a = config.axiom || "";
        var c = config.commands || {};
        
        for(var i = 0; i<a.length; i++){
            var char = a.charAt(i);
            var onChar = c[char];
            
            if(typeof onChar !== "function"){ continue; }
            
            onChar();
        }
    };
    
    return {
        get evolve() {
            return evolve;
        },
        
        get iterate() {
            return iterate;
        }
    };
})();
