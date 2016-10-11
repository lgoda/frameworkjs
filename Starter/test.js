(function() {
      var Greetr = function(firstName, lastName) {
                return new Greetr.init(firstName, lastName);
      }

      Greetr.prototype.fullName = function() {
        console.log('Hello ' + this.name + ' ' + this.surname );
      };

      Greetr.init = function(name, surname) {
         var self = this;
         self.name = name;
         self.surname = surname;
      };
      Greetr.init.prototype = Greetr.prototype;

      global._ = Greetr;
    }
());

_('Luigi', 'Pontieri').fullName();
