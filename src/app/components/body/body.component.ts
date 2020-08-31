import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    show = true;

    phrase: any = {
        message: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Uncle Ben'
    };

    characters: string[] = ['Venom','SpiderMan','Dr. Octopus']
}