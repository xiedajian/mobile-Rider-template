import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimeToStringPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'timeToString',
})
export class TimeToStringPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
      var d = new Date(value);    //根据时间戳生成的时间对象
      var date = (d.getFullYear()) + "-" +
          (d.getMonth() + 1) + "-" +
          (d.getDate()) + " " +
          (d.getHours()) + ":" +
          (d.getMinutes()) + ":" +
          (d.getSeconds());
    return date;
  }
}
