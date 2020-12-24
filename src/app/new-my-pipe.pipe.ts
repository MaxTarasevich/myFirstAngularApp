import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newMyPipe'
})
export class NewMyPipePipe implements PipeTransform {

  transform(value: any): any {
    let re = /cookie/gi;
    let newstr = value.replace(re, '*****');
    return newstr;
  }

}
