function Beverage() {
    this.cost = function(){
        return 0;
    }
    this.description = function(){
        return "";
    }
}

function Americano(beverage) {
    var cost = beverage.cost();
    var description = beverage.description();

    beverage.cost = function() {
        return cost + 3800;
    }
    beverage.description = function() {
        return description + "Americano";
    }
}

function CaffeLatte(beverage) {
    var cost = beverage.cost();
    var description = beverage.description();

    beverage.cost = function() {
        return cost + 4500;
    }
    beverage.description = function() {
        return description + "CaffeLatte";
    }
}

function Cream(beverage) {
    var cost = beverage.cost();
    var description = beverage.description();

    beverage.cost = function() {
        return cost + 500;
    }
    beverage.description = function() {
        return description + ", 크림추가";
    }
}

function Shot(beverage) {
    var cost = beverage.cost();
    var description = beverage.description();

    beverage.cost = function() {
        return cost + 300;
    }
    beverage.description = function() {
        return description + ", 샷추가";
    }
}

var order = new Beverage();
Americano(order);
Cream(order);
Shot(order);
Shot(order);
console.log(order.cost());
console.log(order.description());


