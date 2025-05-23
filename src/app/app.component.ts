import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { IModel } from '@jupyterlab/services/lib/kernel/kernel';
import { JupyterService } from './shared/services/jupyter.service';
import { SafeUrlModule } from './shared/pipes/safe-url.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    SafeUrlModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly JUPYTER_TOKEN = '441cdff298ec0165db239b60e11c5dd428af242df8184a1f';
  jupyterUrl: string = 'http://localhost:8888/lab?token=' + this.JUPYTER_TOKEN;

  kernels: IModel[] = [];

  constructor(private jupyterService: JupyterService) {}

  getKernels() {
    this.jupyterService.listKernels().then((data: IterableIterator<IModel>) => {
      this.kernels = Array.from(data);

      console.log(this.kernels);
    });
  }

  onClick() {
    this.getKernels();
  }  
}
