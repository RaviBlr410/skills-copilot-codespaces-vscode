function skillsmember() {
   return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: 'True',
    scope: {
        member: " "
    }
       } 
}