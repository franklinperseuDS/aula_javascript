Protótipos
  
   Todos os objetos JS herdam propriedades e métodos de um prototype o objeto 
   Object.prototype está no topo desta cadeia
  
  
Classes
  Syntatic sugar : uma sintaxe feita para facilitar a escrita

  ex /old : 

  var Meal = function(food) {
      this.food = food
  }

  Meal.prototype.eat = function () {
      return 'nhami';
  }
 
 ex /new ecma6: 
 class Meal {
     constructor(food) {
         this.food = food
     }
 }

 eat() {
     return 'nhami'
 }

 Javascript não possui classes nativamente. Todas as classes são objetos e heranças se dá por protótipos.
 
