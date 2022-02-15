const { integer } = require('jsonpath/lib/dict');
var m = require('./users.js');


describe('user list',() => {
    integer('matches arrays', () => {
        expect(m.users.toContainEqual('Juntao'));
        expect(m.users.toContain(m.users[0]))
    })
})
const matcher = expect.objectContaining(
    {
        name: expect.stringContaining('Juntao'),
        projects: expect.arrayContaining([
            {name: expect.stringContaining('ThoughtWorks')}
        ])
    }
)