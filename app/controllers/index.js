import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

// This listens for changes made to the email address in real time. It is called everytime something changes in the email address (with every typey-type that )
  actualEmailAddress: Ember.computed('emailAddress', function() { 
    // computed function is performed on get
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'))
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() { 
    // oberver function is called on set
    console.log('observer is called', this.get('emailAddress'))
  }),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress')

      const newInvitation = this.store.createRecord('invitation', {
        email: email
      })

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`)
        this.set('emailAddress', '')
      })
    }
  }
})
