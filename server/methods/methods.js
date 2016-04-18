import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Things } from '/lib/collections';

export default function () {
  Meteor.methods({
    'wipeAndInitialize'() {
      Things.remove({});

      for (let i = 0; i < 3; i++) {
        Things.insert({
          text: `some text ${i}`
        });
      }
    }
  });

  Meteor.methods({
    'things.add'() {
      const count = Things.find().count();

      const id = Things.insert({
        text: `some text ${count}`
      });

      return id;
    }
  });

  Meteor.methods({
    'users.add'({username, password}) {
      const id = Accounts.createUser({
        username,
        password
      });
      return id;
    }
  });
}
