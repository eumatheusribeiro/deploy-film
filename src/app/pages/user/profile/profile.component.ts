import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, finalize, takeUntil } from 'rxjs';
import { ProfileService } from '../../../core/services/profile.service';
import { isEquals } from '../../../utils/obeject-utils';
import { UserProfile } from './interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 /* formulario */
 form!: FormGroup

 /* flags */
 loading = false
 buttonEnabled = false

 /* dadosPerfil */
 dataProfile: UserProfile = {
   first_name: '',
   last_name: '',
   email: '',
   phone: '',
   photo: ''
 }

 updateData!: UserProfile
 profilePhoto: string = '/assets/images/default-profile.png'

 imgResultBeforeCompression: string = "";
 imgResultAfterCompression: string = "";

 darkMode = false
 darkThemeActive = false

 /* unsubscribe */
 unsubscribe: Subject<void> = new Subject()

 constructor(
   private fb: FormBuilder,
   private profileService: ProfileService
 ) {
    if(localStorage.getItem('theme') == 'dark') {
      this.darkThemeActive = true
      this.darkMode = true
      document.documentElement.classList.add('dark')
    }
  }

 ngOnInit(): void {
   this.buildForm()
   this.getData()
   this.captureFormData()
 }

 ngOnDestroy(): void {
   this.unsubscribe.next()
   this.unsubscribe.complete()
 }


 public save() {
   this.buttonEnabled = false
   this.profileService.updateProfile(this.updateData)
   .pipe(takeUntil(this.unsubscribe))
   .subscribe(() => {
     this.getData()
   })
 }

 public updatePhoto(event:any) {
   if(event.target.files) {
     const file: File =  event.target.files[0];
     const filereader = new FileReader()
     filereader.readAsDataURL(file);
     filereader.onload = () => {
       this.profilePhoto = filereader.result as string
     }
   }
 }

 public changeTheme() {
  this.darkMode = !this.darkMode
  if(this.darkMode) {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
  } else{
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  }
}

 private buildForm() {
   this.form = this.fb.group({
     first_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     last_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     email: ['', [Validators.required, Validators.email]],
     phone: ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
     photo: ['']
   })
 }

 private captureFormData() {
   this.form.valueChanges
   .pipe(takeUntil(this.unsubscribe))
   .subscribe((dadosDigitados) => {
     if(!isEquals(this.dataProfile, dadosDigitados) && this.form.valid) {
       this.buttonEnabled = true
       this.updateData = dadosDigitados
     } else {
       this.buttonEnabled = false
     }
   })
 }


 private getData() {
   this.loading = true
   this.profileService.getProfile()
   .pipe(takeUntil(this.unsubscribe), finalize(() => this.loading = false))
   .subscribe((dados) => {
     this.dataProfile = dados
     this.form.patchValue(dados)
     this.profilePhoto = dados?.photo
   })
 }
}
