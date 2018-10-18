import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var cv;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('outputImg') outputImg: ElementRef;
  @ViewChild('inputImg') inputImg: ElementRef;
  @ViewChild('inputVideo') inputVideo: ElementRef;
  @ViewChild('outputVideo') outputVideo: ElementRef;
  imgCanvasElement: any;
  videoCanvasElement: any;
  videoCanvasContext: any;
  imageElement: any;
  videoElement: any;
  imageSrc: any;

  isVideoOn = false;
  videoBtnText = 'Start Video';
  videoStream: any;

  src: any;
  dst: any;
  cap: any;

  FPS = 30;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    this.imgCanvasElement = this.outputImg.nativeElement;
    this.imageElement = this.inputImg.nativeElement;
    this.videoCanvasElement = this.outputVideo.nativeElement;
    this.videoCanvasContext = this.videoCanvasElement.getContext('2d');
    this.videoElement = this.inputVideo.nativeElement;
  }

  handleFileChange(event) {
    const _this = this;
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));

    this.imageElement.onload = function () {
      const image = cv.imread(_this.imageElement);
      cv.imshow(_this.imgCanvasElement, image);
      image.delete();
    };
  }

  startVideo() {
    if (this.isVideoOn) {
      this.videoBtnText = 'Start Video';
      this.isVideoOn = false;
      this.stopCamera();
    } else {
      this.startCamera('qvga').then(stream => {
        this.videoBtnText = 'Stop Video';
        this.isVideoOn = true;
        this.videoElement.srcObject = stream;
        this.videoElement.play();
        this.videoStream = stream;
        this.processVideo();
      });
    }
  }

  processVideo() {
    this.src = new cv.Mat(this.videoElement.height, this.videoElement.width, cv.CV_8UC4);
    this.dst = new cv.Mat(this.videoElement.height, this.videoElement.width, cv.CV_8UC1);
    this.cap = new cv.VideoCapture(this.videoElement);
    setTimeout(() => this.processVideo1(), 0);
  }

  processVideo1() {
    if (!this.isVideoOn) {
      this.src.delete();
      this.dst.delete();
      return;
    }
    const begin = Date.now();
    this.cap.read(this.src);
    cv.cvtColor(this.src, this.dst, cv.COLOR_RGBA2GRAY);
    cv.imshow(this.videoCanvasElement, this.dst);
    const delay = 1000 / this.FPS - (Date.now() - begin);
    setTimeout(() => this.processVideo1, delay);
  }

  startCamera(resolution): Promise<MediaStream> {
    const constraints = {
      'qvga': { width: { exact: 320 }, height: { exact: 240 } },
      'vga': { width: { exact: 640 }, height: { exact: 480 } }
    };
    let videoConstraint = constraints[resolution];
    if (!videoConstraint) {
      videoConstraint = true;
    }

    return navigator.mediaDevices.getUserMedia({ video: videoConstraint, audio: false });
  }

  stopCamera() {
    if (this.videoElement) {
      this.videoElement.pause();
      this.videoElement.srcObject = null;
    }
    if (this.videoStream) {
      this.videoStream.getVideoTracks()[0].stop();
    }
  }
}
