import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SongUploadService } from '../../../../service/song-upload.service';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrl: './song-upload.component.css'
})
export class SongUploadComponent implements OnInit {
  uploadForm!: FormGroup;
  imageFile!: File;
  songFile!: File;
  formVisible!: boolean;
  dialogRef: any;

  constructor(private formBuilder: FormBuilder, private songUploadService: SongUploadService ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
    
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.uploadForm.value.title);
    formData.append('artist', this.uploadForm.value.artist);
    formData.append('album', this.uploadForm.value.album);
    formData.append('imageFile', this.imageFile);//img
    formData.append('songFile', this.songFile);//audio
   
console.log(formData);

    this.songUploadService.uploadSong(formData).subscribe(
      () => {
        console.log("done")
        alert('Song uploaded successfully.');
        this.uploadForm.reset();
      },
      (      error: any) => {
        console.error(error);
        alert('An error occurred while uploading the song.');
      }
    );
  }
  onimageFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  onsongFileChange(event: any) {
    this.songFile = event.target.files[0];
    
  }

 
  closeDialog(dialogResult: any = null): void {
    this.dialogRef.close(dialogResult);
  }
}

 