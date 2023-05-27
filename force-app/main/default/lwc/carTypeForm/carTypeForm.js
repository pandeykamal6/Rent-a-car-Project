import { LightningElement, wire } from 'lwc';
import queryAllCars from '@salesforce/apex/GetAllCars.getCars';
const carFields = [{ label: 'Car Name', fieldName: 'Name', type: 'text' }, { label: 'Owner Name', fieldName: 'Contact__r.Name', type: 'text' }];
export default class CarTypeForm extends LightningElement {
    carFields = carFields;
    error;
    @wire(queryAllCars)
    carDataValues;

}