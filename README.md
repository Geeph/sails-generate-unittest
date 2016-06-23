# sails-generate-unittest

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

Generate a unit test for your Sails app. 

this a fork by [sails-generate-test](https://github.com/sailsjs/sails-generate-test)

## Config/env
you can customize the connection to your preference. **[config/env/test](./templates/config/env/test.js)**

## Necessary module packages
```
npm i --save sails-memory
```

##### Add necessary module packages
In your `package.json` add a script and then Install test packages to your project with: `npm install` :

```json
{
  "devDependencies": {
    "chai": "^3.5.0",
    "grunt": "^1.0.1",
    "grunt-mocha-istanbul": "^5.0.1",
    "istanbul": "^0.4.3",
    "mocha": "^2.5.3",
    "sinon": "^1.17.4",
    "sinon-chai": "^2.8.0",
    "supertest": "^1.2.0"
  }
}
```



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
