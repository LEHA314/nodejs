const http = require('http');
const Koa = require('koa');
const app = new Koa();
const _ = require('koa-route');

const db = {
  jack: { name: 'jack', species: 'dog' },
  kitty: { name: 'kitty', species: 'cat' },
  snake: { name: 'snake', species: 'snake' }
};

const cb = () => {
    console.log('Listenong on pot 3000');
}

const pets = {
    list: (ctx) => {
        const names = Object.keys(db);
        ctx.body = 'pets: ' + names.join(', ');
    },

    show: (ctx, name) => {
        const pet = db[name];
        if(!pet) return ctx.throw(codes.NOT_FOUND, 'cannot find the pet!');
         ctx.body = pet.name + ' is a ' + pet.species;
    }
}

app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));

http.createServer(app.callback(
    console.log('Listen on 3000')
)).listen(3000);
