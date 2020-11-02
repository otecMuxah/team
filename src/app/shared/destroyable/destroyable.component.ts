import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-destroyable',
  template: '',
})
export class DestroyableComponent implements OnDestroy {
  protected destroy$$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
