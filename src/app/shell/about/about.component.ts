import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <h2 class="title">About</h2>
    <ng-container #vc></ng-container>`
})
export class AboutComponent implements OnInit {
    @ViewChild('vc', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;

    constructor() {
    }

    async ngOnInit() {
        const esm = await import('./lazy/lazy.component');
        const ref = this.viewContainer.createComponent(esm.LazyComponent);
        ref.instance.title = `Lazy Sub Component !!`;
        console.log('LazyComponent created', ref);
    }
}

export default AboutComponent;