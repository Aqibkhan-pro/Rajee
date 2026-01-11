// src/app/shared/pipes/is-arabic.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isArabic',
  standalone: true
})
export class IsArabicPipe implements PipeTransform {

  transform(value: string): boolean {
    if (!value) return false;

    const arabicRegex =
      /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

    return arabicRegex.test(value);
  }

}
