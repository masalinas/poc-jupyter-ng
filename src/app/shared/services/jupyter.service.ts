import { Injectable } from '@angular/core';
import { ServerConnection, KernelManager } from '@jupyterlab/services';

@Injectable({
  providedIn: 'root'
})
export class JupyterService {

  private serverSettings = ServerConnection.makeSettings({
    baseUrl: 'http://localhost:8888',
    wsUrl: 'ws://localhost:8888',
    token: '441cdff298ec0165db239b60e11c5dd428af242df8184a1f',
  });

  private kernelManager = new KernelManager({ serverSettings: this.serverSettings });

  constructor() {}

  async listKernels() {
    const running = await this.kernelManager.running();
    console.log(running);
    
    return running;
  }
}