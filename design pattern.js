/* -------------------------------------------------------------------------- */
/*                                  Singleton                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Singleton:

//lw 3nde 7aga mo3yna 3ayz 23ml mnha object wa7d bs. fa 3ayz 2zbt creation el object, b7es eno mynf3sh yt3mlo creation 8er mara w7da bs.(ex: 7aga zy singleplayer game msln, fa 3ayz 2dmn en mynf3sh yt3ml 8er player wa7d bs)

// returning the same instance when someone asks for one.

//* implementation1:
/* class singletonSinglePlayer {
  constructor() {
    let firstInstance = this.constructor.instance;
    if (this.constructor.instance) {
      return firstInstance;
    }
    this.constructor.instance = this;
  }
} */
//* implementation2 (equivalent to implementation1):
/* class singletonSinglePlayer {
  static firstInstance;
  constructor() {
    if (singletonSinglePlayer.firstInstance) {
      return singletonSinglePlayer.firstInstance;
    }
    singletonSinglePlayer.firstInstance = this;
  }
} */

//*test:
/* let p1 = new singletonSinglePlayer();
p1.name = 111;
let p2 = new singletonSinglePlayer();
p2.name = 222;
console.log(p1);
console.log(p2);
console.log(p2 === p1); */

/* -------------------------------------------------------------------------- */
/*                                  Prototype                                 */
/* -------------------------------------------------------------------------- */
//ANCHOR Prototype:

//dah mohm 3shan nst5dmo lma nkon 3yzen n3ml create l object, ykon feh 5asya eno y2dr yt3mlo cloning.

//*problem
/* class Person {
  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }
  clone() {
    return new Person(this.name, this.adress.clone());
  }
}
class Adress {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
  clone() {
    return new Adress(this.street, this.city, this.country);
  }
} */
//*test:
/* let nady = new Person('nady', new Adress('75 badr', 'cairo', 'Egypt'));
let khaled = nady.clone();
khaled.name = 'khaled';
console.log(nady);
console.log(khaled);
console.log(nady === khaled); */
//mbd2yen kda mynf3sh n3ml cloning bl copy el 3ady (let khaled=nady) 3shan hykon pass by referance w msh hynf3 n3dl zy ma7na 3yzen fl gded mn 8er my2sr 3l 2dem.
//fa kda m7tagen n3ml clone function, t3ml return new object, bs el mohskla en 2y 7aga gwa el return bt5od object, htt3ml by referance brdo, fa m7tag 23ml clone function 3nd kol el objects/classes ele 3nde w dah mwdo3 mo2rf tb3an.

//* implementation
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

/* var vehicle = {
  getModel: function () {
    console.log('The model of this vehicle is..' + this.model);
  },
};

var car = Object.create(vehicle, {
  id: {
    value: 1235,
    // writable:false, configurable:false by default
    enumerable: true,
  },

  model: {
    value: 'Ford',
    enumerable: true,
  },
}); */

//*test:
// car.getModel();

/* -------------------------------------------------------------------------- */
/*                                   Builder                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Builder:
//The builder pattern is a type of creational pattern that helps in building complex objects using simpler objects. It provides a flexible and step-by-step approach towards making these objects and keeps the representation, and the process of creation shielded.

//bst5dmo lma ykon 3nde object kbeer zy kda msln new person(nady,true,true,false,50,900). 3shan myba2sh s3b ene 23od 27fz eh ele el mfrod kol input by3br 3no w lazm 2shof el class bta3 el object bnfsy, fa 2fdl ene 2a2sm createion bta3 el object l piecewise.wel mwdo3 dah byotlq 3aleh telescope anti pattern, fa el builder by7l moshklt el antipattern dah.

//*example1:
/* class Person {
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.manager = builder.manager;
    this.manager = builder.manager;
    this.hours = builder.hours;
    this.money = builder.money;
  }
}
class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager() {
    this.manager = true;
    return this;
  }

  makeTime(time) {
    this.hours = time;
    return this;
  }

  withMoney(money) {
    this.money = money;
    return this;
  }
  build() {
    return new Person(this);
  }
} */

//* test:
/* let nady = new PersonBuilder('Nady')
  .makeEmployee()
  .makeManager()
  .makeTime(60)
  .withMoney(1000)
  .build();
console.log(nady); */

/* -------------------------------------------------------------------------- */
/*                                   Factory                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Factory:

// factory: a component responsible for solely, the wholesale(not piecewise as builder) creation of objects.

/* The Factory pattern can be especially useful when applied to the following situations:
1) When our object or component setup involves a high level of complexity
2) When we need to easily generate different instances of objects depending on the  environment we are in
3) When we're working with many small objects or components that share the same properties
4) When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling. */

//* the problem:
/* let coordinateSystem = {
  caretesian: 0,
  polar: 1,
};
class Point {
  constructor(a, b, cs = coordinateSystem.caretesian) {
    switch (cs) {
      case coordinateSystem.caretesian:
        this.x = a;
        this.y = b;
        break;
      case coordinateSystem.polar:
        this.x = a*Math.cos(b);
        this.y = a*Math.Sin(a);
        break;
    }
  }
} */
// lw e7na 3yzen n5lee el constructor function t3ml create object b2shkal mo5tlfa, w feh paramters mo5tlfa moomkn td5ol kteer gedan msln. s3tha moomkn n3ml el 7al dah.
//lakn hnla2e en feh kda moshkla w heya en 3shan 2gy 2zwd e5tyar kaman hd5ol gwa el constructor function w23od 23ml modification, w kda b3ml violation ll OCP, el mfrod 25le el t3delat tkon mn bara 3shan 2zwd br7ty mn bara el constuctor w mt2srsh 3l testing wl kalam dah.
//8er kaman en el 7al w7sh 3shan el paramters (a,b) esmhom msh by3br 3n dol x,y wala msln rho,theta wala eh bzbt.
//w hena yzhr fkrt el 7al fel factory method. w deh method hn3mlha tkon heya ele t3m create ll object w btkon static fl 8aleb.

//* factory implementation :
/* class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }
  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
} */
// el 7al dah kwis, bs el moshkla hena en SRP 7slo violation, 3shan el class mba2sh ms2ol 3n 7aga w7da w b2a 3nde 2ktr mn sbb 2d5ol gwah lw 3ozt 23dl fe 7aga mn el factory methods. fa 3shan kda ana 3yz 2fsl el fatcory methods deh bara

/* class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static factory() {
    return new PointFactory();
  }
}
class PointFactory {
  //factory methods

  newCartesianPoint(x, y) {
    return new Point(x, y);
  }
  newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
} */

//* test:
/* // let p = PointFactory.newCartesianPoint(2, 3); //lw el factory methods static static
let p = Point.factory().newCartesianPoint(2, 3);
console.log(p); */

/* -------------------------------------------------------------------------- */
/*                                   Adapter                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Adapter(old to new interface,and between them an adapter):
//The adapter pattern allows those classes to work together that couldn’t because of having different interfaces (properties/methods of an object). It translates the interface for a class to make it compatible with another class.
//This pattern is useful if an API is modified or new implementations are added to it. In this case, if the other parts of a system are still using the old API, the adapter pattern will translate the interface such that the two can work together.

/* //*example1:
// old interface
class TruthAndDare {
  constructor() {
    this.turn = Math.floor(Math.random() * 2) + 1;
  }
  Getturn() {
    if (this.turn == 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
    return this.turn;
  }
  playGame(playerOnename, playerTwoname) {
    if (this.Getturn() == 1) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}
// new interface
class NewTruthAndDare {
  constructor(randomValue) {
    this.randomValue = randomValue;
  }
  newplayGame(playerOnename, playerTwoname) {
    if (this.randomValue % 2 === 0) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}
// Adapter Class
class Adapter {
  constructor(randomValue) {
    this.newTruthAndDare = new NewTruthAndDare(randomValue);
  }
  playGame(playerOnename, playerTwoname) {
    return this.newTruthAndDare.newplayGame(playerOnename, playerTwoname);
  }
} */

//* test:
/* let adapter = new Adapter(61);
let player = adapter.playGame('nady', 'saeed');
console.log(player); */

/* -------------------------------------------------------------------------- */
/*                                   Bridge                                   */
/* -------------------------------------------------------------------------- */
//ANCHOR Bridge:

//el frka hena en bykon 3nde mgmo3a mn el 2shya2(objects/classes) ele shbh b3d zy msln shapes(circle,triangle,square,...), w mgmo3a tnya mn el 2shya2 ele bt3tmd 3ala kol she2 wa7d mnhom lw7doh, zy hena msln renderer(vector,raster,...).
//el moshkla hnla2e en 3dd el classes ele 3yz 23mlha hyzed gedan w hykon bysawy n*m, 7es en n 3dd el shapes, w m 3dd el renerer. fa msln lw 3nde 3 shapes w 2 renderer hykon 3nde 3*2=6 subclasses.wel mwdo3 byban 2s3b lw 3nde msln 5*10 hyb2a 50 subclass.
//circle=>1)raster  triangle=>3)vector  square=>5)vector
//      =>2)vector          =>4)raster        =>6)raster

//fa el 7al hena bykon ene 2rbot el mgmo3tan mn el 2shya2 bb3d(bridge), w dah bykon gwa class el shapes nfsha, b7es ene 2d5l ll circle msln no3 el she2 ele 3yzo.

//* implementation:
/* class Shapes {
  //the bridge is here(renderer)
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shapes {
  //the bridge is here(renderer)
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }
  draw() {
    this.renderer.renderCircle(this.radius);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`draw circle of radius ${radius}`);
  }
}
class VectorRenderer {
  renderCircle(radius) {
    console.log(`draw circle of radius ${radius}`);
  }
} */

//* test:
/* let renderer = new RasterRenderer();
let circleObject = new Circle(renderer, 5);
console.log(circleObject);
circleObject.draw(); */

/* -------------------------------------------------------------------------- */
/*                                  Composite                                 */
/* -------------------------------------------------------------------------- */
//ANCHOR Composite:

//The composite pattern is used to structure objects in a tree-like hierarchy. Here, each node of the tree can be composed of either child node(s) or be a leaf (no children objects). This pattern allows the client to work with these components uniformly; that is, a single object can be treated exactly how a group of objects is treated.

//This pattern allows the formation of deeply nested structures. If a leaf object receives the request sent by the client, it will handle it. However, if the recipient is composed of children, the request is forwarded to the child components.

/* 
1) Component: an abstract class that contains methods get that are used in managing the children. The component can be a leaf object or composite.
2) Composite: it is the subclass that implements component. It is composed of other components, that is, has children.
3) Leaf: it is the subclass that implements component. It does not have children.
 */

// el fkra hena en el object ele leh childrens(composit), y2dr brdo yst5dm nfs el methods bta3t el object ele mlosh children(leaf).
//y3ny Developers w FreeLanceDev (leafs) 3ndhom function getProgress, w brdo DevTeamLead (composite) 3ndo function getProgress bs bfr2 enha btt3ml 3ala el childrens.

//* implementation:
/* //Component
class Employee {
  constructor(name, position, progress) {
    this.name = name;
    this.position = position;
    this.progress = progress;
  }

  getProgress() {}
}

//Leaf subclass
class Developers extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress;
  }
}

//Leaf subclass
class FreeLanceDev extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }
  getProgress() {
    return this.progress;
  }
}

//Composite subclass
class DevTeamLead extends Employee {
  constructor(name, position) {
    super(name, position);
    this.children = [];
  }
  add(employee) {
    this.children.push(employee);
  }
  remove(employee) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i] === employee) {
        this.children.splice(i, 1);
        return this.children;
      }
    }
  }
  getProgress() {
    for (var i = 0; i < this.children.length; i++) {
      console.log(this.children[i].getProgress());
    }
  }

  showTeam() {
    for (var i = 0; i < this.children.length; i++) {
      console.log(this.children[i].name);
    }
  }
} */

//* test:
/* const seniorDev = new Developers('Rachel', 'Senior Developer', '60%');
const juniorDev = new Developers('Joey', 'Junior Developer', '50%');
const teamLead = new DevTeamLead('Regina', 'Dev Team Lead');
teamLead.add(seniorDev);
teamLead.add(juniorDev);
teamLead.showTeam();
teamLead.getProgress();
teamLead.remove(seniorDev);
teamLead.showTeam();
const freelanceDev = new Developers('Ross', 'Free Lancer', '80%');
console.log(freelanceDev.getProgress());
//Note that the freelanceDev is not a part of the team. However, his progress can be accessed the same way we access the progess for a composite subclass. */

/* -------------------------------------------------------------------------- */
/*                                  Decorator                                 */
/* -------------------------------------------------------------------------- */
// ANCHOR Decorator(wrapper-icecrame=>shapes(colored-transperent)):
//The decorator pattern focuses on adding properties, functionalities, and behavior to existing classes dynamically. y3ny lw 3nde object 3yz 2zwdlo 7agat zy kda,hzwdlo bwrraper 7wlah y3ml el 7aga el zyada deh w hakza, el object el gded ele hytl3 moomkn 23mlo wraper kaman mara y3ml 7aga gdeda tany.
//y3ny zay lw 3nde shape mo3yn msln, fl 2wel h3ml shape ele 3yzo 3ady circle,trianlge kda y3ny. w b3d kda b2a hshoof eh el 7agat ele moomkn 23oz 2zwdha, w23mlha function 2w class tany lw7dha< b7es tkon ynf3 t3ml wrapper l2y shape 3nde, tzwd el properties wl functionalities bta3t el shape(object) dah.
//* implementation:
/* class shape {}

class circle extends shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  resize(factor) {
    this.radius *= factor;
  }
  getData() {
    return `A circle of radius ${this.radius} `;
  }
}
class coloredShape extends shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }
  getData() {
    return `${this.shape.getData()}` + `has color ${this.color} `;
  }
}

class transperentShape extends shape {
  constructor(shape, transperency) {
    super();
    this.shape = shape;
    this.transperency = transperency;
  }
  getData() {
    return `${this.shape.getData()} ` + `has transperency ${this.transperency}`;
  }
} */
//* test:
/* let circle1 = new circle(5);
console.log(circle1.getData());
let coloredCircle1 = new coloredShape(circle1, 'red');
console.log(coloredCircle1.getData());
let transperentShape1 = new transperentShape(coloredCircle1, '100');
console.log(transperentShape1.getData());

//feh hena moshkla w heya en lw 3ayz 2st5dm functions mn bta3t el shapes mynf3sh direct lazm 23ml kda(.shape)
transperentShape1.shape.shape.resize(4);
console.log(transperentShape1.getData()); */

/* -------------------------------------------------------------------------- */
/*                                  Flyweight                                 */
/* -------------------------------------------------------------------------- */
//ANCHOR Flyweight (for space optimization):
// A space optimization technique, that lets us use less memory, by storing externally ,tha data associated with similar objects.

//It is a structural pattern that focuses on the sharing of data amongst related objects. It helps prevent repetitive code, hence, increases efficiency when it comes to data sharing as well as conserving the memory.
//It takes the common data structs/objects that are used by a lot of objects and stores them in an external object (flyweight) for sharing; you could say that it is used for caching purposes. So the same data does not need to have separate copies for each object; instead, it is shared amongst all.

//8alban byost5dm fe 7aga shbh el singleton, y3ny lw 3ayz msln 23ml objects kteer w fe mnha mtkrr, 23ml check el 2wel lw mtkrra 2rg3 ele mwgoda 2sln 8er kda 23mlo create gded 3ady. shbh el singlton bs n2dr n2ol en el singlton bykon object wa7d mytkrrsh 3ala mstwa el app, enma hena 2ktr mn object.

//* example1:
/* class Color {
  constructor(name) {
    this.name = name;
  }
}
class colorCreator {
  constructor() {
    this.colors = {};
  }
  create(name) {
    let color = this.colors[name];
    if (color) return color;
    this.colors[name] = new Color(name);
    return this.colors[name];
  }
} */

//* example2:
/* class Dress {
  constructor(serialNumber, type, color, designer, availability) {
    this.serialNumber = serialNumber;
    this.type = type;
    this.color = color;
    this.designer = designer;
    this.availability = availability;
    this.price = 0;
  }
  dressPrice() {
    //define
    switch (this.type) {
      case 'skirt':
        return 500;
      case 'gown':
        return 2000;
      case 'maxi':
        return 1000;
    }
  }
}

// h3ml hena DressFactory class ykon hwa ele y3ml create ll object b function tkon bt3ml check lw el object dah et3ml abl kda wala la2, b7es lw et3ml 2bl kda 2tl3 ele mt5zn w m3mlsh gded.
class DressFactory {
  constructor() {
    this.dresses = {};
  }
  createDress(serialNumber, type, color, designer, availability) {
    if (this.dresses[serialNumber]) {
      return this.dresses[serialNumber];
    }
    this.dresses[serialNumber] = new Dress(
      serialNumber,
      type,
      color,
      designer,
      availability
    );
    return this.dresses[serialNumber];
  }
} */
//*test:
/* const factory = new DressFactory();
const pinkdress1 = factory.createDress('#123', 'skirt', 'pink', 'Zara', 'yes');
const pinkdress2 = factory.createDress('#123', 'skirt', 'pink', 'Zara', 'yes');
console.log(pinkdress1 === pinkdress2);
console.log(pinkdress1.dressPrice());
console.log(pinkdress2.dressPrice()); */

/* -------------------------------------------------------------------------- */
/*                                   Facade                                   */
/* -------------------------------------------------------------------------- */
//ANCHOR Facade(مظهر زائف):
//provides a simple,easy to understand user interface over a large and sophisticated body of code.

//Abstract Factory can serve as an alternative to Facade when you only want to hide the way the subsystem objects are created from the client code.

//* example1:
/* class Inventory {
  constructor() {
    this.shampoosAmount = 20;
    this.conditionersAmount = 20;
    this.hairSerumsAmount = 1000;
  }
  checkInventory(product) {
    let available = true;
    if (
      product.productName == 'shampoo' &&
      product.amount > this.shampoosAmount
    ) {
      available = false;
      return available;
    } else if (
      product.productName == 'conditioner' &&
      product.amount > this.conditionersAmount
    ) {
      available = false;
      return available;
    } else if (
      product.productName == 'hair serum' &&
      product.amount > this.hairSerumsAmount
    ) {
      available = false;
      return available;
    }
    return available;
  }
}
//the Facade
class BuyingProduct extends Inventory {
  buyProduct(product) {
    let order;
    if (this.checkInventory(product)) {
      order = new BuyProduct();
    } else {
      order = new PreOrderProduct();
    }
    return order.showDetails(product);
  }
}

class BuyProduct {
  showDetails(product) {
    console.log(
      `${product.amount} bottles of ${product.productName} are available. Click on "buy" to purchase them.`
    );
  }
}
class PreOrderProduct {
  showDetails(product) {
    console.log(
      `${product.amount} bottles of ${product.productName} are not available. You can Pre-order them on the next page.`
    );
  }
} */

//* test:
/* var customer = new BuyingProduct()
customer.buyProduct({productName: "shampoo", amount: 2})
customer.buyProduct({productName: "hair serum", amount: 2000}) */

/* -------------------------------------------------------------------------- */
/*                                    Proxy                                   */
/* -------------------------------------------------------------------------- */
//ANCHOR Proxy(وكيل):
//As the name implies, the proxy pattern is a structural pattern that creates a proxy object. It acts as a placeholder for another object, controlling the access to it.
//Usually, an object has an interface with several properties/methods that a client can access. However, an object might not be able to deal with the clients’ requests alone due to heavy load or constraints such as dependency on a remote source that might cause delays (e.g., network requests). In these situations, adding a proxy helps in dividing the load with the target object.

//The proxy object looks exactly like the target object. A client might not even know that they are accessing the proxy object instead of the target object. The proxy handles the requests from the clients and forwards them to the target object. Hence, this prevents undue pressure on the target.

//The proxy can also act as a cache and store the requests. When the same request is made again, it can just return it from the cache rather than forwarding it to the target. This allows the target to deal with a lesser number of requests.

//* example1:
/* class LibraryKiosk {
  open(app) {
    console.log(`Opening ${app}`);
  }
  connectTo(website) {
    console.log('Connecting to ' + website);
  }
}
class ProxyLibraryKiosk {
  constructor() {
    this.libraryKiosk = new LibraryKiosk();
    this.blockedSites = [
      'fb.com',
      'instagram.com',
      'snapchat.com',
      'google.com',
      'gmail.com',
    ];
    this.blockedApps = ['camera', 'photos', 'music', 'settings'];
  }
  open(app) {
    if (this.blockedApps.includes(app)) {
      console.log(`You can't access the ${app}`);
    } else {
      this.libraryKiosk.open(app);
    }
  }
  connectTo(website) {
    if (this.blockedSites.includes(website)) {
      console.log(`Access to ${website} denied`);
    } else {
      this.libraryKiosk.connectTo(website);
    }
  }
} */

//* test:
/* var libraryKiosk = new ProxyLibraryKiosk();
libraryKiosk.open('photos');
libraryKiosk.open('Chrome');
libraryKiosk.connectTo('booksportal.com');
libraryKiosk.connectTo('google.com'); */

/* -------------------------------------------------------------------------- */
/*                           Chain of Responsibility                          */
/* -------------------------------------------------------------------------- */
//ANCHOR Chain of Responsibility:
//The chain of responsibility pattern allows a request sent by a client to be received by more than one object. It creates a chain of loosely coupled objects that, upon receiving the request, either handle it or pass it to the next handler object.
//A common example of this pattern is event bubbling in DOM. An event propagates through different nested elements of the DOM until one of them handles it.
//You can use it if your program is to handle various requests in different ways without knowing the sequence and type of requests beforehand. It allows you to chain several handlers, thus, allowing all of them a chance to process the request.

//*example1:
/* class Employee {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getType() {
    return this.type;
  }
  getName() {
    return this.name;
  }
}
// Chain of Responsibility abstract class
class EmployeeChain {
  setNextEmp(nextEmpInChain) {}
  assignWork(req) {
    console.log('No work for: ' + req.getType());
  }
}
class EasyLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }
  setNextEmp(nextEmpInChain) {
    this.nextEmpInChain = nextEmpInChain;
  }
  assignWork(req) {
    if (req.getType() === 'Easy') {
      console.log(req.getType() + ' work assigned to: ' + req.getName());
    } else {
      this.nextEmpInChain.assignWork(req);
    }
  }
}
class MediumLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }
  setNextEmp(nextEmpInChain) {
    this.nextEmpInChain = nextEmpInChain;
  }
  assignWork(req) {
    if (req.getType() === 'Medium') {
      console.log(req.getType() + ' work assigned to: ' + req.getName());
    } else {
      this.nextEmpInChain.assignWork(req);
    }
  }
}
class HardLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }
  setNextEmp(nextEmpInChain) {
    this.nextEmpInChain = nextEmpInChain;
  }
  assignWork(req) {
    if (req.getType() === 'Hard') {
      console.log(req.getType() + ' work assigned to: ' + req.getName());
    } else {
      this.nextEmpInChain.assignWork(req);
    }
  }
} */

//* test:
/* var w1 = new EasyLevelWorkHandler();
var w2 = new MediumLevelWorkHandler();
var w3 = new HardLevelWorkHandler();
w1.setNextEmp(w2);
w2.setNextEmp(w3);

const emp1 = new Employee('Joe', 'Easy');
const emp2 = new Employee('Anne', 'Medium');
const emp3 = new Employee('Shawn', 'Hard');

w1.assignWork(emp1);
w1.assignWork(emp2);
w1.assignWork(emp3); */

/* -------------------------------------------------------------------------- */
/*                                  Observer                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Observer:
//It allows objects (observers) that have subscribed to an event to wait for input and react to it when notified; meaning, they don’t have to continuously keep on checking whether the input has been provided or not. The main subject maintains a list of all the observers, and whenever the event occurs, it notifies the observers so they can update their states accordingly.

//3nde talat 3nasr 2sasya:
//1) el list ele feha el observers
//2) lma y7sl el 7ds ele 3nde 23ml s3tha notify ll observers dol(htkon function lw7dha fl class bt3ml notify ll observers wa7d wa7d)
//3) 3nd kol observer hykon leh update method heya ele htkon fe function ele bt3ml nofity.

//*example1:

//main Class(Observable)(subject)
/* class Product {
  constructor() {
    // m3lomat el 7ads
    this.price = 0;
    //list of observers
    this.observers = [];
  }

  //add observers(register/subscribe)
  register(observer) {
    this.observers.push(observer);
  }

  //el 7ds ele h3ml feh notify ll observers
  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  //hena h3ml notify l kol observer wa7d wa7d(gwaha update)
  notifyAll() {
    return this.observers.forEach((el) => {
      el.update(this);
    });
  }
}

//the observers and the update method for eachone
class fees {
  update(product) {
    product.price = product.price * 1.2;
  }
}
class profit {
  update(product) {
    product.price = product.price * 2;
  }
  // 23tqd en update=next (in andre react course)
} */

//* test:
/* let fees1 = new fees();
let profit1 = new profit();
let product1 = new Product();
product1.register(fees1);
product1.register(profit1);
product1.setBasePrice(30); */

/* -------------------------------------------------------------------------- */
/*                                  Strategy                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Strategy:
//bykon 3nde strategies mo5tlfa (tro2 mo5tlfa/functions) l3ml nfs el 7aga.
//Strategy is a behavioral design pattern that turns a set of behaviors into objects and makes them interchangeable inside original context object. The original object, called context, holds a reference to a strategy object and delegates it executing the behavior. In order to change the way the context performs its work, other objects may replace the currently linked strategy object with another one.
//Strategy usually describes different ways of doing the same thing, letting you swap these algorithms within a single context class.

//*example1:
/*
 // different strategies:(nfs esm el function fe kol el strategies(paymentAmount))
class SalaryStrategy {
  constructor(paymentDetails) {
    this.salary = paymentDetails.salary;
  }
  paymentAmount() {
    return (this.salary / 12).toFixed(2);
  }
}
class HourlyStrategy {
  constructor(paymentDetails) {
    this.hourlyRate = paymentDetails.hourlyRate;
    this.numOfHours = paymentDetails.numOfHours;
  }
  paymentAmount() {
    return this.hourlyRate * this.numOfHours;
  }
}

// mainClass (context)
class Employee {
  constructor(employeeDetails, paymentDetails) {
    this.name = employeeDetails.name;
    this.paymentDetails = paymentDetails;
  }

  //put the strategy you want here 
  sendPayment(strategyClass) {
    const strategy = new strategyClass(this.paymentDetails);
    const paymentAmount = strategy.paymentAmount();
    console.log(`sendeing ${paymentAmount} to ${this.name}`);
    // (Note i think in typesript this will be the abstract class in grider example for sorter)
  }
} */

//* test:
/* const nady = new Employee({ name: 'nady' }, { salary: 6000 });
const saeed = new Employee(
  { name: 'saeed' },
  { hourlyRate: 30, numOfHours: 180 }
);

nady.sendPayment(SalaryStrategy);
saeed.sendPayment(HourlyStrategy); */

/* -------------------------------------------------------------------------- */
/*                                   Command                                  */
/* -------------------------------------------------------------------------- */
//ANCHOR Command:
//It decouples the objects that send requests from the objects responsible for executing those requests.
//Consider an example where the client is accessing the methods of an API directly throughout the application. What will happen if the implementation of that API changes? The change will have to be made everywhere the API is being used. To avoid this, we could make use of abstraction and separate the objects requesting from those implementing the request. Now, if a change occurs, only the object making the call will need to change.

//1) Client(ana el user): creates a command and sets the receiver who’ll recieve the command.
//2) Reciever(el she2 el 2sasy ex:bankaccount,PrintingMachine): knows how to perform the operations associated with the command
//3) Invoker(AccountManager,PrinterControlPanel): asks the command to carry out the request
//4) Command: has information about the action and binds it to the receiver by invoking the corresponding operation on it.

//*example1:
/* class Command {
  execute(args) {}
}
//Withdraw command
class WithDrawAmount extends Command {
  constructor(bankaccount) {
    super();
    this.bankaccount = bankaccount;
  }

  execute(args) {
    this.bankaccount.withdrawMoney(args);
  }
}
//CheckAmount command
class CheckAmount extends Command {
  constructor(bankaccount) {
    super();
    this.bankaccount = bankaccount;
  }

  execute() {
    this.bankaccount.checkAmount();
  }
}
//DepositAmount command
class DepositAmount extends Command {
  constructor(bankaccount) {
    super();
    this.bankaccount = bankaccount;
  }

  execute(args) {
    this.bankaccount.depositAmount(args);
  }
}
//Invoker
class AccountManager {
  request(command, args) {
    command.execute(args);
  }
}
//Reciever:
class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }

  checkAmount() {
    console.log(this.amount);
  }

  withdrawMoney(withdrawamount) {
    if (withdrawamount > this.amount) {
      console.log('Not enough money');
    } else {
      this.amount -= withdrawamount;
    }
  }
  depositAmount(money) {
    this.amount += money;
  }
} */

//* test:
/*
const account = new BankAccount(100);
const check = new CheckAmount(account);
manager.request(check);
const withdraw = new WithDrawAmount(account);
const deposit = new DepositAmount(account);

const manager = new AccountManager();
manager.request(withdraw, 10);
manager.request(check);
manager.request(deposit, 50);
manager.request(check); */

//*example2:
/* class Command {
  execute() {}
}
//TurnOnPrinter command
class TurnOnPrinter extends Command {
  constructor(printingMachine) {
    super();
    this.printingMachine = printingMachine;
    this.commandName = 'turn on';
  }

  execute() {
    this.printingMachine.turnOn();
  }
}
//TurnOffPrinter command
class TurnOffPrinter extends Command {
  constructor(printingMachine) {
    super();
    this.printingMachine = printingMachine;
    this.commandName = 'turn off';
  }
  execute() {
    this.printingMachine.turnOff();
  }
}
//Print command
class Print extends Command {
  constructor(printingMachine) {
    super();
    this.printingMachine = printingMachine;
    this.commandName = 'print';
  }

  execute() {
    this.printingMachine.print();
  }
}
//Invoker
class PrinterControlPanel {
  pressButton(command) {
    console.log(`Pressing ${command.commandName} button`);
    command.execute();
  }
}
//Reciever:
class PrintingMachine {
  turnOn() {
    console.log('Printing machine has been turned on');
  }

  turnOff() {
    console.log('Printing machine has been turned off');
  }

  print() {
    console.log('The printer is printing your document');
  }
} */

//*test:
/* const printingMachine = new PrintingMachine();
const turnOnCommand = new TurnOnPrinter(printingMachine);
const turnOffCommand = new TurnOffPrinter(printingMachine);
const printCommand = new Print(printingMachine);

const controlPanel = new PrinterControlPanel();
controlPanel.pressButton(turnOnCommand);
controlPanel.pressButton(turnOffCommand);
controlPanel.pressButton(printCommand); */

//ANCHOR most important:

//singleton
//observer
//Factory
//Builder
//strategy
//facade

//ideas only
//proxy
//decorator
//composite
//Flyweight

//to avoid dupilcation
/* 
1) avoid hidden state (like a function should not depend on an outer state to be testable)
2) nested logic (logic should be separated as fine graned functions to be reusable like crud methods)
3)single responsibility princibale
*/

//to make sure we use immutabllity with objects, we can use object.freeze to prevent mutating it
