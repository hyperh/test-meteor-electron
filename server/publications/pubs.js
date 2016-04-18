import {Meteor} from 'meteor/meteor';

const selfFields = {
  username: 1
};

export default function () {
  const SELF = 'self';
  Meteor.publish(SELF, function () {
    if (!this.userId) {
      throw new Meteor.Error(SELF, 'Must be logged in to get self data.');
    }

    return Meteor.users.find(this.userId, {fields: selfFields});
  });
}
