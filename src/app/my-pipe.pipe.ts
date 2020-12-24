import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any): any {
  if(value == 'man'){
    return 'Mr.'
  } else {
    return 'Ms.'
  }
  }

}
