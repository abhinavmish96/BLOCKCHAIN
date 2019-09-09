/**
* Setup the demo
* @param {org.hcsc.network.SetupDemo} setupDemo - the SetupDemo transaction
* @transaction
*/function setupDemo(setupDemo) {    
    var factory = getFactory();
    var NS = 'org.hcsc.network';
    var roles = ['suppliers', 'manufacturers', 'distributors', 'retailers', 'customers'];
    var members = {};
    
    for (var role in setupDemo) {
      var type = (role.charAt(0).toUpperCase() + role.slice(1)).slice(0, -1);
      if (setupDemo[role] && roles.indexOf(role) !== -1) {
          members[role] = [];
          setupDemo[role].forEach(function(participant) {
              var newRole = factory.newResource(NS, type, participant.tradeId);
              newRole.companyName = participant.companyName;
              members[role].push(newRole);
          });      
      } 
    }   