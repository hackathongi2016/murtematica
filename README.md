# angular2-sails

a [Sails](http://sailsjs.org) application with angular 2

GUIES EXTRETES DE:
 a) SAILS START (installation): http://sailsjs.org/get-started
 b) Integrating Angular2 with sails: http://sharpten.com/blog/2016/02/02/integrating-angular-2-with-sails-js.html

Passos a seguir per instal·lar:

1. Si el pc no té el compilador typescript, exectuar: npm install -g typescript
2. Obtenim la gran quantitat de dependencies amb npm install.
 2-a-bug.A dia d'avui haurem d'entrar a l'arxiu "node-modules/angular2/ts/package.json" i posar entre " " els camps que no ho tinguin i comencin per <% (veureu que els altres camps estan amb ""). Això soluciona un important error.
 
Passos per executar, posar en linia:

1. tsc: (compilar typescript a javascript) i tsc -w (compilar typescript a javascript en temps real, de manera que si es fa un canvi modifica el javascript asociat i no cal reiniciar res).
2. sails lift : encenem el server sails

