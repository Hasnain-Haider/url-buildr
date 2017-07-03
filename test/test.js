UB = require('../url-buildr')

ub = new UB({
  prefix: 'https://',
  pathPrefix: '/accounts',
  additions: ['users', ':userId', 'cart'],
  port: 65132,
  params: {
    userId: 54298
  },
  host: 'thegreatsite.co',
  queries: {
    showAllPurchases: true
  }
});

console.log(ub.toString());
// ub.set('host', 'google.co.uk');
ub.set({
  host: 'google.co.uk'
});
console.log(ub.toString());
ub.set({port: 3542});
console.log(ub.toString());

 ub2 = new UB('https://thegreatsite.co:65132')
          .add('accounts', '/users', '/:userId/', 'cart')
          .query({showAllPurchases: true})
          .param({userId: 54298});
console.log(ub2.toString());
