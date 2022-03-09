import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'Som', this.species[0]);
  submited = false;
  

  onSubmit() {
    this.submited = true;
  }

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  onSubmit() {
    console.warn(this.profileForm.value)
  }

  nameInput = '';
  validationForm = new FormGroup({
    name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  get name() {
    return this.validationForm.get('name');
  }*/

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      console.log(res);
    });
  }

}
