const Ray = function() {

    const ray = {

        length: 0,

        push: function(value){
            this[this.length] = value;
            this.length++;
        },
        
        pop: function() {
            const lastIndex = this.length - 1;
            const toBeRemoved = this[lastIndex]
            delete this[lastIndex]
            this.length = this.length -1;
            
            return toBeRemoved;
        },

        includes: function(value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return true;
                }
        }
        return false;
    },

        indexOf: function(value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return i;
                }
            }
            return -1;
        },

        shift: function() {
            firstElement = this['0']; //?
            this['0'] = 0
            for (let i = 0; i < this.length; i++) {
                this[i] = this[i + 1]; //?
            } 
            delete this[this.length - 1]; //?
            this.length--; //?
            return firstElement; //?
        },

        unshift: function(value) {
            
            for (let i = this.length; i > 0; i--) {
                this[i] = this[i - 1] //?
            } 
            this['0'] = value
            this.length ++;
        },
    
        

    }
    return ray
}

const newObj = Ray(); //?
newObj.push(3); 
newObj.push(7); 
newObj.push(19);

newObj //?

newObj.unshift(12); //?

newObj

module.exports = Ray




