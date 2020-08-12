import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob : string, flag: number): unknown {
    if(!dob){
      return '';
    }
    let dt1 = new Date(dob);
    let diff = Date.now() - dt1.getTime();
    let dt2 = new Date(diff);
    let years = dt2.getFullYear() - 1970;
    let months = dt2.getMonth();
    let days = dt2.getDay();

    switch(flag){
      case 1:
        return `${years} years`;
        break;
      case 2:
        return `${years} years and ${months} months`;
        break;
      case 3:
        return `${years} years ${months} months and ${days} days`;
        break;
      default:
        return `${years} years`;
    }
        
  }

}
