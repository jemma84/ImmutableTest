import Immutable from "immutable";

let basket = Immutable.Map({ milk: "yes", flour: "no" });

basket = basket.set("flour", "yes");
console.log(basket.toJS());

let basketDeep = Immutable.Map({
  fruits: Immutable.Map({ oranges: "no" }),
  flour: "no"
});

basketDeep = basketDeep.setIn(["fruits", "oranges"], "yes");
console.log(basketDeep.toJS());
