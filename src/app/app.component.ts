import { Component, ElementRef, ViewChild } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { SafeUrlModule } from './shared/pipes/safe-url.module';

import { IModel } from '@jupyterlab/services/lib/kernel/kernel';
import { JupyterService } from './shared/services/jupyter.service';

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
  kernels: IModel[] = [];
  @ViewChild('jupyterIframe') jupyterIframe!: ElementRef;
  
  jupyterUrl: string = 'http://localhost:8888/lab?token=441cdff298ec0165db239b60e11c5dd428af242df8184a1f'; // Change to your Jupyter URL if different

  constructor(private jupyterService: JupyterService) {}

  getKernels() {
    this.jupyterService.listKernels().then(data => {
      this.kernels = Array.from(data);

      console.log(this.kernels);
    });
  }

  onClick() {
    this.getKernels();
  }  
}
