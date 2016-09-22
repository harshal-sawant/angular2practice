import { Pipe, PipeTransform  } from "@angular/core";

@Pipe({ name: 'multiplyby' })
export class CustomPipe implements PipeTransform {
    transform(value:number, multiplyBy:number ) : Number {
        return value * multiplyBy
    }
}