import { Component, Input } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
})
export class RenderComponent {
  @Input() items: string[] = [];
  @Input() isData = false;
  datas: string[] = [];

  async showData(data: string[]) {
    try {
      
      const result = await axios.post('http://localhost:3000/api', { people: data });
      console.log(result.data.data);
      this.isData = true;
      this.datas = result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
