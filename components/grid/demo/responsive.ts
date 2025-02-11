import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-responsive',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col nzXs="2" nzSm="4" nzMd="6" nzLg="8" nzXl="10">Col</div>
      <div nz-col nzXs="20" nzSm="16" nzMd="12" nzLg="8" nzXl="4">Col</div>
      <div nz-col nzXs="2" nzSm="4" nzMd="6" nzLg="8" nzXl="10">Col</div>
    </div>
  `
})
export class NzDemoGridResponsiveComponent {}
