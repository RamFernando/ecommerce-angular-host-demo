import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'mg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imgSrc: string = '/assets/img/unnamed.jpg';
  selectedImage : any = null;
  isSubmitted:boolean = false;
  public user:User=new User("","","","","");
  message:any;

  formTemplate = new FormGroup({
    fname : new FormControl('',Validators.required),
    lname : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    imageUrl : new FormControl('',Validators.required)
  })

  constructor(private service: UserRegistrationService,
    private storage : AngularFireStorage) { }

  ngOnInit() {
    this.resetFrom();
  }

  showPreview(event : any){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }else{
      this.imgSrc = '/assets/img/unnamed.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue){
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `users/${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            formValue['imageUrl']=url;
            this.user.imageUrl = url;
            this.registerNow();
            this.resetFrom();
          })
        })
      ).subscribe();
    }
  }

  get formControls(){
    return this.formTemplate['controls'];
  }

  resetFrom(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption:'',
      imageUrl:''
    });
    this.imgSrc = '/assets/img/unnamed.jpg';
    this.selectedImage = null;
    this.isSubmitted=false;
  }

  public registerNow() {
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data)
  }
}
