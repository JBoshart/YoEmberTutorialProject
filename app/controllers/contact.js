import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  textMessage: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isMessage: Ember.computed.notEmpty('textMessage'),

  isValid: Ember.computed.and('isValidEmail', 'isMessage'),

  actions: {
    saveMessage() {
      alert(`We are in the process of sending your message: ${this.get('textMessage')}`)
      this.set('responseMessage', `Thank you! Your message has been sent. A response will be sent to: ${this.get('emailAddress')}`)
      this.set('textMessage', '')
      this.set('emailAddress', '')
    }
  }

});
