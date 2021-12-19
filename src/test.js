import Immutable from "immutable";
const { Map } = require("immutable");

let basket = Immutable.Map({ milk: "yes", flour: "no" });

basket = basket.set("flour", "yes");
console.log(basket.toJS());

let basketDeep = Immutable.Map({
  fruits: Immutable.Map({ oranges: "no" }),
  flour: "no"
}); //all js-objects should be noverted to Map(see below)

basketDeep = basketDeep.setIn(["fruits", "oranges"], "yes");
console.log(basketDeep.toJS());

//easiest way
const originalMap = Immutable.fromJS({
  subObject: {
    subKey: "subvalue",
    subSubObject: {
      subSubKey: "subSubValue"
    }
  }
}); //Deeply converts plain JS objects and arrays to Immutable Maps and Lists.
originalMap.setIn(["subObject", "subKey"], "ha ha!");
