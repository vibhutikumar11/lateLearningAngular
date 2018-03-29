import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*variable*/
  title = 'Late learning angular !';

  /*object */
    Obj = {
      id : 1,
      name : "vibhuti",
      email : "vibhutikumar11@gmail.com"
    }

    /*array*/

    arr = ["vibhuti", "kumar", "jha", "vivek", "Ranjan"];

    /*boolean variable*/

    isTrue = false;
    myName = "vibhuti";




}
