public with sharing class GetAllCars {
    @AuraEnabled(cacheable=true)
    public static List<Car__c> getCars(){
        return [SELECT id,Name,Contact__r.Name FROM Car__c];
    }
}