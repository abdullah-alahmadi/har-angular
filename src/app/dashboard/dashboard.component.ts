import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  predictionForm: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.predictionForm = this.fb.group({
      rssi: ['', [Validators.required]],
      A1: ['', [Validators.required]],
      P1: ['', [Validators.required]],
    })
  }

  predictActivity() {
    const { rssi, A1, P1 } = this.predictionForm.value

    const predictRequest = {
      'rssi': rssi,
      'A1': A1,
      'P1': P1
    }

    this.http.post('http://127.0.0.1:3000/predict', JSON.stringify(predictRequest), { responseType: 'text' })
      .subscribe(result => {
        Swal.fire(
          result,
          '',
          'success'
        )
      })

    // console.log(JSON.stringify(predictRequest))

  }

}
