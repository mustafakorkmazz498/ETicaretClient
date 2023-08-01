import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message('Mustafa','Korkmaz',{
      messageType : ToastrMessageType.Info,
      position : ToastrPosition.BottomLeft
    });
    toastrService.message('Mustafa','Korkmaz',{
      messageType : ToastrMessageType.Error,
      position : ToastrPosition.TopRight
    });
    toastrService.message('Mustafa','Korkmaz',{
      messageType : ToastrMessageType.Success,
      position : ToastrPosition.TopLeft
    });
    toastrService.message('Mustafa','Korkmaz',{
      messageType : ToastrMessageType.Warning,
      position : ToastrPosition.BottomRight
    });
  }
}
