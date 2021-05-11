import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'mg-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {

  imgSrc: string;
  selectedImage : any = null;
  isSubmitted:boolean;

  formTemplate = new FormGroup({
    caption : new FormControl('',Validators.required),
    imageUrl : new FormControl('',Validators.required)
  })

  constructor(private storage : AngularFireStorage) { }

  ngOnInit(): void {
    this.resetFrom();
  }

  showPreview(event : any){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }else{
      this.imgSrc = '/assets/img/winkboy.svg';
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
    this.imgSrc = '/assets/img/winkboy.svg';
    this.selectedImage = null;
    this.isSubmitted=false;
  }
}
