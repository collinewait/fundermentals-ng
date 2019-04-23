import { JQ_TOKEN } from './jquery.service';
import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[modalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input() modalTrigger: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalTrigger}`).modal({});
    });
  }
}
